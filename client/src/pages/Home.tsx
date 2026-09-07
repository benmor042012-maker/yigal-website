import { FormEvent, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Globe2,
  Leaf,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";

const products = [
  {
    name: "Tree nuts",
    note: "Almonds · Pistachios · Cashews · Walnuts",
    accent: "amber",
  },
  {
    name: "Dried fruits",
    note: "Apricots · Dates · Raisins · Figs",
    accent: "olive",
  },
  {
    name: "Custom programs",
    note: "Formats and specifications shaped around your brief",
    accent: "clay",
  },
];

const values = [
  {
    number: "01",
    title: "Consistent quality",
    body: "A product range built around reliable standards, considered sourcing, and the details that matter when every shipment has a destination.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Reliable execution",
    body: "From processor to packer to port, we stay close to the moving parts so your supply remains clear, dependable, and on time.",
    icon: Truck,
  },
  {
    number: "03",
    title: "Personal attention",
    body: "Every client gets a human point of view. We work with you closely, irrespective of size, to find the right fit for the brief.",
    icon: Sparkles,
  },
];

const steps = [
  ["01", "Understand", "We listen first: product, format, destination, and the standards behind your brief."],
  ["02", "Source", "We work with established processors and packers across the nut and dried fruit trade."],
  ["03", "Deliver", "We coordinate the journey with care, keeping quality, reliability, and value in view."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f0e8] text-[#17251f] selection:bg-[#cc8e4e] selection:text-[#17251f]">
      <div className="grain" aria-hidden="true" />
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#17251f] text-[#f7f2e9] lg:min-h-[840px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/manus-storage/galco-hero_6ff85f15.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,28,23,.96)_0%,rgba(17,28,23,.74)_38%,rgba(17,28,23,.18)_73%,rgba(17,28,23,.3)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(17,28,23,.6),transparent_35%,rgba(17,28,23,.14))]" />

        <div className="container relative z-10">
          <div className="flex items-center justify-between border-b border-white/15 py-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
            <span>Global nuts &amp; dried fruits trade</span>
            <span className="hidden items-center gap-2 sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-[#d59b59]" /> Est. 1993 · California</span>
          </div>

          <header className="flex items-center justify-between py-6">
            <a href="#top" className="group flex items-center gap-3" aria-label="Galco International home">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d59b59]/70 bg-[#d59b59]/10 text-[#e7b877] transition duration-200 group-hover:bg-[#d59b59] group-hover:text-[#17251f]">
                <Leaf size={17} strokeWidth={1.7} />
              </span>
              <span>
                <span className="block font-serif text-[25px] leading-none tracking-[0.1em] text-[#f7f2e9]">GALCO</span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-white/55">International · Inc</span>
              </span>
            </a>

            <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.17em] text-white/65 lg:flex" aria-label="Main navigation">
              <a className="nav-link active" href="#about">About</a>
              <a className="nav-link" href="#products">Products</a>
              <a className="nav-link" href="#approach">Our approach</a>
              <a className="nav-link" href="#contact">Contact</a>
            </nav>

            <a className="hidden items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition duration-200 hover:border-[#e7b877] hover:bg-[#e7b877] hover:text-[#17251f] lg:flex" href="#contact">
              Start a conversation <ArrowUpRight size={14} />
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </header>

          {menuOpen && (
            <nav className="absolute left-4 right-4 top-[106px] z-30 rounded-2xl border border-white/15 bg-[#21372d]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden" aria-label="Mobile navigation">
              <div className="grid gap-4 text-sm uppercase tracking-[0.16em] text-white/75">
                {[["About", "#about"], ["Products", "#products"], ["Our approach", "#approach"], ["Contact", "#contact"]].map(([label, href]) => (
                  <a key={href} href={href} onClick={closeMenu} className="border-b border-white/10 pb-3 transition hover:text-[#e7b877]">{label}</a>
                ))}
              </div>
            </nav>
          )}

          <div id="top" className="grid min-h-[570px] items-center pb-24 pt-20 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-24 lg:pb-28 lg:pt-24">
            <div className="max-w-3xl">
              <p className="eyebrow mb-7 text-[#e7b877]"><span className="mr-3 inline-block h-px w-9 align-middle bg-[#d59b59]" />A trusted partner in the global trade</p>
              <h1 className="max-w-4xl font-serif text-[clamp(4rem,8.2vw,8.6rem)] leading-[0.82] tracking-[-0.055em] text-[#f8f3eb]">
                Trade with <em className="text-[#e7b877]">taste.</em>
              </h1>
              <p className="mt-9 max-w-xl text-lg leading-relaxed text-white/72 sm:text-xl">
                Nuts and dried fruits, thoughtfully sourced and reliably delivered. Galco brings a human point of view to a global supply chain.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a href="#products" className="button-primary group">
                  Explore our range <ArrowDownRight size={16} className="transition duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
                <a href="#about" className="button-ghost">Discover Galco <ChevronRight size={15} /></a>
              </div>
            </div>

            <div className="hidden self-end lg:block">
              <div className="ml-auto max-w-[280px] border-l border-[#e7b877]/55 pl-6">
                <p className="font-serif text-2xl leading-tight text-white/90">Good business starts with good ingredients.</p>
                <p className="mt-5 text-sm leading-relaxed text-white/55">Quality, reliability, integrity, and product value — the principles that have guided us since 1993.</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/50 md:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20"><ArrowDownRight size={13} /></span> Scroll to explore
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-[#f4f0e8] py-24 sm:py-32 lg:py-40">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="eyebrow text-[#9a6134]"><span className="mr-3 inline-block h-px w-9 align-middle bg-[#c98c4e]" />Our role</p>
              <h2 className="mt-7 max-w-sm font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#20372d] sm:text-6xl">A steady hand in a moving world.</h2>
              <div className="mt-8 h-px w-24 bg-[#c98c4e]" />
            </div>
            <div>
              <p className="max-w-2xl text-xl leading-relaxed text-[#425047] sm:text-2xl sm:leading-relaxed">Founded in California in 1993, Galco International has grown with the nut and dried fruit trade — keeping the scale of a global business without losing the attention of a close partner.</p>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#6a746c]">We connect carefully selected products with the people and businesses who need them, shipping globally while keeping customer satisfaction at the center of every relationship.</p>
              <a href="#contact" className="link-arrow mt-9">Talk to our team <ArrowUpRight size={15} /></a>
            </div>
          </div>

          <div className="mt-20 grid border-y border-[#20372d]/15 sm:grid-cols-3">
            {[["1993", "Founded in California"], ["Global", "Shipping with care"], ["1:1", "Personal attention"]].map(([number, label], index) => (
              <div key={number} className={`stat-cell ${index === 1 ? "sm:border-x sm:border-[#20372d]/15" : ""}`}>
                <span className="font-serif text-5xl tracking-[-0.05em] text-[#9a6134]">{number}</span>
                <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#657169]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#e9e2d4] py-24 sm:py-32">
        <div className="container">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-[#9a6134]"><span className="mr-3 inline-block h-px w-9 align-middle bg-[#c98c4e]" />The portfolio</p>
              <h2 className="mt-7 max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.045em] text-[#20372d] sm:text-7xl">Ingredients with a point of view.</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#687268]">A considered range for brands, makers, and partners who care about what goes into every batch.</p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#b9996e] lg:min-h-[640px]">
              <img src="/manus-storage/galco-products_12378c7c.jpg" alt="A bowl of mixed nuts and dried fruits" className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16221c]/80 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-[#f7f2e9] sm:bottom-9 sm:left-9 sm:right-9">
                <div>
                  <span className="eyebrow text-[#f0c58f]">01 · The essentials</span>
                  <h3 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">Naturally considered.</h3>
                </div>
                <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/40 sm:flex"><ArrowUpRight size={18} /></span>
              </div>
            </div>

            <div className="grid gap-4">
              {products.map((product, index) => (
                <article key={product.name} className={`product-card product-${product.accent}`}>
                  <div className="flex items-start justify-between gap-5">
                    <span className="eyebrow text-[#9a6134]">0{index + 2} · Range</span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#20372d]/15 text-[#9a6134]"><ArrowUpRight size={16} /></span>
                  </div>
                  <div className="mt-12">
                    <h3 className="font-serif text-4xl tracking-[-0.04em] text-[#20372d]">{product.name}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6a746c]">{product.note}</p>
                  </div>
                  <div className="mt-8 h-1 w-14 rounded-full bg-current opacity-40" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="relative overflow-hidden bg-[#20372d] py-24 text-[#f7f2e9] sm:py-32">
        <div className="absolute -right-36 top-16 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />
        <div className="absolute -right-20 top-32 h-64 w-64 rounded-full border border-[#d59b59]/20" aria-hidden="true" />
        <div className="container relative">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
            <div>
              <p className="eyebrow text-[#e7b877]"><span className="mr-3 inline-block h-px w-9 align-middle bg-[#d59b59]" />How we work</p>
              <h2 className="mt-7 max-w-md font-serif text-5xl leading-[0.94] tracking-[-0.045em] sm:text-7xl">Closer to the detail.</h2>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-white/60">The best supply relationships are built on clarity. That means staying engaged, asking the right questions, and doing the work between the lines.</p>
            </div>
            <div className="border-t border-white/15">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.number} className="value-row grid gap-6 border-b border-white/15 py-8 sm:grid-cols-[62px_1fr_1.5fr] sm:items-start sm:gap-8">
                    <span className="font-serif text-2xl text-[#d59b59]">{value.number}</span>
                    <div className="flex items-center gap-3"><Icon size={19} strokeWidth={1.5} className="text-[#e7b877]" /><h3 className="font-serif text-3xl tracking-[-0.03em]">{value.title}</h3></div>
                    <p className="text-sm leading-relaxed text-white/58">{value.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f0e8] py-24 sm:py-32">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24">
            <div>
              <p className="eyebrow text-[#9a6134]"><span className="mr-3 inline-block h-px w-9 align-middle bg-[#c98c4e]" />From source to shipment</p>
              <h2 className="mt-7 max-w-sm font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#20372d] sm:text-6xl">The right product. The right path.</h2>
            </div>
            <div className="grid border-t border-[#20372d]/15 md:grid-cols-3">
              {steps.map(([number, title, body]) => (
                <article key={number} className="process-card border-b border-[#20372d]/15 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#20372d] text-xs font-semibold text-[#e7b877]">{number}</span>
                  <h3 className="mt-9 font-serif text-3xl tracking-[-0.03em] text-[#20372d]">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#6a746c]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#d59b59] py-20 sm:py-28">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-24">
            <div>
              <p className="eyebrow text-[#20372d]"><span className="mr-3 inline-block h-px w-9 align-middle bg-[#20372d]/55" />Let’s talk</p>
              <h2 className="mt-7 max-w-xl font-serif text-6xl leading-[0.88] tracking-[-0.055em] text-[#20372d] sm:text-8xl">Have a brief in mind?</h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-[#20372d]/75">Tell us what you are looking for. We’ll bring the right questions, product thinking, and a clear next step.</p>
              <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#20372d]"><Mail size={17} /> A conversation starts here.</div>
            </div>

            <div className="rounded-[1.75rem] bg-[#f4f0e8] p-6 shadow-[0_20px_70px_rgba(36,45,34,.14)] sm:p-9">
              {sent ? (
                <div className="flex min-h-[340px] flex-col items-start justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#20372d] text-[#e7b877]"><Check size={24} /></span>
                  <h3 className="mt-7 font-serif text-4xl tracking-[-0.04em] text-[#20372d]">Thank you for reaching out.</h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#6a746c]">Your enquiry is ready for our team. We’ll be in touch to learn more about your brief.</p>
                  <button type="button" className="link-arrow mt-8" onClick={() => setSent(false)}>Send another enquiry <ArrowUpRight size={15} /></button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-6" aria-label="Contact Galco International">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="field-label">Your name<input required name="name" placeholder="Jane Smith" className="field-input" /></label>
                    <label className="field-label">Work email<input required type="email" name="email" placeholder="jane@company.com" className="field-input" /></label>
                  </div>
                  <label className="field-label">Company<input name="company" placeholder="Company name" className="field-input" /></label>
                  <label className="field-label">What can we help with?<textarea required name="message" rows={4} placeholder="Tell us about the product, format, or destination you have in mind." className="field-input resize-none" /></label>
                  <button type="submit" className="button-dark group mt-2 w-full justify-center sm:w-auto sm:self-start">Send enquiry <ArrowUpRight size={16} className="transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#17251f] py-9 text-white/55">
        <div className="container flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <a href="#top" className="font-serif text-3xl tracking-[0.08em] text-[#f7f2e9]">GALCO</a>
            <p className="mt-3 max-w-xs text-xs leading-relaxed">Global nuts &amp; dried fruits trade, built on quality, reliability, integrity, and value.</p>
          </div>
          <div className="flex flex-col gap-3 text-xs sm:items-end">
            <div className="flex items-center gap-2"><Globe2 size={14} className="text-[#d59b59]" /> Serving the global trade</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#d59b59]" /> Galco International, Inc · Est. 1993</div>
            <span className="pt-3 text-[10px] uppercase tracking-[0.14em] text-white/35">© 2026 Galco International, Inc.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
