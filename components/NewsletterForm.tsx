'use client';

import { useState } from 'react';
import { submitMessage } from '@/lib/sendMessage';
import { trackNewsletterSignup } from '@/lib/analytics';

type Status = 'idle' | 'sending' | 'ok' | 'err';

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    try {
      await submitMessage(data, 'New newsletter subscriber');
      trackNewsletterSignup();
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('err');
    }
  };

  return (
    <>
      <form className="foot-news" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          required
        />
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Submit'}
        </button>
      </form>
      {status !== 'idle' && (
        <p className={`form-msg${status === 'ok' ? ' ok' : ''}${status === 'err' ? ' err' : ''}`}>
          {status === 'ok'
            ? 'Thank you — you are subscribed.'
            : status === 'err'
              ? 'Something went wrong. Please try again or email info@eregroup.ae.'
              : ''}
        </p>
      )}
    </>
  );
}
