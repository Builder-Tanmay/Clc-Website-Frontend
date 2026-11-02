/* Child Learning Centre (CLC) - page behaviour */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '919004460650';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var clamp = function (n, a, b) { return Math.min(b, Math.max(a, n)); };

  /* ======================================================
     Content
     ====================================================== */
  var services = [
    { title: 'Pediatric Occupational Therapy', img: 'assets/services/ot.jpg',
      desc: 'Builds everyday motor coordination, self-care routines and balance through purposeful play.',
      concern: 'Occupational / Sensory' },
    { title: 'Sensory Processing Integration', img: 'assets/services/sensory.jpg',
      desc: 'Helps children cope comfortably with touch, sound, movement and space around them.',
      concern: 'Occupational / Sensory' },
    { title: 'Speech & Language Therapy', img: 'assets/services/speech.jpg',
      desc: 'Strengthens vocabulary, clear pronunciation and conversation with others.',
      concern: 'Speech & Communication' },
    { title: 'ADHD & Behavioural Support', img: 'assets/services/adhd.jpg',
      desc: 'Practical strategies for sustained attention, self-regulation and settling into class.',
      concern: 'ADHD / Attention' }
  ];

  var centres = [
    { name: 'Nerul Centre (Head Office)', category: 'Navi Mumbai', area: 'Navi Mumbai',
      address: 'Shop No. 4 & 5, Beside CSB Bank, Sai Sthan Apt, Sector 29, Nerul East, Navi Mumbai', phone: '+91 90044 60650' },
    { name: 'Thane Centre', category: 'Mumbai / Thane', area: 'Thane',
      address: 'Near Teen Hath Naka, Thane West, Maharashtra', phone: '+91 90044 60650' },
    { name: 'Chembur Centre', category: 'Mumbai / Thane', area: 'Mumbai',
      address: 'Central Avenue Road, Chembur, Mumbai', phone: '+91 90044 60650' },
    { name: 'Vashi Centre', category: 'Navi Mumbai', area: 'Navi Mumbai',
      address: 'Sector 17, Vashi, Navi Mumbai', phone: '+91 90044 60650' },
    { name: 'Nagpur Centre', category: 'Other', area: 'Nagpur',
      address: 'Ramdaspeth, Nagpur, Maharashtra', phone: '+91 90044 60650' },
    { name: 'Nashik Centre', category: 'Other', area: 'Nashik',
      address: 'College Road, Nashik, Maharashtra', phone: '+91 90044 60650' }
  ];

  var CONCERNS = [
    { value: 'Speech & Communication', label: 'Speech and communication' },
    { value: 'Occupational / Sensory', label: 'Sensory and motor skills' },
    { value: 'ADHD / Attention', label: 'ADHD and attention' },
    { value: 'Special Education', label: 'Reading and learning' },
    { value: 'General Screening', label: 'Not sure yet' }
  ];
  var TIMES = ['Anytime', 'Morning', 'Afternoon', 'Evening'];
  var CENTRE_OPTIONS = ['Nerul', 'Thane', 'Chembur', 'Vashi', 'Ulwe', 'Nagpur', 'Nashik'];

  /* ======================================================
     Rendering: therapies + centres
     ====================================================== */
  function renderServices() {
    var el = $('#servicesGrid');
    if (!el) return;
    el.innerHTML = services.map(function (s) {
      return '<div class="col-12 col-sm-6 col-lg-3"><article class="tile">' +
        '<div class="tile__media"><img class="tile__img" src="' + s.img + '" alt="" decoding="async"></div>' +
        '<div class="tile__body"><h3>' + s.title + '</h3><p>' + s.desc + '</p>' +
        '<button type="button" class="link-btn tile__cta" data-concern="' + s.concern + '">Ask about this therapy</button>' +
        '</div></article></div>';
    }).join('');
  }

  function mapsUrl(c) {
    return 'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('Child Learning Centre ' + c.area + ', ' + c.address);
  }

  function renderCentres(filter) {
    var el = $('#centresGrid');
    if (!el) return;
    var list = filter === 'all' ? centres : centres.filter(function (c) { return c.category === filter; });
    el.innerHTML = list.map(function (c, i) {
      return '<div class="col-md-6 col-lg-4 centre-card" style="animation-delay:' + (i * 70) + 'ms">' +
        '<article class="tile"><div class="tile__body">' +
        '<p class="centre-area">' + c.area + '</p><h3>' + c.name + '</h3>' +
        '<p class="centre-address mb-0"><i class="bi bi-geo-alt-fill" aria-hidden="true"></i><span>' + c.address + '</span></p>' +
        '<div class="centre-actions">' +
        '<a class="btn btn-clc-outline" href="' + mapsUrl(c) + '" target="_blank" rel="noopener"><i class="bi bi-map"></i>Directions</a>' +
        '<a class="btn btn-clc" href="tel:' + c.phone.replace(/\s+/g, '') + '"><i class="bi bi-telephone"></i>Call</a>' +
        '</div></div></article></div>';
    }).join('');
  }

  /* ======================================================
     Enquiry form (one template, used inline and in the modal)
     ====================================================== */
  function formTemplate(p, withHeading) {
    var concerns = CONCERNS.map(function (c) {
      return '<label class="chip"><input type="checkbox" name="concern" value="' + c.value + '"><span>' + c.label + '</span></label>';
    }).join('');
    var timeOpts = TIMES.map(function (t) { return '<option value="' + t + '">' + t + '</option>'; }).join('');
    var centreOpts = CENTRE_OPTIONS.map(function (c) { return '<option value="' + c + '">' + c + (c === 'Nerul' ? ' (head office)' : '') + '</option>'; }).join('');

    return '' +
      '<div class="enquiry-wrap" id="' + p + '-wrap">' +
      (withHeading ? '<h3>Tell us about your child</h3>' : '') +
      '<p class="form-lead">Takes about a minute. Fields are required unless marked optional.</p>' +
      '<form class="enquiry" id="' + p + '-form" novalidate>' +
        '<div class="enquiry__grid">' +
          field(p, 'name', 'Your name', '<input type="text" id="' + p + '-name" name="name" autocomplete="name" placeholder="Parent or guardian" required aria-describedby="' + p + '-name-err">') +
          field(p, 'phone', 'Mobile number', '<div class="phone-wrap"><span class="prefix" aria-hidden="true">+91</span><input type="tel" id="' + p + '-phone" name="phone" inputmode="numeric" autocomplete="tel-national" placeholder="98200 12345" required aria-describedby="' + p + '-phone-err"></div>') +
          field(p, 'child', 'Child\'s first name <span class="opt">(optional)</span>', '<input type="text" id="' + p + '-child" name="child" autocomplete="off" placeholder="e.g. Aarav">', true) +
          field(p, 'age', 'Child\'s age', '<select id="' + p + '-age" name="age" required aria-describedby="' + p + '-age-err"><option value="">Select age</option><option>Under 2 years</option><option>2 – 4 years</option><option>5 – 7 years</option><option>8 – 12 years</option><option>13+ years</option></select>') +
          field(p, 'centre', 'Preferred centre', '<select id="' + p + '-centre" name="centre" required aria-describedby="' + p + '-centre-err"><option value="">Select centre</option>' + centreOpts + '</select>') +
          field(p, 'time', 'Best time to call', '<select id="' + p + '-time" name="time">' + timeOpts + '</select>', true) +
          '<fieldset class="field field--full" data-field="concern"><legend>What would you like help with?</legend><div class="chips">' + concerns + '</div><p class="field__err" id="' + p + '-concern-err" data-err="concern" role="alert"></p></fieldset>' +
          '<div class="field field--full"><label for="' + p + '-msg">Anything else we should know? <span class="opt">(optional)</span><span class="field__count" id="' + p + '-count">0/300</span></label>' +
            '<textarea id="' + p + '-msg" name="message" maxlength="300" placeholder="What you have noticed, or what the school has said"></textarea></div>' +
        '</div>' +
        '<div class="enquiry__submit">' +
          '<button type="submit" class="btn btn-clc"><span class="btn__label"><i class="bi bi-whatsapp"></i> Send enquiry on WhatsApp</span><span class="btn__spin" aria-hidden="true"></span></button>' +
          '<p class="enquiry__note">This opens WhatsApp with your details filled in. Nothing is sent until you press Send there.</p>' +
        '</div>' +
      '</form>' +
      '<div class="enquiry-done" hidden tabindex="-1">' +
        '<svg viewBox="0 0 84 84" aria-hidden="true"><circle cx="42" cy="42" r="36"></circle><path d="M26 43l11 11 21-23"></path></svg>' +
        '<h3 data-done-title>Thank you</h3>' +
        '<p>WhatsApp should have opened with your details. Press <strong>Send</strong> there and our coordinator will reply during clinic hours (Mon – Sat, 9:00 AM – 7:30 PM).</p>' +
        '<div class="btns"><a class="btn btn-clc" data-done-link target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i>Open WhatsApp again</a>' +
        '<a class="btn btn-clc-outline" href="tel:+919004460650"><i class="bi bi-telephone"></i>Call instead</a></div>' +
        '<button type="button" class="link-btn again" data-again>Send another enquiry</button>' +
      '</div>' +
      '</div>';
  }

  function field(p, name, label, control, optional, full) {
    return '<div class="field' + (full ? ' field--full' : '') + '" data-field="' + name + '">' +
      '<label for="' + p + '-' + name + '">' + label + '</label>' + control +
      (optional ? '' : '<p class="field__err" id="' + p + '-' + name + '-err" data-err="' + name + '" role="alert"></p>') + '</div>';
  }

  var validators = {
    name: function (f) { return f.elements.name.value.trim().length < 2 ? 'Please enter your name.' : ''; },
    phone: function (f) { return /^[6-9]\d{9}$/.test(f.elements.phone.value) ? '' : 'Enter a valid 10-digit mobile number.'; },
    age: function (f) { return f.elements.age.value ? '' : 'Please choose your child\'s age.'; },
    centre: function (f) { return f.elements.centre.value ? '' : 'Please choose a centre.'; },
    concern: function (f) { return $$('input[name="concern"]:checked', f).length ? '' : 'Choose at least one, or "Not sure yet".'; }
  };

  function setError(form, name, msg) {
    var wrap = $('[data-field="' + name + '"]', form);
    var err = $('[data-err="' + name + '"]', form);
    if (!wrap || !err) return;
    err.textContent = msg;
    wrap.classList.toggle('has-error', !!msg);
    wrap.classList.toggle('is-valid', !msg && name !== 'concern');
    var input = form.elements[name];
    if (input && input.setAttribute && input.type !== 'checkbox') input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }

  function validateField(form, name) {
    var msg = validators[name](form);
    setError(form, name, msg);
    return !msg;
  }

  function cleanPhone(value) {
    var d = value.replace(/\D/g, '');
    if (d.length > 10 && d.indexOf('91') === 0) d = d.slice(2);
    if (d.length > 10 && d.charAt(0) === '0') d = d.slice(1);
    return d.slice(0, 10);
  }

  function mountForm(host, prefix, withHeading) {
    if (!host) return;
    host.innerHTML = formTemplate(prefix, withHeading);
    var form = $('#' + prefix + '-form');
    var wrap = $('#' + prefix + '-wrap');

    form.addEventListener('focusout', function (e) {
      var n = e.target.name;
      if (validators[n] && n !== 'concern') validateField(form, n);
    });
    form.addEventListener('input', function (e) {
      var t = e.target;
      if (t.name === 'phone') t.value = cleanPhone(t.value);
      if (t.name === 'message') $('#' + prefix + '-count').textContent = t.value.length + '/300';
      var wrapEl = t.closest('[data-field]');
      if (wrapEl && wrapEl.classList.contains('has-error') && validators[t.name]) validateField(form, t.name);
    });
    form.addEventListener('change', function (e) {
      if (e.target.name === 'concern') validateField(form, 'concern');
      if (e.target.tagName === 'SELECT') validateField(form, e.target.name);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      ['name', 'phone', 'age', 'centre', 'concern'].forEach(function (n) {
        if (!validateField(form, n) && !firstBad) firstBad = n;
      });
      if (firstBad) {
        var target = firstBad === 'concern' ? $('input[name="concern"]', form) : form.elements[firstBad];
        if (target) target.focus();
        return;
      }

      var f = form.elements;
      var concerns = $$('input[name="concern"]:checked', form).map(function (i) { return i.value; });
      var lines = [
        'Hello CLC Team,', '', 'I would like to book an evaluation for my child.', '',
        'Parent / guardian: ' + f.name.value.trim(),
        'Mobile: +91 ' + f.phone.value,
        f.child.value.trim() ? "Child's name: " + f.child.value.trim() : null,
        "Child's age: " + f.age.value,
        'Preferred centre: ' + f.centre.value,
        'Looking for help with: ' + concerns.join(', '),
        'Best time to call: ' + f.time.value,
        f.message.value.trim() ? 'Note: ' + f.message.value.trim() : null
      ].filter(function (l) { return l !== null; });
      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));

      var btn = $('button[type="submit"]', form);
      btn.classList.add('is-loading');
      window.open(url, '_blank', 'noopener');

      setTimeout(function () {
        btn.classList.remove('is-loading');
        var done = $('.enquiry-done', wrap);
        $('[data-done-title]', done).textContent = 'Thank you, ' + f.name.value.trim().split(/\s+/)[0] + '.';
        $('[data-done-link]', done).setAttribute('href', url);
        form.hidden = true;
        done.hidden = false;
        done.focus();
      }, reduceMotion ? 0 : 700);
    });

    wrap.addEventListener('click', function (e) {
      if (e.target.closest('[data-again]')) resetForm(prefix);
    });
  }

  function resetForm(prefix) {
    var wrap = $('#' + prefix + '-wrap');
    if (!wrap) return;
    var form = $('#' + prefix + '-form');
    form.reset();
    $$('.has-error, .is-valid', form).forEach(function (n) { n.classList.remove('has-error', 'is-valid'); });
    $$('.field__err', form).forEach(function (n) { n.textContent = ''; });
    $('#' + prefix + '-count').textContent = '0/300';
    form.hidden = false;
    $('.enquiry-done', wrap).hidden = true;
  }

  /* ======================================================
     Modals
     ====================================================== */
  var bookingEl = $('#bookingModal');
  var bookingModal = (bookingEl && window.bootstrap) ? bootstrap.Modal.getOrCreateInstance(bookingEl) : null;

  function openBooking(concern) {
    var form = $('#m-form');
    if (form && $('.enquiry-done', $('#m-wrap')).hidden === false) resetForm('m');
    if (form && concern) {
      $$('input[name="concern"]', form).forEach(function (i) { i.checked = (i.value === concern); });
      setError(form, 'concern', '');
    }
    if (bookingModal) bookingModal.show();
  }

  var videoEl = $('#videoModal');
  var videoFrame = $('#videoIframe');
  var videoModal = (videoEl && window.bootstrap) ? bootstrap.Modal.getOrCreateInstance(videoEl) : null;
  function playVideo(id) {
    if (!videoFrame || !videoModal) return;
    videoFrame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
    videoModal.show();
  }
  if (videoEl) videoEl.addEventListener('hidden.bs.modal', function () { videoFrame.src = ''; });

  /* Mobile menu: close first, then scroll to the section */
  var menuEl = $('#mobileMenu');
  if (menuEl && window.bootstrap) {
    var menu = bootstrap.Offcanvas.getOrCreateInstance(menuEl);
    menuEl.addEventListener('click', function (e) {
      var link = e.target.closest('a.mobile-link');
      var wantsBooking = e.target.closest('[data-open-booking]');
      if (!link && !wantsBooking) return;
      e.preventDefault();
      menuEl.addEventListener('hidden.bs.offcanvas', function once() {
        menuEl.removeEventListener('hidden.bs.offcanvas', once);
        if (link) { var t = $(link.getAttribute('href')); if (t) t.scrollIntoView(); }
        else openBooking();
      });
      menu.hide();
    });
  }

  /* Delegated clicks */
  document.addEventListener('click', function (e) {
    var vid = e.target.closest('[data-video]');
    if (vid) { playVideo(vid.getAttribute('data-video')); return; }

    var ask = e.target.closest('[data-concern]');
    if (ask) { openBooking(ask.getAttribute('data-concern')); return; }

    var filterBtn = e.target.closest('#centreFilters .filter-btn');
    if (filterBtn) {
      $$('#centreFilters .filter-btn').forEach(function (b) { b.setAttribute('aria-pressed', b === filterBtn ? 'true' : 'false'); });
      renderCentres(filterBtn.getAttribute('data-filter'));
      return;
    }
    if (e.target.closest('#toTop')) window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* Images: if one fails to load, retry it a couple of times (never hide it
     on the first failure). Only a still-missing file after retries is hidden. */
  document.addEventListener('error', function (e) {
    var img = e.target;
    if (!img || img.tagName !== 'IMG') return;
    var tries = parseInt(img.dataset.tries || '0', 10);
    var fb = img.getAttribute('data-fallback');
    if (tries < 2) {
      img.dataset.tries = String(tries + 1);
      var base = (img.dataset.origSrc = img.dataset.origSrc || img.getAttribute('src')).split('?')[0];
      setTimeout(function () { img.src = base + '?r=' + Date.now(); }, 400 * (tries + 1));
    } else if (fb && !img.dataset.triedFallback) {
      img.dataset.triedFallback = '1'; img.src = fb;
    } else {
      img.classList.add('is-missing');
    }
  }, true);

  /* ======================================================
     Scroll reveal
     ====================================================== */
  var REVEAL = [
    ['.section-head', ''], ['.about-frame', 'clip'], ['.about-copy', ''], ['.stats', ''],
    ['.process-aside', ''], ['.process-cta', ''], ['.steps li', ''], ['.video-thumb', 'clip'],
    ['.video-copy', ''], ['.filter-bar', 'fade'], ['.contact-list', ''], ['.form-card', '']
  ];
  var revealIO = null;

  function inView(el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight * 0.92 && r.bottom > 0;
  }

  function initReveal() {
    if (reduceMotion || !('IntersectionObserver' in window)) return;
    revealIO = new IntersectionObserver(function (entries) {
      var shown = entries.filter(function (e) { return e.isIntersecting; }).sort(function (a, b) {
        var ra = a.boundingClientRect, rb = b.boundingClientRect;
        return (Math.round(ra.top / 40) - Math.round(rb.top / 40)) || (ra.left - rb.left);
      });
      shown.forEach(function (e, i) {
        e.target.style.setProperty('--d', Math.min(i, 5) * 90 + 'ms');
        e.target.classList.add('is-visible');
        revealIO.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    var targets = [];
    REVEAL.forEach(function (pair) { $$(pair[0]).forEach(function (el) { targets.push([el, pair[1]]); }); });
    $$('.tile').forEach(function (t) { if (!t.closest('.centre-card')) targets.push([t.parentElement, '']); });

    targets.forEach(function (pair) {
      var el = pair[0];
      if (el.hasAttribute('data-reveal') || inView(el)) return; // already on screen at load: leave as is
      el.setAttribute('data-reveal', pair[1]);
      revealIO.observe(el);
    });
  }

  /* Count-up numbers */
  function formatNum(n, d) {
    return n.toLocaleString('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d });
  }
  function initCounters() {
    var els = $$('[data-count]');
    if (!els.length || reduceMotion || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target;
        var end = parseFloat(el.getAttribute('data-count'));
        var d = parseInt(el.getAttribute('data-decimals') || '0', 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var t0 = null, dur = 1500;
        function tick(t) {
          if (t0 === null) t0 = t;
          var p = clamp((t - t0) / dur, 0, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = formatNum(end * eased, d) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ======================================================
     Scroll-linked effects (one rAF-throttled handler)
     ====================================================== */
  var header = $('.site-header');
  var progress = $('.scroll-progress');
  var toTop = $('#toTop');
  var hero = $('.hero');
  var heroBg = $('.hero__bg');
  var stepItems = $$('.steps li');
  var spySections = $$('main > section[id]');
  var spyLinks = $$('.site-nav a, a.mobile-link');
  var ticking = false;

  function updateScroll() {
    ticking = false;
    var y = window.pageYOffset;
    var max = document.documentElement.scrollHeight - window.innerHeight;

    if (progress) progress.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0);
    if (header) header.classList.toggle('is-scrolled', y > 8);
    if (toTop) toTop.classList.toggle('is-shown', y > 700);

    if (heroBg && !reduceMotion && window.innerWidth >= 768 && hero) {
      var hh = hero.offsetHeight;
      if (y < hh) heroBg.style.setProperty('--py', (y * 0.22).toFixed(1) + 'px');
    }

    // Scroll-spy
    var hdr = header ? header.offsetHeight : 70;
    var current = null;
    spySections.forEach(function (s) { if (s.getBoundingClientRect().top <= hdr + 140) current = s.id; });
    spyLinks.forEach(function (a) { a.classList.toggle('is-active', current !== null && a.getAttribute('href') === '#' + current); });

    // "First visit" steps fill as you scroll
    if (stepItems.length) {
      var trigger = window.innerHeight * 0.62;
      stepItems.forEach(function (li) {
        var r = li.getBoundingClientRect();
        li.classList.toggle('is-active', r.top < trigger);
        li.style.setProperty('--seg', (reduceMotion ? 100 : clamp((trigger - r.top - 24) / r.height * 100, 0, 100)).toFixed(1) + '%');
      });
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(updateScroll); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ======================================================
     Init
     ====================================================== */
  renderServices();
  renderCentres('all');
  mountForm($('#inlineForm'), 'i', true);
  mountForm($('#modalForm'), 'm', false);
  initReveal();
  initCounters();
  updateScroll();

  // After everything has loaded, retry any image that really failed
  window.addEventListener('load', function () {
    $$('img').forEach(function (img) {
      if (img.getAttribute('src') && img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event('error'));
    });
    // Safety net: reveal anything already on screen that the observer missed
    $$('[data-reveal]:not(.is-visible)').forEach(function (el) { if (inView(el)) el.classList.add('is-visible'); });
  });
})();
