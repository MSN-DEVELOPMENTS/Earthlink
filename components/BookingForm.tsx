'use client';

import { useState } from 'react';
import { serviceTypes, consultants } from '@/lib/data';
import { submitToWeb3Forms } from '@/lib/web3forms';

type Status = 'idle' | 'sending' | 'ok' | 'err';

export default function BookingForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    try {
      await submitToWeb3Forms(data, `New consultation booking — ${data.service_type || ''}`);
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('err');
    }
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

      <button
        type="submit"
        className="btn btn-gold"
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Confirming…' : 'Confirm Booking'}
      </button>

      <p className={`form-msg${status === 'ok' ? ' ok' : ''}${status === 'err' ? ' err' : ''}`}>
        {status === 'ok'
          ? 'Thank you — your consultation request is in. We confirm within one business day.'
          : status === 'err'
            ? 'Something went wrong. Please try again or email info@earthlink.ae.'
            : 'Pick a service and a time, and meet the consultant who fits your goal.'}
      </p>
    </form>
  );
}
