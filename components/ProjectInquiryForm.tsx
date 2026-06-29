'use client';

import { useState } from 'react';
import { submitToWeb3Forms } from '@/lib/web3forms';

type Status = 'idle' | 'sending' | 'ok' | 'err';

/* Project-aware inquiry form. Carries the project name through to the
   submission (hidden field + subject) so the team always knows which
   project an enquiry is about. */
export default function ProjectInquiryForm({
  projectName,
  developerName,
}: {
  projectName: string;
  developerName: string;
}) {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    try {
      await submitToWeb3Forms(data, `Project enquiry — ${projectName} (${data.name || 'Unknown'})`);
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('err');
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <span className="eyebrow">Enquire about this project</span>

      {/* Carries the project context with every submission. */}
      <input type="hidden" name="project" value={projectName} />
      <input type="hidden" name="developer" value={developerName} />

      <div className="frow">
        <div className="fg">
          <label>Full Name</label>
          <input name="name" required placeholder="Your name" />
        </div>
        <div className="fg">
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="+971 ..." />
        </div>
      </div>

      <div className="fg">
        <label>Email</label>
        <input type="email" name="email" required placeholder="you@email.com" />
      </div>

      <div className="fg">
        <label>Message</label>
        <textarea
          name="message"
          defaultValue={`Hello, I'm interested in the ${projectName} project. Could you please provide me with more information?`}
        />
      </div>

      <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send enquiry'}
      </button>

      <p className={`form-msg${status === 'ok' ? ' ok' : ''}${status === 'err' ? ' err' : ''}`}>
        {status === 'ok'
          ? 'Thank you — a consultant will reply within one business day.'
          : status === 'err'
            ? 'Something went wrong. Please try again or email info@eregroup.ae.'
            : 'We reply within one business day.'}
      </p>
    </form>
  );
}
