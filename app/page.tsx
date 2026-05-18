import Link from "next/link";

const PHONE = "(352) 683-2482";
const PHONE_HREF = "tel:+13526832482";

const NAV = [
  { label: "Equipment", href: "#equipment" },
  { label: "Services", href: "#services" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

const BRANDS = [
  {
    name: "Spartan",
    line: "Performance zero-turns & utility vehicles",
    blurb:
      "Built for serious cut quality and ground speed. The mower for landscapers and large properties.",
    tag: "Mowers · UTVs",
  },
  {
    name: "Toro",
    line: "Residential & commercial mowers",
    blurb:
      "A name homeowners and crews have trusted for generations. Walk-behinds, riders, zero-turns.",
    tag: "Walk · Ride · Zero-Turn",
  },
  {
    name: "Exmark",
    line: "Professional-grade equipment",
    blurb:
      "The pro landscaper's brand. Engineered for daily commercial use and long service life.",
    tag: "Commercial Grade",
  },
];

const SERVICES = [
  {
    n: "01",
    title: "New & Used Mowers",
    body: "The full lineup of Spartan, Toro, and Exmark — plus a curated selection of pre-owned machines. Financing available on commercial-grade equipment.",
  },
  {
    n: "02",
    title: "Service & Repair",
    body: "Small-engine specialists. We service all major brands, not just the ones we sell. Pickup and delivery available for larger equipment.",
  },
  {
    n: "03",
    title: "Parts & Accessories",
    body: "OEM and aftermarket parts kept on the shelf. Blade sharpening done in-house. Same-day turnaround on most in-stock items.",
  },
];

const HERO_COLLAGE = [
  { src: "/photos/hero-toro-recycler.jpg", alt: "Toro Recycler push mower on the showroom floor" },
  { src: "/photos/hero-stihl-hedge.jpg", alt: "Stihl hedge trimmer in action — Shaped by Innovation" },
  { src: "/photos/hero-mower-wheel.jpg", alt: "Toro Recycler mower wheel detail" },
  { src: "/photos/hero-service-hands.jpg", alt: "Service technician working on a Toro mower deck" },
  { src: "/photos/hero-stihl-trimmer.jpg", alt: "Stihl string trimmer — Performance you can see" },
  { src: "/photos/hero-toro-60v.jpg", alt: "Toro 60V battery-powered push mower" },
];

const SHOP_FEED = [
  {
    src: "/photos/toro-zeroturn.png",
    alt: "Toro zero-turn mower in action",
    caption: "Toro · Zero-Turn",
  },
  {
    src: "/photos/toro-push.png",
    alt: "Toro residential push mower",
    caption: "Toro · Walk-Behind",
  },
  {
    src: "/photos/stihl-chainsaw.png",
    alt: "Stihl chainsaw on a wheelbarrow",
    caption: "Stihl · Chainsaws",
  },
  {
    src: "/photos/rehlko-oil.png",
    alt: "Rehlko engine oil bottles",
    caption: "Rehlko · Engine Oil",
  },
];

const QUOTES = [
  {
    body: "Staff is genuinely professional and knows the equipment inside out.",
    cite: "Google review",
  },
  {
    body: "Thank you Shelly and Bob — service that feels personal, not transactional.",
    cite: "Google review",
  },
];

const TRUST = [
  { label: "BBB", strong: "A+ Accredited" },
  { label: "Authorized Dealer", strong: "Spartan · Toro · Exmark" },
  { label: "Google", strong: "97+ Reviews" },
  { label: "Locally Owned", strong: "Spring Hill, FL" },
];

const HOURS = [
  { d: "Monday", h: "8:30 AM — 5:00 PM" },
  { d: "Tuesday", h: "8:30 AM — 5:00 PM" },
  { d: "Wednesday", h: "8:30 AM — 5:00 PM" },
  { d: "Thursday", h: "8:30 AM — 5:00 PM" },
  { d: "Friday", h: "8:30 AM — 5:00 PM" },
  { d: "Saturday", h: "8:30 AM — 12:30 PM" },
  { d: "Sunday", h: "Closed" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-bone">
      {/* ─────────────────────────── NAV ─────────────────────────── */}
      <header className="sticky top-0 z-50 bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70 border-b border-navy/10">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-3">
            <span
              className="font-display font-black text-navy text-2xl lg:text-[1.65rem] tracking-tight leading-none"
              aria-label="Spring Hill Outdoor Power Equipment"
            >
              SHOPE
            </span>
            <span className="hidden md:inline eyebrow-quiet text-[0.62rem]">
              Spring Hill Outdoor Power
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="nav-link text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-navy/80 hover:text-navy transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-ember hover:text-ember-700 transition-colors"
            >
              {PHONE}
            </a>
          </nav>
          <a
            href={PHONE_HREF}
            className="md:hidden text-[0.74rem] font-bold uppercase tracking-[0.14em] text-ember"
          >
            Call
          </a>
        </div>
      </header>

      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section id="top" className="relative bg-navy text-bone overflow-hidden">
        {/* subtle navy texture base — no full-bleed image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(36,54,99,0.55) 0%, rgba(15,26,46,0) 60%), radial-gradient(ellipse at 90% 100%, rgba(209,74,44,0.18) 0%, rgba(15,26,46,0) 55%)",
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10 pt-20 pb-20 lg:pt-28 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* ── Left: text column ── */}
            <div className="lg:col-span-7">
              <div className="anim-fade" style={{ ["--anim-delay" as any]: "0ms" }}>
                <div className="flex items-center gap-4">
                  <span className="block h-px w-10 bg-ember" />
                  <span className="eyebrow text-ember">
                    Authorized Dealer · Spring Hill, FL
                  </span>
                </div>
              </div>

              <h1
                className="anim-settle mt-7 font-display font-black uppercase text-bone leading-[0.92] tracking-tight text-[clamp(2.6rem,7.2vw,6.4rem)]"
                style={{ ["--anim-delay" as any]: "100ms" }}
              >
                Serious equipment.
                <br />
                <span className="text-ember">Expertly serviced.</span>
              </h1>

              <p
                className="anim-settle mt-7 max-w-2xl font-sans text-[1.02rem] lg:text-[1.12rem] text-bone/85 leading-relaxed"
                style={{ ["--anim-delay" as any]: "260ms" }}
              >
                Spring Hill Outdoor Power Equipment is the authorized{" "}
                <span className="text-bone font-semibold">Spartan</span>,{" "}
                <span className="text-bone font-semibold">Toro</span>, and{" "}
                <span className="text-bone font-semibold">Exmark</span> dealer
                for Hernando County. Sales, service, and parts — for homeowners
                and the crews that work the property next door.
              </p>

              <div
                className="anim-settle mt-10 flex flex-wrap items-center gap-4"
                style={{ ["--anim-delay" as any]: "420ms" }}
              >
                <a href={PHONE_HREF} className="btn-ember">
                  <span>Call {PHONE}</span>
                  <span aria-hidden>→</span>
                </a>
                <a href="#equipment" className="btn-ghost-light">
                  Browse Equipment
                </a>
              </div>
            </div>

            {/* ── Right: photo collage ── */}
            <div
              className="lg:col-span-5 anim-fade"
              style={{ ["--anim-delay" as any]: "200ms" }}
            >
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {HERO_COLLAGE.map((p, i) => {
                  // Tile 5 (Stihl trimmer "PERFORMANCE YOU CAN SEE"): zoom into
                  // the top portion so "YOU CAN SEE" clips out of view, leaving
                  // just "PERFORMANCE" at the bottom of the visible frame.
                  const isStihlTrimmer = p.src.includes("stihl-trimmer");
                  return (
                    <div
                      key={p.src}
                      className="relative aspect-square overflow-hidden bg-navy-800 group"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.src}
                        alt={p.alt}
                        width={206}
                        height={206}
                        loading={i < 2 ? "eager" : "lazy"}
                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ${
                          isStihlTrimmer
                            ? "object-top scale-[1.22] origin-top group-hover:scale-[1.30]"
                            : "object-center group-hover:scale-[1.04]"
                        }`}
                      />
                      {/* faint hairline border */}
                      <div className="absolute inset-0 ring-1 ring-bone/10 pointer-events-none" />
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 flex items-center justify-between text-bone/45 text-[0.7rem] uppercase tracking-[0.22em] font-semibold">
                <span>From the shop floor</span>
                <span aria-hidden className="text-ember">·</span>
                <span>Spring Hill, FL</span>
              </div>
            </div>
          </div>

          {/* ── Stat strip ── */}
          <div
            className="anim-fade mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-bone/15 pt-10"
            style={{ ["--anim-delay" as any]: "640ms" }}
          >
            <Stat n="6" sub="Years serving Spring Hill" />
            <Stat n="3" sub="Premium brand authorizations" />
            <Stat n="97+" sub="Google reviews" />
            <Stat n="A+" sub="BBB accredited" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────── BRANDS ─────────────────────────── */}
      <section id="equipment" className="bg-bone py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20" data-reveal>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="block h-px w-10 bg-ember" />
                <span className="eyebrow">The Brands We Carry</span>
              </div>
              <h2 className="font-display font-black uppercase text-navy text-[clamp(2.5rem,6vw,5rem)] leading-[0.92]">
                Three brands.
                <br />
                One showroom.
              </h2>
            </div>
            <p className="text-navy/70 max-w-md text-[1rem] leading-relaxed lg:text-right">
              Every line in our showroom is here because it earns its keep on
              Florida properties. We sell what we'd put on the truck ourselves.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {BRANDS.map((b, i) => (
              <article
                key={b.name}
                className="relative bg-navy overflow-hidden tile-lift aspect-[3/4.2] group"
                data-reveal
                style={{ ["--reveal-delay" as any]: `${i * 120}ms` }}
              >
                {/* layered backdrop — gradient + giant outline numeral, no photo */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 80% 0%, rgba(36,54,99,0.7) 0%, rgba(15,26,46,0) 55%), linear-gradient(180deg, rgba(15,26,46,0) 40%, rgba(10,19,34,0.85) 100%)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute -bottom-12 -right-6 font-display font-black text-bone/[0.05] leading-none select-none pointer-events-none"
                  style={{ fontSize: "clamp(14rem, 28vw, 22rem)" }}
                >
                  0{i + 1}
                </span>
                <span
                  aria-hidden
                  className="absolute top-7 left-7 right-7 h-px bg-bone/15 origin-left transition-transform duration-700 group-hover:scale-x-100 scale-x-100"
                />

                <div className="absolute inset-0 p-7 lg:p-9 flex flex-col justify-between text-bone">
                  <div className="flex items-start justify-between">
                    <span className="numeral text-bone/55 text-sm">
                      0{i + 1}
                    </span>
                    <span className="eyebrow-quiet text-bone/60 text-[0.62rem]">
                      Authorized
                    </span>
                  </div>
                  <div>
                    <span className="block eyebrow-quiet text-ember text-[0.62rem] mb-4">
                      {b.tag}
                    </span>
                    <h3 className="font-display font-black uppercase text-bone text-[clamp(2.8rem,5.4vw,4.8rem)] leading-[0.88] tracking-tight">
                      {b.name}
                    </h3>
                    <div className="mt-5 h-px w-12 bg-ember" />
                    <p className="mt-5 text-bone/85 text-sm uppercase tracking-[0.14em] font-semibold">
                      {b.line}
                    </p>
                    <p className="mt-5 text-bone/70 text-[0.98rem] leading-relaxed max-w-sm">
                      {b.blurb}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-navy/55" data-reveal>
            Looking for parts or service on a different brand? We work on most
            major small-engine equipment —{" "}
            <a href={PHONE_HREF} className="text-ember underline-offset-4 hover:underline font-semibold">
              call to confirm.
            </a>
          </p>
        </div>
      </section>

      {/* ─────────────────────────── SERVICES ─────────────────────────── */}
      <section id="services" className="bg-navy text-bone py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 lg:mb-20" data-reveal>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="block h-px w-10 bg-ember" />
                <span className="eyebrow">Sales · Service · Parts</span>
              </div>
              <h2 className="font-display font-black uppercase text-bone text-[clamp(2.5rem,6vw,5rem)] leading-[0.92]">
                Everything under
                <br />
                <span className="text-ember">one roof.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-bone/70 text-[1.02rem] leading-relaxed self-end">
              The same shop sells you the machine, maintains it, and stocks the
              parts when something wears out. That's the point of a specialist
              dealer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-bone/15">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`svc-cell py-10 lg:py-14 px-2 md:px-8 ${
                  i > 0 ? "md:border-l border-bone/15" : ""
                }`}
                data-reveal
                style={{ ["--reveal-delay" as any]: `${i * 110}ms` }}
              >
                <span className="numeral text-ember text-2xl">{s.n}</span>
                <h3 className="mt-6 font-display font-bold uppercase text-bone text-3xl lg:text-[2.1rem] leading-[1]">
                  {s.title}
                </h3>
                <p className="mt-5 text-bone/75 leading-relaxed text-[0.98rem]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── WHY A SPECIALIST DEALER ─────────────────────────── */}
      <section className="bg-bone py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5" data-reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="block h-px w-10 bg-ember" />
                <span className="eyebrow">Why a Specialist</span>
              </div>
              <h2 className="font-display font-black uppercase text-navy text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.94]">
                The box store
                <br />
                isn't a dealer.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-6" data-reveal style={{ ["--reveal-delay" as any]: "120ms" }}>
              <p className="text-navy/85 text-[1.05rem] lg:text-[1.12rem] leading-[1.65]">
                A specialist dealer means staff who actually run the machines
                they sell — not seasonal help reading a tag. It means real
                warranty service through the manufacturer, not a return desk. It
                means OEM parts on the shelf, blade sharpening in-house, and
                pickup-and-delivery for the equipment that's too heavy to throw
                in a pickup. For commercial-grade machines, financing is part of
                the conversation. We do this every day — it's all we do.
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-y-6 hairline pt-8">
                <Pill label="OEM Parts" />
                <Pill label="Pickup & Delivery" />
                <Pill label="Financing" />
                <Pill label="Warranty Service" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── FROM THE SHOP ─────────────────────────── */}
      <section className="bg-bone py-24 lg:py-28 border-t border-navy/10">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12" data-reveal>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="block h-px w-10 bg-ember" />
                <span className="eyebrow">From the Shop</span>
              </div>
              <h2 className="font-display font-black uppercase text-navy text-[clamp(2.2rem,5vw,4rem)] leading-[0.94]">
                What's on the floor.
              </h2>
            </div>
            <p className="text-navy/60 max-w-md text-[0.98rem] leading-relaxed lg:text-right">
              Recent posts from our shop — equipment we stock, work on, and stand behind.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {SHOP_FEED.map((item, i) => (
              <figure
                key={item.src}
                className="group relative bg-navy overflow-hidden tile-lift aspect-square"
                data-reveal
                style={{ ["--reveal-delay" as any]: `${i * 100}ms` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  width={206}
                  height={206}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/90 to-transparent pointer-events-none" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between text-bone">
                  <span className="font-display font-bold uppercase text-bone text-[0.92rem] tracking-tight">
                    {item.caption}
                  </span>
                  <span className="eyebrow-quiet text-bone/55 text-[0.58rem]">
                    SHOPE
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-10 text-sm text-navy/55 flex flex-wrap items-center gap-2" data-reveal>
            More on{" "}
            <a
              href="https://www.facebook.com/springhilloutdoorpe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ember underline-offset-4 hover:underline font-semibold inline-flex items-center gap-1"
            >
              Facebook
              <span aria-hidden>↗</span>
            </a>
            — follow for new arrivals, service tips, and shop updates.
          </p>
        </div>
      </section>

      {/* ─────────────────────────── QUOTES ─────────────────────────── */}
      <section className="bg-bone-200 py-24 lg:py-28 border-y border-navy/10">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-10" data-reveal>
            <span className="block h-px w-10 bg-ember" />
            <span className="eyebrow">What Customers Say</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {QUOTES.map((q, i) => (
              <figure
                key={q.cite + i}
                className="bg-bone p-8 lg:p-10 border border-navy/10 tile-lift accent-stripe"
                data-reveal
                style={{ ["--reveal-delay" as any]: `${i * 140}ms` }}
              >
                <blockquote className="font-display font-bold text-navy text-[clamp(1.45rem,2.4vw,1.95rem)] leading-[1.18] tracking-tight">
                  &ldquo;{q.body}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-between text-navy/60">
                  <span className="text-[0.72rem] uppercase tracking-[0.22em] font-semibold">
                    {q.cite}
                  </span>
                  <span aria-hidden className="text-ember font-bold">
                    ★★★★★
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── TRUST SIGNALS ─────────────────────────── */}
      <section className="bg-bone py-16 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 hairline pt-10">
            {TRUST.map((t, i) => (
              <div
                key={t.label}
                className="flex flex-col items-start gap-2"
                data-reveal
                style={{ ["--reveal-delay" as any]: `${i * 90}ms` }}
              >
                <span className="eyebrow-quiet text-[0.65rem]">{t.label}</span>
                <span className="font-display font-bold uppercase text-navy text-[1.35rem] lg:text-[1.6rem] leading-[1.05] tracking-tight">
                  {t.strong}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── VISIT ─────────────────────────── */}
      <section id="visit" className="bg-navy text-bone py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5" data-reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="block h-px w-10 bg-ember" />
                <span className="eyebrow">Visit the Shop</span>
              </div>
              <h2 className="font-display font-black uppercase text-bone text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.92]">
                On Spring
                <br />
                Hill Drive.
              </h2>

              <div className="mt-10 space-y-7">
                <div>
                  <span className="eyebrow-quiet text-bone/55 text-[0.62rem]">
                    Address
                  </span>
                  <p className="mt-2 font-display text-bone text-[1.45rem] lg:text-[1.6rem] font-semibold leading-tight">
                    13132 Spring Hill Dr
                    <br />
                    Spring Hill, FL 34609
                  </p>
                </div>

                <div>
                  <span className="eyebrow-quiet text-bone/55 text-[0.62rem]">
                    Phone
                  </span>
                  <a
                    href={PHONE_HREF}
                    className="mt-2 block font-display text-ember text-[1.6rem] lg:text-[1.85rem] font-bold tracking-tight hover:text-ember-400 transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>

                <div>
                  <span className="eyebrow-quiet text-bone/55 text-[0.62rem]">
                    Hours
                  </span>
                  <table className="mt-3 w-full max-w-sm text-[0.95rem]">
                    <tbody>
                      {HOURS.map((row) => (
                        <tr key={row.d} className="border-b border-bone/10 last:border-0">
                          <td className="py-2.5 pr-4 text-bone/65 font-medium">
                            {row.d}
                          </td>
                          <td className="py-2.5 text-bone text-right font-mono text-[0.88rem]">
                            {row.h}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-bone/70 text-[0.95rem] leading-relaxed border-l-2 border-ember pl-4 mt-8">
                  Pickup and delivery available for larger equipment — just ask.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7" data-reveal style={{ ["--reveal-delay" as any]: "150ms" }}>
              <div className="map-block aspect-[5/4] lg:aspect-[5/4.2] relative overflow-hidden border border-bone/15">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-ember text-bone shadow-plate">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z"
                        />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    </div>
                    <p className="mt-5 font-display font-bold uppercase text-navy text-xl tracking-tight">
                      13132 Spring Hill Dr
                    </p>
                    <p className="mt-1 text-navy/60 text-sm">
                      Spring Hill, FL 34609
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-navy/15" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── CONTACT ─────────────────────────── */}
      <section id="contact" className="bg-bone py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5" data-reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="block h-px w-10 bg-ember" />
                <span className="eyebrow">Get a Quote</span>
              </div>
              <h2 className="font-display font-black uppercase text-navy text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[0.92]">
                Tell us what
                <br />
                you need.
              </h2>
              <p className="mt-8 text-navy/75 text-[1.05rem] leading-relaxed max-w-md">
                Quotes by phone are usually fastest. Bob or Shelly will pick up.
              </p>
              <a
                href={PHONE_HREF}
                className="btn-ember mt-8"
              >
                <span>Call {PHONE}</span>
                <span aria-hidden>→</span>
              </a>
            </div>

            <form
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5"
              data-reveal
              style={{ ["--reveal-delay" as any]: "140ms" }}
              action="#contact"
              method="get"
            >
              <label className="block">
                <span className="eyebrow-quiet block mb-2 text-[0.62rem]">
                  Name
                </span>
                <input
                  type="text"
                  className="field"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="eyebrow-quiet block mb-2 text-[0.62rem]">
                  Phone
                </span>
                <input
                  type="tel"
                  className="field"
                  placeholder="(352) 000-0000"
                  autoComplete="tel"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="eyebrow-quiet block mb-2 text-[0.62rem]">
                  Equipment / Service Needed
                </span>
                <textarea
                  className="field min-h-[160px] resize-y"
                  placeholder="Tell us the brand, model, and what you're looking for — sales, service, parts, or pickup."
                />
              </label>
              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-navy/55 text-[0.82rem]">
                  We'll respond during shop hours, Mon–Sat.
                </p>
                <button
                  type="button"
                  className="btn-ember"
                  aria-label="Send message — preview only"
                >
                  Send Message
                  <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── FOOTER ─────────────────────────── */}
      <footer className="bg-navy-950 text-bone/70 py-14 lg:py-16">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-bone/10 pb-10">
            <div>
              <p className="font-display font-black uppercase text-bone text-3xl lg:text-4xl tracking-tight leading-none">
                SHOPE
              </p>
              <p className="mt-4 text-bone/65 max-w-md leading-relaxed text-[0.95rem]">
                Spring Hill Outdoor Power Equipment · Authorized{" "}
                <span className="text-bone">Spartan · Toro · Exmark</span>{" "}
                dealer for Hernando County, Florida.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-[0.92rem]">
              <div>
                <span className="eyebrow-quiet block mb-3 text-bone/45 text-[0.62rem]">
                  Visit
                </span>
                <p className="text-bone leading-snug">
                  13132 Spring Hill Dr
                  <br />
                  Spring Hill, FL 34609
                </p>
              </div>
              <div>
                <span className="eyebrow-quiet block mb-3 text-bone/45 text-[0.62rem]">
                  Call
                </span>
                <a
                  href={PHONE_HREF}
                  className="text-ember hover:text-ember-400 font-display font-bold text-xl tracking-tight transition-colors"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[0.78rem] text-bone/45">
            <p>
              © {new Date().getFullYear()} Spring Hill Outdoor Power Equipment.
              All rights reserved.
            </p>
            <p className="uppercase tracking-[0.22em] text-bone/35 text-[0.68rem]">
              Site by{" "}
              <span className="text-bone/60 hover:text-bone transition-colors">
                WebSuite Digital
              </span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ n, sub }: { n: string; sub: string }) {
  return (
    <div>
      <div className="numeral text-bone text-[clamp(2.4rem,4.5vw,3.6rem)] leading-none">
        {n}
      </div>
      <div className="mt-3 text-bone/60 text-[0.66rem] uppercase tracking-[0.22em] font-semibold">
        {sub}
      </div>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden
        className="block w-1.5 h-1.5 rounded-full bg-ember"
      />
      <span className="font-display font-bold uppercase text-navy text-[0.95rem] lg:text-[1.05rem] tracking-tight">
        {label}
      </span>
    </div>
  );
}
