import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import brisemanLogo from "@/assets/briseman-star-logo.png.asset.json";

type Message = { from: "bot" | "user"; text: string };

const QUICK_REPLIES = [
  "What services do you offer?",
  "Book an event",
  "Record label & artists",
  "How do I contact you?",
];

function botReply(input: string): string {
  const q = input.toLowerCase();
  if (/\b(hi|hello|hey|good (morning|afternoon|evening))\b/.test(q))
    return "Hello! Welcome to Briseman Star Events & Records. How can I help you today?";
  if (q.includes("service") || q.includes("offer") || q.includes("what do you do"))
    return "We offer Brand Strategy, Online Media Management, Audio Visual Services, Digital Banners, Decor & Style, Multimedia Production, Production Stage Sets, and Public Relations Management — plus record label services like A&R, Artist Development and Financial Advances. See the Services page for details.";
  if (q.includes("book") || q.includes("event") || q.includes("hire") || q.includes("quote") || q.includes("price"))
    return "We'd love to produce your event! Call us on +256 705 104 557 or +256 782 073 095, or email semandabrian18@gmail.com and we'll put together a quote for you.";
  if (q.includes("record") || q.includes("label") || q.includes("artist") || q.includes("music") || q.includes("sign"))
    return "Briseman Star Records handles A&R, artist development, funding and advances for signed artists — including Brian J Official. Reach out via the Contact page to talk about your music.";
  if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("call") || q.includes("reach"))
    return "You can reach us on +256 705 104 557 or +256 782 073 095, or email semandabrian18@gmail.com. We're based in Kansanga, along Ggaba Road, Kampala.";
  if (q.includes("where") || q.includes("location") || q.includes("address") || q.includes("kampala") || q.includes("find"))
    return "We're located in Kansanga, along Ggaba Road, Kampala, Uganda.";
  if (q.includes("hour") || q.includes("open") || q.includes("when"))
    return "Our team is available during business hours, Monday to Saturday. For urgent event enquiries, call +256 705 104 557 anytime.";
  if (q.includes("thank"))
    return "You're very welcome! Anything else I can help with?";
  return "Thanks for reaching out! For a detailed answer, call +256 705 104 557 or email semandabrian18@gmail.com — or ask me about our services, events, or the record label.";
}

export function SupportChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi there! I'm the Briseman Star assistant. Ask me about our events, services or the record label.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: botReply(trimmed) }]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close support chat" : "Open support chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[480px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/60">
          <div className="flex items-center gap-3 border-b border-border bg-stage px-4 py-3">
            <img src={brisemanLogo.url} alt="Briseman Star" className="h-9 w-auto" />
            <div>
              <p className="font-display text-sm tracking-wide text-brand">BRISEMAN SUPPORT</p>
              <p className="text-xs text-brand/50">Typically replies instantly</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "rounded-br-sm bg-accent text-accent-foreground"
                      : "rounded-bl-sm bg-secondary text-brand"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 px-4 pb-2">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="rounded-full border border-border px-3 py-1 text-xs text-brand/70 transition-colors hover:border-accent hover:text-accent"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-full bg-secondary px-4 py-2 text-sm text-brand placeholder:text-brand/40 focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
