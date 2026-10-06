import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Menu, Plus, X } from "lucide-react";
import { SITE_TITLE } from "../data/research";
import {
  about,
  archive,
  contact,
  faqs,
  filmBrand,
  hero,
  nav,
  pricing,
  quote,
  ralphCustomsPage,
  serviceArea,
  shades,
  socials,
} from "../data/ralphCustoms";

// A recreation of the original Ralph Customs site (Squarespace, 2024–2025).
// It keeps that site's look: near-black sections, #f0f0f0 text, #bf1320 red,
// heavy uppercase headings and Space Mono body text (see rc-* in index.css).
// It renders outside SiteLayout, so the portfolio's navbar and stars don't show.

const INK = "#0c0b0b";

// Font sizes that scale with the viewport, like the original's big type.
const size = {
  hero: "clamp(2.4rem, 8.6vw, 7rem)",
  heroLine: "clamp(1.35rem, 4.6vw, 3.4rem)",
  heroSub: "clamp(1.1rem, 3vw, 2.25rem)",
  giant: "clamp(3.2rem, 12.5vw, 7.5rem)",
  section: "clamp(2.4rem, 8vw, 5rem)",
  sub: "clamp(2rem, 6vw, 3.75rem)",
};

const useStylesheet = (href) => {
  useEffect(() => {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }, [href]);
};

const pill =
  "rc-display inline-block rounded-full border-[3px] border-rc-paper px-8 py-4 text-xl transition";
const pillDark = `${pill} bg-black hover:bg-rc-paper hover:text-black`;
const pillLight = `${pill} bg-rc-paper text-black hover:bg-white`;

const ArchiveBar = () => (
  <div className="bg-rc-paper text-black">
    <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-sm">
      <p>
        <strong>ARCHIVED</strong> · {archive.note}
      </p>
      <Link
        to="/#experience"
        className="inline-flex shrink-0 items-center gap-1 font-bold underline-offset-4 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Ralphael's portfolio
      </Link>
    </div>
  </div>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" onClick={close} className="rc-display text-2xl md:text-[1.7rem]">
          Ralph Customs
        </a>
        <nav aria-label="Ralph Customs" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg underline-offset-8 hover:underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#request-quote"
            className="rounded-full bg-rc-paper px-6 py-3 uppercase text-black transition hover:bg-white"
          >
            Request Quote
          </a>
        </nav>
        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="rc-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {open && (
        <nav
          id="rc-menu"
          aria-label="Ralph Customs menu"
          className="border-t border-white/10 px-5 pb-6 md:hidden"
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close} className="block py-3 text-xl">
              {item.label}
            </a>
          ))}
          <a
            href="#request-quote"
            onClick={close}
            className="mt-3 inline-block rounded-full bg-rc-paper px-6 py-3 uppercase text-black"
          >
            Request Quote
          </a>
        </nav>
      )}
    </header>
  );
};

// The original hero ended in a shallow V with a white rule along its edge.
const VDivider = () => (
  <svg
    className="absolute inset-x-0 bottom-0 h-[7vw] max-h-24 w-full"
    viewBox="0 0 100 10"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <polygon points="0,1.5 75,9.2 100,1.5 100,10 0,10" fill={INK} />
    <polyline
      points="0,1.5 75,9.2 100,1.5"
      fill="none"
      stroke="#f0f0f0"
      strokeWidth="3"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

const Hero = () => (
  <section id="top" className="relative isolate overflow-hidden bg-black">
    <img
      src={hero.image}
      alt=""
      className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_62%]"
    />
    <div className="absolute inset-0 -z-10 bg-black/45" />
    <div className="mx-auto max-w-6xl px-5 pb-[17vw] pt-16 text-center md:pb-44 md:pt-24">
      <p className="rc-display" style={{ fontSize: size.heroLine }}>
        {hero.kicker}
      </p>
      <h1 className="rc-display mt-5 md:mt-8" style={{ fontSize: size.hero }}>
        {hero.title}
      </h1>
      <p className="rc-display mt-5 md:mt-8" style={{ fontSize: size.heroSub }}>
        {hero.subtitle}
      </p>
    </div>
    <VDivider />
  </section>
);

const Accordion = ({ title, children, titleClass = "text-xl md:text-2xl" }) => (
  <details className="group border-t-2 border-rc-paper/90 last:border-b-2">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
      <span className={`rc-display ${titleClass}`}>{title}</span>
      <Plus
        className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-45"
        aria-hidden="true"
      />
    </summary>
    <p className="pb-5 leading-relaxed">{children}</p>
  </details>
);

const FilmCredit = ({ align = "left" }) => (
  <div className={align === "right" ? "text-center md:text-right" : ""}>
    <p className="text-sm uppercase text-rc-paper/60">Film by</p>
    <p className="rc-display text-5xl md:text-6xl">Geoshield</p>
  </div>
);

const TintingIntro = () => (
  <section className="bg-rc-ink">
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
      <div>
        <h2 className="rc-display" style={{ fontSize: size.giant }}>
          <span className="rc-bar decoration-black">Window</span>
          <br />
          <span className="rc-bar decoration-black">Tinting</span>
        </h2>
        <div className="mt-10">
          <FilmCredit />
        </div>
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="w-full rounded-2xl bg-rc-red p-6 md:p-8">
          {filmBrand.map((item) => (
            <Accordion key={item.title} title={item.title}>
              {item.body}
            </Accordion>
          ))}
        </div>
        <a href="#request-quote" className={`${pillDark} px-14 py-5 text-2xl`}>
          Message
        </a>
      </div>
    </div>
  </section>
);

const ServiceArea = () => (
  <section
    className="border-t border-white/10 bg-rc-ink"
    style={{
      backgroundImage:
        "radial-gradient(60% 60% at 72% 105%, rgba(191, 19, 32, 0.8), transparent 70%)",
    }}
  >
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr_1.35fr] md:py-24">
      <img
        src={serviceArea.photo.src}
        alt={serviceArea.photo.alt}
        loading="lazy"
        className="h-72 w-full rounded-lg object-cover md:h-full md:max-h-[28rem]"
      />
      <div>
        <h2 className="rc-display text-2xl md:text-3xl">Location of drop off</h2>
        <ul className="mt-5 space-y-3">
          {serviceArea.dropOff.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="rc-display text-2xl md:text-3xl">Areas of service for mobile</h2>
        <div className="mt-5 grid grid-cols-2 gap-x-6">
          {serviceArea.mobile.map((towns) => (
            <ul key={towns[0]} className="list-disc space-y-2 pl-5">
              {towns.map((town) => (
                <li key={town}>{town}</li>
              ))}
            </ul>
          ))}
        </div>
        <p className="mt-6 text-rc-paper/85">{serviceArea.note}</p>
      </div>
    </div>
  </section>
);

const Percentages = () => {
  const [active, setActive] = useState(shades[0].id);
  const shade = shades.find((item) => item.id === active);

  return (
    <section id="percentages" className="scroll-mt-20 border-t border-white/10 bg-rc-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="rc-display text-center" style={{ fontSize: size.section }}>
          Tint Examples
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm uppercase md:text-base">
          Click or tap on each tab to see some examples of the tint on various vehicles
        </p>
        <div role="tablist" aria-label="Tint percentages" className="mt-10 flex flex-wrap justify-center gap-3">
          {shades.map((item) => {
            const selected = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`shade-tab-${item.id}`}
                aria-selected={selected}
                aria-controls="shade-panel"
                onClick={() => setActive(item.id)}
                className={`${selected ? pillLight : pillDark} px-7 py-3 md:text-2xl`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <div id="shade-panel" role="tabpanel" aria-labelledby={`shade-tab-${shade.id}`} className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="rc-display text-3xl md:text-4xl">{shade.title}</h3>
            <p className="mt-4 leading-relaxed">{shade.text}</p>
          </div>
          {/* Flex rather than grid so a short row (e.g. 3 photos) stays centered. */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
            {shade.photos.map((photo) => (
              <figure
                key={photo.src}
                className="w-[calc(50%_-_0.375rem)] md:w-[calc(25%_-_0.75rem)]"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-lg object-cover"
                />
                <figcaption className="mt-2 text-xs uppercase md:text-sm">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PriceCard = ({ vehicle }) => {
  const priced = vehicle.full.startsWith("$");
  return (
    <article className="flex flex-col rounded-2xl border border-white/15 bg-rc-ink p-6">
      <h4 className="rc-display text-xl">{vehicle.name}</h4>
      <dl className="mt-5 space-y-4">
        <div>
          <dt className="text-xs uppercase text-rc-paper/60">Full tint, no windshield*</dt>
          <dd className={`rc-display mt-1 ${priced ? "text-5xl text-rc-red" : "text-2xl"}`}>
            {vehicle.full}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase text-rc-paper/60">Windshield*</dt>
          <dd className="rc-display mt-1 text-3xl">{vehicle.windshield}</dd>
        </div>
      </dl>
      <ul className="mt-6 space-y-2 border-t border-white/15 pt-4 text-sm">
        {vehicle.other.map(([label, price]) => (
          <li key={label} className="flex justify-between gap-4">
            <span>{label}</span>
            <span className="font-bold">{price}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Tints = () => (
  <section id="tints" className="scroll-mt-20 border-t border-white/10 bg-black">
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <h2 className="rc-display text-center md:text-left" style={{ fontSize: size.giant }}>
          Window
          <br />
          <span className="rc-bar text-rc-red decoration-rc-red">Tints</span>
        </h2>
        <FilmCredit align="right" />
      </div>

      {pricing.films.map((film) => (
        <div key={film.id} className="mt-20">
          <h3 className="rc-display" style={{ fontSize: size.sub }}>
            {film.lead} <span className="rc-bar decoration-rc-red">{film.accent}</span> {film.tail}
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {film.classes.map((vehicle) => (
              <PriceCard key={vehicle.name} vehicle={vehicle} />
            ))}
          </div>
        </div>
      ))}

      <div className="mt-10 grid gap-4 text-sm leading-relaxed text-rc-paper/80 md:grid-cols-2">
        <p>* {pricing.fullNote}</p>
        <p>* {pricing.windshieldNote}</p>
      </div>

      <div className="mt-24">
        <h3 className="rc-display" style={{ fontSize: size.sub }}>
          Carbon vs ceramic &amp; FAQs
        </h3>
        <div className="mt-8">
          {faqs.map((item) => (
            <Accordion key={item.q} title={item.q} titleClass="text-lg md:text-xl">
              {item.a}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="scroll-mt-20 border-t border-white/10 bg-rc-ink">
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:py-24">
      <div className="flex justify-center md:justify-start">
        <img
          src={about.badge.src}
          alt={about.badge.alt}
          loading="lazy"
          className="h-48 w-48 md:sticky md:top-28 md:h-64 md:w-64"
        />
      </div>
      <div>
        <h2 className="rc-display" style={{ fontSize: size.section }}>
          {about.title}
        </h2>
        <div className="mt-8 space-y-5 leading-relaxed">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const fieldClass =
  "mt-2 w-full rounded-[28px] border border-rc-paper/60 bg-transparent px-5 py-3 text-rc-paper";

const Field = ({ label, type = "text", multiline = false }) => {
  const id = `rc-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return (
    <div>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      {multiline ? (
        <textarea id={id} rows={4} className={fieldClass} />
      ) : (
        <input id={id} type={type} className={fieldClass} />
      )}
    </div>
  );
};

const RequestQuote = () => (
  <section id="request-quote" className="scroll-mt-20 border-t border-white/10 bg-black">
    <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-2 md:py-24">
      <div>
        <h2 className="rc-display" style={{ fontSize: size.section }}>
          Request Quote
        </h2>
        <p className="mt-6 leading-relaxed">{quote.intro}</p>
        <p className="mt-6 rounded-xl border border-rc-red bg-rc-red/20 p-4 text-sm leading-relaxed">
          {quote.closedNote}
        </p>
        <form className="mt-8" onSubmit={(event) => event.preventDefault()}>
          <fieldset disabled className="space-y-4 opacity-60">
            <legend className="sr-only">Quote request (disabled)</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" />
              <Field label="Last name" />
            </div>
            <Field label="Phone" type="tel" />
            <Field label="Address (for mobile work)" />
            <Field label="Message" multiline />
            <button type="submit" className={`${pillLight} mt-2 cursor-not-allowed px-10`}>
              Send
            </button>
          </fieldset>
        </form>
      </div>
      <div>
        <h3 className="rc-display text-3xl md:text-4xl">Scheduling policies</h3>
        <div className="mt-8 space-y-10">
          {quote.policies.map((policy) => (
            <div key={policy.title}>
              <h4 className="rc-display text-xl">{policy.title}</h4>
              <p className="mt-3 leading-relaxed text-rc-paper/85">{policy.body}</p>
              {policy.items && (
                <ul className="mt-4 space-y-2">
                  {policy.items.map(([label, price]) => (
                    <li
                      key={label}
                      className="flex items-center justify-between gap-4 rounded-xl border border-white/15 px-4 py-3"
                    >
                      <span>{label}</span>
                      <span className="rc-display text-2xl">{price}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section
    id="contact"
    className="scroll-mt-20 border-t border-white/10 bg-rc-ink"
    style={{
      backgroundImage:
        "radial-gradient(70% 60% at 50% 115%, rgba(191, 19, 32, 0.65), transparent 70%)",
    }}
  >
    <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
      <h2 className="rc-display" style={{ fontSize: size.section }}>
        Contact Us
      </h2>
      <p className="mt-6 leading-relaxed">{contact.body}</p>
      <Link to="/#contact" className={`${pillLight} mt-8`}>
        Contact Ralphael
      </Link>
      <h3 className="rc-display mt-16 text-2xl md:text-3xl">Follow us on social</h3>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-[3px] border-rc-paper bg-black px-6 py-3 uppercase transition hover:bg-rc-paper hover:text-black"
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-black">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm md:flex-row md:items-end md:justify-between">
      <div>
        <p className="rc-display text-3xl">Ralph Customs</p>
        <p className="mt-2 text-rc-paper/70">Westchester window tinting · {archive.period}</p>
      </div>
      <div className="space-y-2 text-rc-paper/70 md:text-right">
        <p>
          Recreated from the original ralphcustoms.com for{" "}
          <Link to="/" className="underline underline-offset-4 hover:text-rc-paper">
            Ralphael Alcober's portfolio
          </Link>
          .
        </p>
        <p>
          Hero photo by{" "}
          <a
            href={hero.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-rc-paper"
          >
            {hero.credit.name}
          </a>{" "}
          on Unsplash.
        </p>
      </div>
    </div>
  </footer>
);

export const RalphCustomsPage = () => {
  useStylesheet(ralphCustomsPage.fontsHref);

  useEffect(() => {
    document.title = ralphCustomsPage.title;
    // Match the page so overscroll at the top or bottom doesn't flash the
    // portfolio's light background.
    const { style } = document.body;
    const previousBackground = style.backgroundColor;
    style.backgroundColor = INK;
    return () => {
      document.title = SITE_TITLE;
      style.backgroundColor = previousBackground;
    };
  }, []);

  return (
    <div className="rc-mono min-h-screen bg-rc-ink text-left text-rc-paper antialiased">
      <ArchiveBar />
      <Header />
      <main>
        <Hero />
        <TintingIntro />
        <ServiceArea />
        <Percentages />
        <Tints />
        <About />
        <RequestQuote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
