'use client';

import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';

/* Just the launcher bubble. The panel — and with it the AI SDK and the Markdown
   renderer — is fetched only once a visitor actually opens the chat, so it costs
   nothing on first load of every page. */
const ChatPanel = dynamic(() => import('@/components/ChatPanel'), { ssr: false });

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      {open && <ChatPanel onClose={close} />}

      <button
        type="button"
        className="chat-bubble"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
      >
        {open ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.3 5.71L12 12.01l-6.3-6.3-1.4 1.42L10.59 13.4l-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.29z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 9h10v2H7V9zm7 5H7v-2h7v2zm3-6H7V6h10v2z" />
          </svg>
        )}
      </button>
    </>
  );
}
