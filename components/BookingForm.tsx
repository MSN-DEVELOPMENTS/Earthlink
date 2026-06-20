'use client';

import { useState } from 'react';
import { serviceTypes, consultants } from '@/lib/data';

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend yet — show a friendly confirmation.
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form className="glass form-card" onSubmit={handleSubmit}>
      <h3>Book a Consultation</h3>

      <div className="frow">
        <div className="fg">
          <label>Service Type</label>
          <select name="service_type">
            {serviceTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="fg">
          <label>Preferred Consultant</label>
          <select name="consultant">
            {consultants.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="frow">
        <div className="fg">
          <label>Preferred Date</label>
          <input type="date" name="date" required />
        </div>
        <div className="fg">
          <label>Preferred Time</label>
          <input type="time" name="time" required />
        </div>
      </div>

      <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
        Confirm Booking
      </button>

      <p className={`form-msg${sent ? ' ok' : ''}`}>
        {sent
          ? 'Thank you — your consultation request is in. We confirm within one business day.'
          : 'Pick a service and a time, and meet the consultant who fits your goal.'}
      </p>
    </form>
  );
}
