import { whatsappLink } from "@/lib/whatsapp";

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 1 1 7.99 4.42zm8.02-17.45A11.33 11.33 0 0 0 12.04.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.94 1.52 5.66L.62 23.25l5.65-1.48a11.3 11.3 0 0 0 5.77 1.47h.01c6.24 0 11.32-5.08 11.33-11.33 0-3.03-1.18-5.87-3.31-8.01z" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello Briseman Star, I'd like to inquire about booking an event.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex h-14 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-ink shadow-lg shadow-black/40 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
