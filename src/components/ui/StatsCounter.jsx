import React, { useState, useEffect, useRef } from 'react';

export default function StatsCounter({ value, suffix = '', decimals = 0, isFormatted = false, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const startVal = 0;
          const endVal = value;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(startVal + (endVal - startVal) * eased);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(endVal);
            }
          };

          requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const displayValue = isFormatted
    ? Math.round(count).toLocaleString('en-IN')
    : count.toFixed(decimals);

  return (
    <dt ref={elementRef}>
      {displayValue}
      {suffix}
    </dt>
  );
}

