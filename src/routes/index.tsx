import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import exteriorDay from "@/assets/image.png";
import plated1 from "@/assets/image-2.png";
import buffet1 from "@/assets/image-3.png";
import dessert from "@/assets/image-4.png";
import exteriorNight from "@/assets/image-5.png";
import buffet2 from "@/assets/image-6.png";
import plated2 from "@/assets/image-7.png";
import interior1 from "@/assets/image-8.png";
import interior2 from "@/assets/image-9.png";
import plated3 from "@/assets/image-10.png";
import panipuri from "@/assets/image-11.png";
import soup from "@/assets/image-12.png";
import corn from "@/assets/image-13.png";

// export const Route = createFileRoute("/")({
//   component: Index,
// });
export const Route = createFileRoute("/")({
  component: Index,
});

const menuItems = [
  { name: "Signature Margherita", cat: "Pizza", desc: "Wood-fired crust, San Marzano tomato, fresh basil, mozzarella fior di latte.", price: "₹249", img: plated1 },
  { name: "Farmhouse Supreme", cat: "Pizza", desc: "Loaded veggies, olives, jalapeños on golden hand-tossed base.", price: "₹329", img: plated2 },
  { name: "Creamy Alfredo Penne", cat: "Pasta", desc: "Silky white sauce, herbs, parmesan, garlic butter finish.", price: "₹219", img: plated3 },
  { name: "Peri-Peri Twist Pasta", cat: "Pasta", desc: "Fiery tomato, peppers, house-blend Indo-Italian spice.", price: "₹229", img: plated1 },
  { name: "Buffet Feast", cat: "Unlimited", desc: "Pizza + pasta + rice + starters + dessert. Endless refills.", price: "₹399", img: buffet1 },
  { name: "Choco Lava & Vanilla", cat: "Dessert", desc: "Warm molten brownie with a scoop of cold vanilla bean.", price: "₹149", img: dessert },
  { name: "Pani Puri & Combo", cat: "Dish", desc: "Amazing panipuri and Pasta Combo with Tangy Teste", price: "₹199", img: panipuri },
  { name: "Tomato Soup Spicy", cat: "Soup", desc: "Amazing Tomato Soup", price: "₹199", img: soup },
  { name: "Corn Salad ", cat: "Salad", desc: "Tangy flavored saled", price: "₹199", img: corn },
];

const buffetSteps = [
  { n: "01", title: "Reserve Your Table", d: "Book online or walk in. We'll have your seat warm and ready." },
  { n: "02", title: "Choose the Buffet", d: "One flat price. Unlimited access to every counter, every hour." },
  { n: "03", title: "Eat, Refill, Repeat", d: "Wood-fired pizzas, pastas, live counters, and 20+ sides." },
  { n: "04", title: "Save Room for Dessert", d: "Molten cakes, ice cream, warm brownies — the sweet finale." },
];

const reviews = [
  { name: "Aarav S.", tag: "College Student", text: "Best unlimited pizza in Jaipur, hands down. Came for lunch, stayed 3 hours. Worth every rupee!", rating: 5 },
  { name: "Priya M.", tag: "Birthday Party", text: "Celebrated my 22nd here — the staff decorated the table and the desserts kept coming. Magical night.", rating: 5 },
  { name: "Rohit & Family", tag: "Family Dinner", text: "Kids loved the pizzas, parents loved the pasta, and everyone loved the price. Our new Sunday spot.", rating: 5 },
  { name: "Neha K.", tag: "Foodie", text: "Fresh, hot, unlimited. The Indo-Italian fusion pastas surprised me — genuinely delicious.", rating: 5 },
];

const offers = [
  { title: "Weekday Buffet", price: "₹399", tag: "Mon – Fri", d: "Unlimited pizza, pasta & sides. Lunch or dinner." },
  { title: "Student Special", price: "20% OFF", tag: "With Valid ID", d: "Show your college ID — save on any buffet." },
  { title: "Birthday Bash", price: "FREE Cake", tag: "Group of 6+", d: "Complimentary cake + reserved decorated table." },
  { title: "Weekend Feast", price: "₹499", tag: "Sat & Sun", d: "Extended buffet with live counters & live music." },
];

const gallery = [
  { src: buffet1, span: "row-span-2" },
  { src: interior1, span: "" },
  { src: plated2, span: "" },
  { src: dessert, span: "row-span-2" },
  { src: buffet2, span: "" },
  { src: plated3, span: "" },
  { src: interior2, span: "" },
  { src: plated1, span: "" },
];


export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("animate-rise");
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const nav = [
    ["Home", "#home"], ["Menu", "#menu"], ["Buffet", "#buffet"],
    ["Gallery", "#gallery"], ["Offers", "#offers"], ["Reviews", "#reviews"],
    ["About", "#about"], ["Contact", "#contact"],
  ];


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${scrolled ? "glass rounded-2xl shadow-lift" : ""}`}>
          <div className="flex items-center justify-between py-3">
            <a href="#home" className="flex items-center gap-2 shrink-0">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-fire text-cream shadow-warm text-lg">🍕</div>
              <div className="leading-tight">
                <div className="font-display text-lg sm:text-xl font-black tracking-tight">Pizza World</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Unlimited · Jaipur</div>
              </div>
            </a>
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
              {nav.map(([label, href]) => (
                <a key={href} href={href} className="relative text-foreground/80 hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">{label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-fire text-cream px-5 py-2.5 text-sm font-semibold shadow-warm hover:scale-105 transition-transform">
                Reserve Table
              </a>
              <button onClick={() => setOpenMenu(!openMenu)} className="lg:hidden grid h-10 w-10 place-items-center rounded-full glass">
                <span className="text-xl">{openMenu ? "✕" : "☰"}</span>
              </button>
            </div>
          </div>
          {openMenu && (
            <div className="lg:hidden pb-4 grid gap-1 text-sm">
              {nav.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpenMenu(false)} className="py-2 px-3 rounded-lg hover:bg-primary/10">{label}</a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={interior1} alt="Pizza World interior" className="h-full w-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/85 via-charcoal/60 to-tomato/40" />
          <div className="absolute inset-0 bg-noise opacity-40" />
        </div>

        {/* Floating pizza slices */}
        <div className="absolute top-24 right-10 text-6xl md:text-8xl opacity-30 animate-floaty" style={{ animationDelay: "0s" }}>🍕</div>
        <div className="absolute bottom-40 left-8 text-5xl md:text-7xl opacity-25 animate-floaty" style={{ animationDelay: "2s" }}>🌿</div>
        <div className="absolute top-1/2 right-1/4 text-4xl md:text-6xl opacity-20 animate-floaty" style={{ animationDelay: "4s" }}>🍅</div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-cream/90 text-xs tracking-widest uppercase mb-6 animate-rise">
              <span className="h-2 w-2 rounded-full bg-basil animate-pulse" /> Now Serving · Malviya Nagar, Jaipur
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-black text-cream leading-[0.95] tracking-tight animate-rise" style={{ animationDelay: "0.1s" }}>
              Unlimited Pizza.<br />
              <span className="text-gradient-fire">Unlimited Happiness.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-cream/85 max-w-xl animate-rise" style={{ animationDelay: "0.25s" }}>
              Freshly baked pies, endless buffet counters, and a cafe built for the moments you remember. One flat price. Every craving covered.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-rise" style={{ animationDelay: "0.4s" }}>
              <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-fire text-cream px-7 py-4 font-semibold shadow-warm hover:scale-105 transition-transform">
                Reserve Your Table
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#menu" className="inline-flex items-center gap-3 rounded-full glass-dark text-cream px-7 py-4 font-semibold hover:bg-cream/10 transition-colors">
                View Menu
              </a>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg animate-rise" style={{ animationDelay: "0.55s" }}>
              {[["4.6★", "Google Rated"], ["50k+", "Happy Diners"], ["₹399", "Buffet Starts"]].map(([n, l]) => (
                <div key={l as string}>
                  <div className="font-display text-3xl sm:text-4xl font-black text-cream">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-cream/60 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 text-xs uppercase tracking-[0.3em]">Scroll ↓</div>
      </section>

      {/* MARQUEE */}
      <div className="bg-charcoal text-cream py-4 overflow-hidden border-y border-cream/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 pr-10 font-display text-2xl sm:text-3xl">
              {["Fresh Dough Daily", "🍕", "Unlimited Buffet", "🌿", "Wood-Fired", "🔥", "Family Friendly", "✨", "Since Day One", "🍕"].map((t, j) => (
                <span key={j} className={j % 2 ? "text-cheese" : ""}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mb-16" data-reveal>
            <div className="text-primary font-hand text-2xl mb-2">Why Pizza World?</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">Everything you love,<br /><span className="italic text-primary">absolutely unlimited.</span></h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { i: "🍕", t: "Unlimited Pizza", d: "20+ varieties, refills the moment your slice ends." },
              { i: "🥗", t: "Live Buffet", d: "Pastas, rice, starters, salads — freshly served all day." },
              { i: "🍰", t: "Sweet Endings", d: "Molten cakes, ice cream, warm brownies. Always." },
              { i: "🔥", t: "Wood-Fired Oven", d: "Every crust kissed by fire. Crisp outside, airy inside." },
              { i: "🎉", t: "Birthday Ready", d: "Decorated tables, free cake, memories for the group chat." },
              { i: "👨‍👩‍👧", t: "Family Friendly", d: "Booster seats, kid menu, spacious booths. Everyone welcome." },
              { i: "⚡", t: "Fast Service", d: "You're seated in minutes, eating within moments." },
              { i: "💛", t: "Warm Hospitality", d: "Staff that treats every visit like a homecoming." },
            ].map((f) => (
              <div key={f.t} data-reveal className="tilt-card group relative rounded-2xl bg-card p-7 border border-border shadow-lift overflow-hidden">
                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-fire opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                <div className="text-4xl mb-4">{f.i}</div>
                <h3 className="font-display text-xl font-bold mb-2">{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 sm:py-32 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16" data-reveal>
            <div className="max-w-xl">
              <div className="text-cheese font-hand text-2xl mb-2">Chef's Signatures</div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">The Menu that<br /><span className="text-gradient-fire">everyone comes for.</span></h2>
            </div>
            <p className="text-cream/70 max-w-sm">Handpicked favorites from our buffet — but come hungry, there's much more waiting on the counter.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((m) => (
              <article key={m.name} data-reveal className="tilt-card group rounded-3xl overflow-hidden bg-cream/5 border border-cream/10 backdrop-blur">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 rounded-full bg-fire px-3 py-1 text-xs font-bold uppercase tracking-wider text-cream shadow-warm">{m.cat}</div>
                  <div className="absolute bottom-4 right-4 rounded-full glass-dark px-4 py-2 text-cheese font-display font-black text-lg">{m.price}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-cream mb-2">{m.name}</h3>
                  <p className="text-sm text-cream/70 leading-relaxed">{m.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUFFET EXPERIENCE */}
      <section id="buffet" className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div data-reveal className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-lift">
                <img src={buffet1} alt="Unlimited buffet counter" className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl overflow-hidden shadow-warm border-8 border-background w-48 h-48">
                <img src={buffet2} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 hidden sm:flex glass rounded-2xl px-5 py-4 shadow-lift">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Flat Price</div>
                  <div className="font-display text-3xl font-black text-primary">₹399</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-primary font-hand text-2xl mb-2" data-reveal>The Unlimited Ritual</div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-6" data-reveal>How the buffet works.</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-lg" data-reveal>
                One check-in. Zero limits. Whether it's a solo Saturday or a table of ten, the counter keeps flowing until you say stop.
              </p>

              <ol className="space-y-6">
                {buffetSteps.map((s) => (
                  <li key={s.n} data-reveal className="flex gap-5 group">
                    <div className="shrink-0 grid h-14 w-14 place-items-center rounded-2xl bg-fire text-cream font-display font-black text-lg shadow-warm group-hover:rotate-6 transition-transform">{s.n}</div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-1">{s.title}</h3>
                      <p className="text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
            <div className="text-primary font-hand text-2xl mb-2">Feast Your Eyes</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">Straight from<br /><span className="italic text-primary">our kitchen.</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
            {gallery.map((g, i) => (
              <button
                key={i}
                data-reveal
                onClick={() => setLightbox(g.src)}
                className={`group relative overflow-hidden rounded-2xl shadow-lift ${g.span}`}
              >
                <img src={g.src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 rounded-full glass-dark px-3 py-1 text-cream text-xs opacity-0 group-hover:opacity-100 transition-opacity">View</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CAFE EXPERIENCE */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-primary font-hand text-2xl mb-2" data-reveal>The Cafe</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-6" data-reveal>A space to linger.</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-lg" data-reveal>
              Industrial iron, warm timber, glowing lanterns and cushioned booths — an atmosphere designed for long conversations, birthday laughs, and lazy Sunday brunches with the people you love.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md" data-reveal>
              {[["120+", "Seats"], ["6", "Private Booths"], ["Kid", "Friendly"], ["Free", "Wi-Fi"]].map(([a, b]) => (
                <div key={b} className="rounded-2xl bg-card border border-border p-5 shadow-lift">
                  <div className="font-display text-2xl font-black text-primary">{a}</div>
                  <div className="text-sm text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4" data-reveal>
            <img src={interior1} alt="Cafe interior" className="rounded-3xl object-cover w-full aspect-[3/4] shadow-lift" />
            <img src={interior2} alt="Diners" className="rounded-3xl object-cover w-full aspect-[3/4] shadow-lift mt-10" />
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="offers" className="py-24 sm:py-32 bg-fire text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mb-16" data-reveal>
            <div className="font-hand text-2xl mb-2 text-cheese">Save More, Eat More</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">Special offers,<br />running now.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((o) => (
              <div key={o.title} data-reveal className="tilt-card rounded-3xl bg-cream text-charcoal p-7 shadow-lift relative overflow-hidden border-2 border-cream">
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-fire opacity-10" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{o.tag}</div>
                <div className="font-display text-3xl font-black text-primary my-3">{o.price}</div>
                <h3 className="font-display text-xl font-bold mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground">{o.d}</p>
                <div className="mt-5 pt-5 border-t border-dashed border-border text-xs uppercase tracking-widest text-primary font-bold">Claim in-store →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16" data-reveal>
            <div>
              <div className="text-primary font-hand text-2xl mb-2">Loved by Jaipur</div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">4.6 on Google,<br />and still climbing.</h2>
            </div>
            <div className="flex items-center gap-3 rounded-full glass px-5 py-3 shadow-lift">
              <span className="text-2xl">★★★★★</span>
              <div className="text-sm"><span className="font-bold">2,400+</span> reviews</div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <blockquote key={r.name} data-reveal className="tilt-card rounded-3xl bg-card p-7 border border-border shadow-lift">
                <div className="text-cheese text-xl mb-3">{"★".repeat(r.rating)}</div>
                <p className="text-foreground/90 leading-relaxed mb-6">"{r.text}"</p>
                <footer className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-fire text-cream font-display font-black">{r.name.charAt(0)}</div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.tag}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 sm:py-32 bg-charcoal text-cream relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div data-reveal>
            <div className="relative rounded-[2rem] overflow-hidden shadow-lift">
              <img src={exteriorNight} alt="Pizza World Jaipur exterior at night" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
          </div>
          <div>
            <div className="text-cheese font-hand text-2xl mb-2" data-reveal>Our Story</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-6" data-reveal>Built on dough,<br /><span className="text-gradient-fire">powered by heart.</span></h2>
            <p className="text-lg text-cream/80 mb-4" data-reveal>
              Pizza World opened its doors in Malviya Nagar with one simple belief — a great pizza should never be rationed. What started as a small cafe became Jaipur's favorite unlimited destination for families, friends, and every celebration worth remembering.
            </p>
            <p className="text-cream/70 mb-8" data-reveal>
              We source flour daily, blend our own sauces, and fire every pizza in a real wood oven. The Italian tradition, served with a warm Indian welcome.
            </p>
            <div className="grid grid-cols-3 gap-4" data-reveal>
              {[["Daily", "Fresh Dough"], ["100%", "Real Cheese"], ["7", "Days a Week"]].map(([a, b]) => (
                <div key={b} className="rounded-2xl glass-dark p-4">
                  <div className="font-display text-2xl font-black text-cheese">{a}</div>
                  <div className="text-xs uppercase tracking-widest text-cream/60 mt-1">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / LOCATION */}
      <section id="contact" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
            <div className="text-primary font-hand text-2xl mb-2">Still Hungry?</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black">Reserve your table.<br /><span className="italic text-primary">We'll save the slice.</span></h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4" data-reveal>
              {[
                { i: "📍", t: "Visit", d: "Malviya Nagar, Jaipur, Rajasthan 302017" },
                { i: "📞", t: "Call", d: "+91 01414012111", href: "tel:01414012111" },
                { i: "💬", t: "WhatsApp", d: "Chat with us instantly", href: "https://wa.me/xxxxxx" },
                { i: "🕐", t: "Open", d: "Every day · 11:00 AM – 11:00 PM" },
              ].map((c) => (
                <a key={c.t} href={c.href || "#"} className="flex gap-5 rounded-2xl bg-card border border-border p-5 shadow-lift hover:border-primary transition-colors group">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-fire text-cream text-2xl shadow-warm group-hover:scale-110 transition-transform">{c.i}</div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="font-display text-lg font-bold truncate">{c.d}</div>
                  </div>
                </a>
              ))}
              <a href="https://www.swiggy.com/restaurants/jaipur/malviya-nagar/pizza-world-787530/dineout" className="block text-center rounded-2xl bg-fire text-cream px-6 py-5 font-display text-xl font-bold shadow-warm hover:scale-[1.02] transition-transform">
                Reserve Table Now →
              </a>
            </div>

            <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lift border border-border h-[500px]" data-reveal>
              <iframe
                title="Pizza World Location"
                src="https://www.google.com/maps?q=Malviya+Nagar+Jaipur&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-cream/80 pt-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-fire text-cream shadow-warm text-xl">🍕</div>
                <div>
                  <div className="font-display text-2xl font-black text-cream">Pizza World</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-cream/50">The Unlimited Italian Food Factory</div>
                </div>
              </div>
              <p className="max-w-md text-cream/70">Jaipur's favorite unlimited pizza cafe. Wood-fired, family-run, always hungry to serve you more.</p>
              <div className="mt-6 flex gap-3">
                {["Instagram", "Facebook", "Google", "Zomato"].map((s) => (
                  <a key={s} href="#" className="rounded-full glass-dark px-4 py-2 text-xs font-semibold hover:bg-cream/10 transition-colors">{s}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-cream/50 mb-4">Explore</div>
              <ul className="space-y-2">
                {nav.map(([label, href]) => (
                  <li key={href}><a href={href} className="hover:text-primary transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-cream/50 mb-4">Newsletter</div>
              <p className="text-sm text-cream/70 mb-3">Get monthly offers straight to your inbox.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex rounded-full glass-dark p-1">
                <input type="email" placeholder="Your email" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-cream/40" />
                <button className="rounded-full bg-fire text-cream px-4 py-2 text-sm font-semibold">Join</button>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t border-cream/10 flex flex-wrap gap-3 justify-between text-xs text-cream/50">
            <div>© {new Date().getFullYear()} Pizza World Jaipur. All rights reserved.</div>
            <div>Made with 🍕 in Jaipur</div>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md grid place-items-center p-4 animate-rise">
          <button className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full glass-dark text-cream text-xl">✕</button>
          <img src={lightbox} alt="" className="max-w-full max-h-full rounded-2xl shadow-lift" />
        </div>
      )}
      {/* DEVELOPER CTA */}
      <section id="developer" className="py-24 sm:py-32 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-fire opacity-10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="text-cheese font-hand text-2xl mb-2" data-reveal>Loved this website?</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-6" data-reveal>
            Get one just like it<br />
            <span className="text-gradient-fire">for your business.</span>
          </h2>
          <p className="text-cream/70 max-w-xl mx-auto mb-10" data-reveal>
            This site was designed & built by <span className="text-cream font-semibold">Ankit Kumar Gurjar</span>.
            If you're a business owner looking for a fast, modern, conversion-ready website —
            reach out and let's build yours.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto" data-reveal>
            <a
            
              href="tel:9352134907"
              className="flex flex-col items-center gap-2 rounded-2xl glass-dark p-5 hover:bg-cream/10 transition-colors group"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-fire text-cream text-xl shadow-warm group-hover:scale-110 transition-transform">📞</div>
              <div className="text-xs uppercase tracking-widest text-cream/50">Call / WhatsApp</div>
              <div className="font-display font-bold text-sm">9352134907</div>
            </a>

            <a
              href="https://ankitgurjar.netlify.app/#freelance"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-2xl glass-dark p-5 hover:bg-cream/10 transition-colors group"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-fire text-cream text-xl shadow-warm group-hover:scale-110 transition-transform">🌐</div>
              <div className="text-xs uppercase tracking-widest text-cream/50">Portfolio</div>
              <div className="font-display font-bold text-sm">View Work</div>
            </a>

            <a
              href="https://github.com/ankitdoi-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-2xl glass-dark p-5 hover:bg-cream/10 transition-colors group"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-fire text-cream text-xl shadow-warm group-hover:scale-110 transition-transform">💻</div>
              <div className="text-xs uppercase tracking-widest text-cream/50">GitHub</div>
              <div className="font-display font-bold text-sm">ankitdoi-coder</div>
            </a>

            <a
              href="https://www.linkedin.com/in/ankit-kumar-gurjar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-2xl glass-dark p-5 hover:bg-cream/10 transition-colors group"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-fire text-cream text-xl shadow-warm group-hover:scale-110 transition-transform">🔗</div>
              <div className="text-xs uppercase tracking-widest text-cream/50">LinkedIn</div>
              <div className="font-display font-bold text-sm">Connect</div>
            </a>
          </div>

          <a
            href="tel:9352134907"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-fire text-cream px-8 py-4 font-display text-lg font-bold shadow-warm hover:scale-105 transition-transform"
            data-reveal
          >
            Let's Build Your Website →
          </a>
        </div>
      </section>
    </div>
  );
}
