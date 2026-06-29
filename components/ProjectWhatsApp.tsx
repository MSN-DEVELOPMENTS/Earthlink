import { contact } from '@/lib/data';

/* Project-aware WhatsApp call-to-action. Builds a wa.me deep link with a
   pre-filled message naming the project the visitor is viewing, so every
   enquiry that lands on our number already says which project it's about. */
export default function ProjectWhatsApp({ projectName }: { projectName: string }) {
  const message = `Hello, I'm interested in the ${projectName} project. Could you please provide me with more information?`;
  // contact.whatsapp is a https://wa.me/<number> link; add the prefilled text.
  const href = `${contact.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="wa-cta"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp about ${projectName}`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.589-.949 1.39.842z" />
      </svg>
      <span>
        <strong>Chat on WhatsApp</strong>
        <small>We reply fast — typically within minutes</small>
      </span>
    </a>
  );
}
