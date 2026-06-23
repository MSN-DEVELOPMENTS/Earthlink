'use client';

import { useState } from 'react';
import { inquiryTypes } from '@/lib/data';
import { submitToWeb3Forms } from '@/lib/web3forms';

type Status = 'idle' | 'sending' | 'ok' | 'err';

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    try {
      await submitToWeb3Forms(data, `New website enquiry — ${data.name || 'Unknown'}`);
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('err');
    }
  };

  return (
    <form className="glass form-card" onSubmit={handleSubmit}>
      <h3>Send Us a Message</h3>

      <div className="frow">
        <div className="fg">
          <label>Inquiry Type</label>
          <select name="inquiry_type">
            {inquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="fg">
          <label>Full Name</label>
          <input name="name" required placeholder="Your name" />
        </div>
      </div>

      <div className="frow">
        <div className="fg">
          <label>Email</label>
          <input type="email" name="email" required placeholder="you@email.com" />
        </div>
        <div className="fg">
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="+971 ..." />
        </div>
      </div>

      <div className="fg">
        <label>Message</label>
        <textarea name="message" placeholder="Tell us your goal, and we map the route from there." />
      </div>

      <button
        type="submit"
        className="btn btn-gold"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      <p className={`form-msg${status === 'ok' ? ' ok' : ''}${status === 'err' ? ' err' : ''}`}>
        {status === 'ok'
          ? 'Thank you — a consultant will reply within one business day.'
          : status === 'err'
            ? 'Something went wrong. Please try again or email info@eregroup.ae.'
            : 'We come back within one business day.'}
      </p>
    </form>
  );
}
