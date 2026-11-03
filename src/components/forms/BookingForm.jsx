import React, { useState, useEffect } from 'react';
import { CONCERNS, TIMES, CENTRE_OPTIONS } from '../../data/servicesData';

const WHATSAPP_NUMBER = '919004460650';

function cleanPhone(value) {
  let d = value.replace(/\D/g, '');
  if (d.length > 10 && d.indexOf('91') === 0) d = d.slice(2);
  if (d.length > 10 && d.charAt(0) === '0') d = d.slice(1);
  return d.slice(0, 10);
}

export default function BookingForm({ idPrefix = 'form', withHeading = false, initialConcern = '', onSubmitted }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    child: '',
    age: '',
    centre: '',
    time: 'Anytime',
    concerns: initialConcern ? [initialConcern] : [],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  useEffect(() => {
    if (initialConcern) {
      setFormData(prev => ({
        ...prev,
        concerns: prev.concerns.includes(initialConcern) ? prev.concerns : [...prev.concerns, initialConcern]
      }));
    }
  }, [initialConcern]);

  const validate = (data = formData) => {
    const newErrors = {};
    if (!data.name.trim() || data.name.trim().length < 2) {
      newErrors.name = 'Please enter your name.';
    }
    if (!/^[6-9]\d{9}$/.test(data.phone)) {
      newErrors.phone = 'Enter a valid 10-digit mobile number.';
    }
    if (!data.age) {
      newErrors.age = "Please choose your child's age.";
    }
    if (!data.centre) {
      newErrors.centre = 'Please choose a centre.';
    }
    if (!data.concerns.length) {
      newErrors.concern = 'Choose at least one, or "Not sure yet".';
    }
    return newErrors;
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const errs = validate();
    setErrors(prev => ({ ...prev, [field]: errs[field] || '' }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const sanitized = cleanPhone(value);
      setFormData(prev => ({ ...prev, phone: sanitized }));
    } else if (name === 'message') {
      setFormData(prev => ({ ...prev, message: value.slice(0, 300) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (touched[name]) {
      const updated = { ...formData, [name]: name === 'phone' ? cleanPhone(value) : value };
      const errs = validate(updated);
      setErrors(prev => ({ ...prev, [name]: errs[name] || '' }));
    }
  };

  const handleConcernToggle = (val) => {
    setTouched(prev => ({ ...prev, concern: true }));
    setFormData(prev => {
      const current = prev.concerns;
      const updated = current.includes(val)
        ? current.filter(c => c !== val)
        : [...current, val];
      
      const errs = validate({ ...prev, concerns: updated });
      setErrors(e => ({ ...e, concern: errs.concern || '' }));
      return { ...prev, concerns: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      phone: true,
      age: true,
      centre: true,
      concern: true
    });

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstField = Object.keys(newErrors)[0];
      const targetEl = document.getElementById(`${idPrefix}-${firstField}`);
      if (targetEl) targetEl.focus();
      return;
    }

    setIsLoading(true);

    const lines = [
      'Hello CLC Team,',
      '',
      'I would like to book an evaluation for my child.',
      '',
      `Parent / guardian: ${formData.name.trim()}`,
      `Mobile: +91 ${formData.phone}`,
      formData.child.trim() ? `Child's name: ${formData.child.trim()}` : null,
      `Child's age: ${formData.age}`,
      `Preferred centre: ${formData.centre}`,
      `Looking for help with: ${formData.concerns.join(', ')}`,
      `Best time to call: ${formData.time}`,
      formData.message.trim() ? `Note: ${formData.message.trim()}` : null
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    setWhatsAppUrl(url);

    window.open(url, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      if (onSubmitted) onSubmitted();
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      child: '',
      age: '',
      centre: '',
      time: 'Anytime',
      concerns: [],
      message: ''
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    const firstName = formData.name.trim().split(/\s+/)[0] || 'there';
    return (
      <div className="enquiry-done" tabIndex="-1">
        <svg viewBox="0 0 84 84" aria-hidden="true">
          <circle cx="42" cy="42" r="36"></circle>
          <path d="M26 43l11 11 21-23"></path>
        </svg>
        <h3>Thank you, {firstName}.</h3>
        <p>
          WhatsApp should have opened with your details. Press <strong>Send</strong> there and our coordinator will reply during clinic hours (Mon – Sat, 9:00 AM – 7:30 PM).
        </p>
        <div className="btns">
          <a className="btn btn-clc" href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>Open WhatsApp again
          </a>
          <a className="btn btn-clc-outline" href="tel:+919004460650">
            <i className="bi bi-telephone"></i>Call instead
          </a>
        </div>
        <button type="button" className="link-btn again" onClick={handleReset}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="enquiry-wrap" id={`${idPrefix}-wrap`}>
      {withHeading && <h3>Tell us about your child</h3>}
      <p className="form-lead">Takes about a minute. Fields are required unless marked optional.</p>

      <form className="enquiry" onSubmit={handleSubmit} noValidate>
        <div className="enquiry__grid">
          {/* Parent Name */}
          <div className={`field ${errors.name ? 'has-error' : touched.name ? 'is-valid' : ''}`}>
            <label htmlFor={`${idPrefix}-name`}>Your name</label>
            <input
              type="text"
              id={`${idPrefix}-name`}
              name="name"
              autoComplete="name"
              placeholder="Parent or guardian"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              aria-invalid={!!errors.name}
              required
            />
            {errors.name && <p className="field__err" role="alert">{errors.name}</p>}
          </div>

          {/* Mobile Number */}
          <div className={`field ${errors.phone ? 'has-error' : touched.phone ? 'is-valid' : ''}`}>
            <label htmlFor={`${idPrefix}-phone`}>Mobile number</label>
            <div className="phone-wrap">
              <span className="prefix" aria-hidden="true">+91</span>
              <input
                type="tel"
                id={`${idPrefix}-phone`}
                name="phone"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="98200 12345"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur('phone')}
                aria-invalid={!!errors.phone}
                required
              />
            </div>
            {errors.phone && <p className="field__err" role="alert">{errors.phone}</p>}
          </div>

          {/* Child Name (Optional) */}
          <div className="field">
            <label htmlFor={`${idPrefix}-child`}>
              Child's first name <span className="opt">(optional)</span>
            </label>
            <input
              type="text"
              id={`${idPrefix}-child`}
              name="child"
              autoComplete="off"
              placeholder="e.g. Aarav"
              value={formData.child}
              onChange={handleChange}
            />
          </div>

          {/* Child Age */}
          <div className={`field ${errors.age ? 'has-error' : touched.age ? 'is-valid' : ''}`}>
            <label htmlFor={`${idPrefix}-age`}>Child's age</label>
            <select
              id={`${idPrefix}-age`}
              name="age"
              value={formData.age}
              onChange={handleChange}
              onBlur={() => handleBlur('age')}
              aria-invalid={!!errors.age}
              required
            >
              <option value="">Select age</option>
              <option value="Under 2 years">Under 2 years</option>
              <option value="2 – 4 years">2 – 4 years</option>
              <option value="5 – 7 years">5 – 7 years</option>
              <option value="8 – 12 years">8 – 12 years</option>
              <option value="13+ years">13+ years</option>
            </select>
            {errors.age && <p className="field__err" role="alert">{errors.age}</p>}
          </div>

          {/* Preferred Centre */}
          <div className={`field ${errors.centre ? 'has-error' : touched.centre ? 'is-valid' : ''}`}>
            <label htmlFor={`${idPrefix}-centre`}>Preferred centre</label>
            <select
              id={`${idPrefix}-centre`}
              name="centre"
              value={formData.centre}
              onChange={handleChange}
              onBlur={() => handleBlur('centre')}
              aria-invalid={!!errors.centre}
              required
            >
              <option value="">Select centre</option>
              {CENTRE_OPTIONS.map(c => (
                <option key={c} value={c}>
                  {c}{c === 'Nerul' ? ' (head office)' : ''}
                </option>
              ))}
            </select>
            {errors.centre && <p className="field__err" role="alert">{errors.centre}</p>}
          </div>

          {/* Best Time to Call */}
          <div className="field">
            <label htmlFor={`${idPrefix}-time`}>Best time to call</label>
            <select
              id={`${idPrefix}-time`}
              name="time"
              value={formData.time}
              onChange={handleChange}
            >
              {TIMES.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Concerns Checkbox Chips */}
          <fieldset className={`field field--full ${errors.concern ? 'has-error' : ''}`}>
            <legend>What would you like help with?</legend>
            <div className="chips">
              {CONCERNS.map(c => {
                const checked = formData.concerns.includes(c.value);
                return (
                  <label key={c.value} className="chip">
                    <input
                      type="checkbox"
                      name="concern"
                      value={c.value}
                      checked={checked}
                      onChange={() => handleConcernToggle(c.value)}
                    />
                    <span>{c.label}</span>
                  </label>
                );
              })}
            </div>
            {errors.concern && <p className="field__err" role="alert">{errors.concern}</p>}
          </fieldset>

          {/* Message Textarea */}
          <div className="field field--full">
            <label htmlFor={`${idPrefix}-msg`}>
              Anything else we should know? <span className="opt">(optional)</span>
              <span className="field__count">{formData.message.length}/300</span>
            </label>
            <textarea
              id={`${idPrefix}-msg`}
              name="message"
              maxLength={300}
              placeholder="What you have noticed, or what the school has said"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="enquiry__submit">
          <button type="submit" className={`btn btn-clc ${isLoading ? 'is-loading' : ''}`}>
            <span className="btn__label">
              <i className="bi bi-whatsapp"></i> Send enquiry on WhatsApp
            </span>
            <span className="btn__spin" aria-hidden="true"></span>
          </button>
          <p className="enquiry__note">
            This opens WhatsApp with your details filled in. Nothing is sent until you press Send there.
          </p>
        </div>
      </form>
    </div>
  );
}

