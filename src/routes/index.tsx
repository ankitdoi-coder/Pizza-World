import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroClinic from "@/assets/hero-clinic.jpg";
import laserImg from "@/assets/laser.jpg";
import rctImg from "@/assets/rct.jpg";
import implantImg from "@/assets/implant.jpg";
import smileImg from "@/assets/smile.jpg";
import drAmit from "@/assets/dr-amit.png";
import clinicPoster from "@/assets/clinic-poster.png";
import patientSmileResult from "@/assets/patient-smile-result.jpg";
import xrayFullMouth from "@/assets/xray-full-mouth.jpg";
import clinicTeamEquipment from "@/assets/clinic-team-equipment.jpg";
import implantProcedure1 from "@/assets/implant-procedure-1.jpg";
import implantProcedure2 from "@/assets/implant-procedure-2.jpg";
import implantXray from "@/assets/implant-xray.jpg";
import patientTreatment1 from "@/assets/patient-treatment-1.jpg";
import patientTreatment2 from "@/assets/patient-treatment-2.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { title: "General Dentistry", img: laserImg, desc: "Comprehensive oral care — from consultations to preventive treatments for the whole family." },
  { title: "Root Canal Treatment", img: rctImg, desc: "Single-sitting rotary RCT with digital X-rays. Save your natural tooth painlessly." },
  { title: "Dental Implants", img: implantImg, desc: "Permanent tooth replacement with premium titanium implants — restore your bite and smile." },
  { title: "Teeth Whitening & Cosmetic", img: smileImg, desc: "Brighten your smile with safe, professional whitening and smile-design procedures." },
  { title: "Dental Check-up & Cleaning", img: laserImg, desc: "Routine scaling, polishing and check-ups to keep your gums and teeth in top shape." },
  { title: "Tooth Filling & Restoration", img: rctImg, desc: "Tooth-coloured fillings and restorations that blend seamlessly with your natural teeth." },
];

const patientGallery = [
  { img: patientSmileResult, caption: "Restored smile after cosmetic treatment" },
  { img: patientTreatment1, caption: "Gentle care for every patient, every age" },
  { img: implantProcedure1, caption: "Precision dental implant placement" },
  { img: implantProcedure2, caption: "Implant procedure — close-up view" },
  { img: implantXray, caption: "Implant integration, digital X-ray" },
  { img: xrayFullMouth, caption: "Full-mouth digital diagnostic imaging" },
  { img: patientTreatment2, caption: "Attentive treatment in a calm setting" },
  { img: clinicTeamEquipment, caption: "Modern equipment, experienced hands" },
];

const stats = [
  { n: "15+", l: "Years Practice" },
  { n: "10k+", l: "Happy Smiles" },
  { n: "4.9★", l: "Patient Rating" },
  { n: "100%", l: "Sterile Setup" },
];

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-full gradient-hero text-primary-foreground font-display text-lg">
              <img className="w-9 h-9 rounded-full" src={logo} alt="" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-semibold text-[15px]">Khandelwal Dental</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Clinic · Jaipur</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#doctor" className="hover:text-primary transition">Doctor</a>
            <a href="#gallery" className="hover:text-primary transition">Clinic</a>
            <a href="#happy-customers" className="hover:text-primary transition">Results</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href="tel:8560053611" className="hidden md:inline-flex items-center gap-2 rounded-full gradient-hero text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-card hover:opacity-95 transition">
            Call 85600 53611
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="menu">
            <div className="w-5 h-0.5 bg-foreground mb-1.5" />
            <div className="w-5 h-0.5 bg-foreground mb-1.5" />
            <div className="w-5 h-0.5 bg-foreground" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background px-5 py-4 flex flex-col gap-3 text-sm">
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#doctor" onClick={() => setOpen(false)}>Doctor</a>
            <a href="#gallery" onClick={() => setOpen(false)}>Clinic</a>
            <a href="#happy-customers" onClick={() => setOpen(false)}>Results</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="tel:8560053611" onClick={() => setOpen(false)} className="font-semibold text-primary">📞 85600 53611</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-soft -z-10" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full gradient-hero opacity-20 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Better care · Better smile · Better you
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05]">
              Healthy Teeth,<br />
              <span className="italic text-primary">Beautiful Smile.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Welcome to <b className="text-foreground">Khandelwal Dental Clinic</b> — where Dr. Amit Khandelwal delivers modern, gentle dentistry in the heart of Pratap Nagar, Jaipur.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full gradient-hero text-primary-foreground px-7 py-3.5 font-medium shadow-elegant hover:opacity-95 transition">Book Appointment</a>
              <a href="#services" className="rounded-full border border-border bg-card px-7 py-3.5 font-medium hover:bg-muted transition">Our Services</a>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-3 max-w-md">
              {stats.map((s) => (
                <div key={s.l} className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-primary font-semibold">{s.n}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5] md:aspect-[5/6]">
              <img src={clinicPoster} alt="Khandelwal Dental Clinic — Healthy teeth, beautiful smile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3 max-w-[260px]">
              <div className="w-14 h-14 rounded-full gradient-hero grid place-items-center text-primary-foreground text-xl">🦷</div>
              <div>
                <div className="flex text-gold text-sm">★★★★★</div>
                <p className="text-xs text-muted-foreground leading-snug">"Gentle hands and a spotless clinic. Highly recommend Dr. Amit."</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-card px-4 py-3 hidden md:block">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Your Smile</div>
              <div className="text-sm font-medium">Our Priority</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Our Services</div>
              <h2 className="text-3xl md:text-5xl font-semibold max-w-xl">Quality treatment, <span className="italic">gentle care.</span></h2>
            </div>
            <p className="text-muted-foreground max-w-sm">From routine check-ups to advanced implants — every procedure delivered with precision, hygiene, and a personal touch.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <article key={s.title} className="group relative rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} width={900} height={700} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-muted-foreground">0{i + 1} / Service</div>
                  <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Book now →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section id="doctor" className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
              <img src={drAmit} alt="Dr. Amit Khandelwal, Dental Surgeon" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-card p-5 max-w-[220px]">
              <div className="font-display text-3xl text-primary font-semibold">BDS · MDS</div>
              <div className="text-xs text-muted-foreground mt-1">Dental Surgeon</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Meet the doctor</div>
            <h2 className="text-3xl md:text-5xl font-semibold">Dr. Amit <span className="italic">Khandelwal</span></h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Dr. Amit Khandelwal is a trusted dental surgeon in Jaipur, blending modern technology with a warm, patient-first approach. From painless root canals to smile makeovers, he ensures every visit is comfortable, transparent, and effective.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Certified Dental Surgeon (BDS · MDS)",
                "Expert in Root Canal & Endodontics",
                "Trained in Dental Implants & Cosmetic Dentistry",
                "Committed to a 100% sterile clinical environment",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY / COVER */}
      <section id="gallery" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Visit Us</div>
            <h2 className="text-3xl md:text-5xl font-semibold">Our Clinic, <span className="italic">your comfort.</span></h2>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img src={clinicPoster
              
            } alt="Khandelwal Dental Clinic interior" className="w-full h-[380px] md:h-[560px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 text-primary-foreground max-w-xl">
              <div className="text-xs uppercase tracking-[0.2em] opacity-80">Pratap Nagar · Jaipur</div>
              <h3 className="font-display text-3xl md:text-5xl font-semibold mt-2">Khandelwal Dental Clinic</h3>
              <p className="mt-3 opacity-90">Modern dental chairs, digital imaging, and a calm environment where your comfort comes first.</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[heroClinic, laserImg, rctImg, smileImg].map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img src={img} alt="Clinic" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAPPY CUSTOMERS / PATIENT CARE GALLERY */}
      <section id="happy-customers" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Real Results</div>
            <h2 className="text-3xl md:text-5xl font-semibold">Happy Patients, <span className="italic">real care.</span></h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">A glimpse into the treatments, procedures, and smiles we've had the privilege to work on.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {patientGallery.map((p, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 aspect-square">
                <img
                  src={p.img}
                  alt={p.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-primary-foreground text-xs md:text-sm font-medium leading-snug">{p.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Book a visit</div>
            <h2 className="text-3xl md:text-5xl font-semibold">Need dental care? <span className="italic">We're here to help.</span></h2>
            <p className="mt-4 text-muted-foreground">Walk-in or schedule ahead — our team will guide you every step of the way.</p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-card">
                <div className="w-10 h-10 rounded-full gradient-hero grid place-items-center text-primary-foreground">📍</div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-muted-foreground">Khandelwal Dental Clinic<br />Sheopur Road, Pratap Nagar, Jaipur</div>
                </div>
              </div>
              <a href="tel:8560053611" className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-card hover:shadow-elegant transition">
                <div className="w-10 h-10 rounded-full gradient-hero grid place-items-center text-primary-foreground">📞</div>
                <div>
                  <div className="font-semibold">Mobile</div>
                  <div className="text-muted-foreground">+91 85600 53611</div>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-card">
                <div className="w-10 h-10 rounded-full gradient-hero grid place-items-center text-primary-foreground">🕒</div>
                <div>
                  <div className="font-semibold">Timings</div>
                  <div className="text-muted-foreground">Mon – Sat · 10:00 AM to 8:30 PM<br />Sunday · By appointment</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll call you shortly."); }} className="bg-card rounded-3xl p-6 md:p-8 shadow-elegant">
            <h3 className="font-display text-2xl font-semibold">Request appointment</h3>
            <div className="mt-6 space-y-4">
              <input required placeholder="Your name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input required type="tel" placeholder="Phone number" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Choose service</option>
                <option>General Dentistry</option>
                <option>Root Canal Treatment</option>
                <option>Dental Implants</option>
                <option>Teeth Whitening & Cosmetic</option>
                <option>Check-up & Cleaning</option>
                <option>Tooth Filling & Restoration</option>
              </select>
              <textarea rows={4} placeholder="Tell us briefly about your concern" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <button className="w-full rounded-xl gradient-hero text-primary-foreground py-3.5 font-medium shadow-card hover:opacity-95 transition">
                Confirm Appointment
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Khandelwal Dental Clinic · Dr. Amit Khandelwal</div>
          <div>Better care, better smile, better you.</div>
        </div>

        {/* DEVELOPER CREDIT */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-6 pt-6 border-t border-border/60">
          <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground text-center">
            <div>
              Designed &amp; Developed by{" "}
              <span className="font-semibold text-foreground">Ankit Kumar Gurjar</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <a href="tel:9352134907" className="hover:text-primary transition">
                📞 9352134907
              </a>
              <a href="mailto:ankitdoi82@gmail.com" className="hover:text-primary transition">
                ✉️ ankitdoi82@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/ankit-kumar-gurjar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                🔗 LinkedIn
              </a>
              <a
                href="https://ankitgurjar.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                🌐 Portfolio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}