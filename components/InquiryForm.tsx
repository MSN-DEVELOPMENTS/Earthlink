'use client';

import { useState } from 'react';
import { inquiryTypes } from '@/lib/data';

export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend yet — show a friendly confirmation.
    setSent(true);
    e.currentTarget.reset();
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

      <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
        Send Message
      </button>

      <p className={`form-msg${sent ? ' ok' : ''}`}>
        {sent
          ? 'Thank you — a consultant will reply within one business day.'
          : 'We come back within one business day.'}
      </p>
    </form>
  );
}
