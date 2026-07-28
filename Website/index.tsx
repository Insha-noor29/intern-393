import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Leaf, Sprout, TreePine, Flower2, Home, Trees, Droplets, Scissors,
  Sparkles, Wrench, Phone, Mail, MapPin, Star, ChevronDown, ArrowRight,
  ArrowUp, MessageCircle, Menu, X, Check, Sun, Shield, Clock, Award, Users,
  ClipboardList, Calendar, Palette, HardHat, HeartHandshake, Facebook,
  Instagram, Twitter,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";
import g9 from "@/assets/g9.jpg";
import g10 from "@/assets/g10.jpg";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: Home, title: "Home Garden Design", desc: "Bespoke garden designs tailored to your home and lifestyle.", img: g1 },
  { icon: Trees, title: "Landscape Design", desc: "Full-scale landscape architecture with lasting curb appeal.", img: g6 },
  { icon: Sprout, title: "Lawn Installation", desc: "Premium turf and lawns that thrive year-round.", img: g6 },
  { icon: Flower2, title: "Indoor Plant Decoration", desc: "Elegant indoor greenery that transforms interiors.", img: g4 },
  { icon: Sun, title: "Kitchen Garden Setup", desc: "Organic edible gardens for herbs, greens and vegetables.", img: g3 },
  { icon: TreePine, title: "Vertical Gardens", desc: "Living walls that maximise space and beauty.", img: g2 },
  { icon: Scissors, title: "Garden Maintenance", desc: "Regular pruning, weeding and seasonal care.", img: g10 },
  { icon: Leaf, title: "Plant Care Consultation", desc: "Expert advice on plant selection and care routines.", img: g4 },
  { icon: Palette, title: "Seasonal Flower Planting", desc: "Colourful blooms curated for every season.", img: g5 },
  { icon: Droplets, title: "Irrigation Systems", desc: "Smart, water-efficient irrigation solutions.", img: g9 },
  { icon: Wrench, title: "Garden Renovation", desc: "Refresh and restore neglected outdoor spaces.", img: g7 },
  { icon: Sparkles, title: "Custom Packages", desc: "Fully customised garden packages for any budget.", img: g8 },
];

const FEATURES = [
  { icon: Award, title: "Experienced Experts", desc: "5+ years of hands-on horticultural expertise." },
  { icon: Leaf, title: "Eco-Friendly", desc: "Organic methods and sustainable materials." },
  { icon: HeartHandshake, title: "Affordable Pricing", desc: "Transparent pricing without compromise on quality." },
  { icon: Palette, title: "Customised Designs", desc: "Every garden is unique — just like your home." },
  { icon: Sprout, title: "Premium Plants", desc: "Only the healthiest nursery-grade plants." },
  { icon: Clock, title: "Timely Service", desc: "We show up on time, every time." },
  { icon: Wrench, title: "Modern Equipment", desc: "Latest tools for precision and safety." },
  { icon: Shield, title: "Satisfaction Guaranteed", desc: "We're not done until you love it." },
];

const PROCESS = [
  { icon: MessageCircle, title: "Free Consultation", desc: "Share your vision with our designers." },
  { icon: MapPin, title: "Site Visit", desc: "We survey and assess your space in person." },
  { icon: ClipboardList, title: "Garden Planning", desc: "A detailed plan crafted around your goals." },
  { icon: Check, title: "Design Approval", desc: "Refine every detail until it's perfect." },
  { icon: HardHat, title: "Installation", desc: "Our team brings the design to life." },
  { icon: Calendar, title: "Maintenance", desc: "Ongoing care keeps your garden thriving." },
];

const GALLERY = [
  { src: g1, span: "row-span-2" },
  { src: g5, span: "" },
  { src: g4, span: "" },
  { src: g2, span: "row-span-2" },
  { src: g3, span: "" },
  { src: g7, span: "row-span-2" },
  { src: g6, span: "" },
  { src: g8, span: "" },
  { src: g10, span: "row-span-2" },
  { src: g9, span: "" },
];

const STATS = [
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 700, suffix: "+", label: "Gardens Completed" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

const TESTIMONIALS = [
  { img: t1, name: "Priya Sharma", role: "Home Owner", quote: "Verdant turned our dull backyard into a stunning retreat. The team is professional, creative and genuinely cares." },
  { img: t2, name: "Rahul Mehta", role: "Villa Resident", quote: "From design to maintenance, every detail was perfect. Our garden is now the highlight of the neighbourhood." },
  { img: t3, name: "Anaya Kapoor", role: "Apartment Owner", quote: "Their vertical garden completely transformed my balcony. I get compliments every single day!" },
];

const PRICING = [
  { name: "Basic", price: "₹9,999", tag: "Small Gardens", features: ["Consultation", "Basic garden design", "Plant recommendations", "Setup guidance"], highlight: false },
  { name: "Standard", price: "₹24,999", tag: "Medium Gardens", features: ["Custom design", "Full installation", "Premium plants", "3-month maintenance", "Irrigation basics"], highlight: false },
  { name: "Premium", price: "₹59,999", tag: "Complete Landscape", features: ["Complete landscape design", "Premium imported plants", "Smart irrigation", "12-month maintenance", "Seasonal replanting", "Dedicated garden manager"], highlight: true },
];

const FAQS = [
  { q: "How long does a typical garden installation take?", a: "Small gardens are usually completed within 3–5 days. Medium and large landscapes take 1–3 weeks, depending on scope and site conditions." },
  { q: "Do you provide ongoing maintenance?", a: "Yes. We offer weekly, fortnightly and monthly maintenance plans, plus one-time seasonal clean-ups." },
  { q: "Can you create kitchen gardens for apartments?", a: "Absolutely. We design compact edible gardens, balcony planters and vertical setups perfect for apartment living." },
  { q: "Do you install irrigation systems?", a: "Yes — from simple drip lines to fully automated smart irrigation with app control." },
  { q: "What areas do you serve?", a: "We currently serve all metro areas and surrounding suburbs. Contact us to confirm coverage in your locality." },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) setStarted(true);
    }, { threshold: 0.3 });
    io.observe(ref);
    return () => io.disconnect();
  }, [ref, started]);
  useEffect(() => {
    if (!started) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);
  return <div ref={setRef} className="text-5xl md:text-6xl font-bold text-gradient">{n}{suffix}</div>;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [visible, setVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    io.observe(ref);
    return () => io.disconnect();
  }, [ref]);
  return (
    <div
      ref={setRef}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function FloatingLeaves() {
  const leaves = Array.from({ length: 8 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {leaves.map((_, i) => (
        <Leaf
          key={i}
          className="absolute text-white/30 animate-float"
          style={{
            left: `${(i * 13 + 7) % 95}%`,
            top: `${(i * 17 + 5) % 90}%`,
            width: `${24 + (i % 3) * 12}px`,
            height: `${24 + (i % 3) * 12}px`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${7 + (i % 4)}s`,
          }}
        />
      ))}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-xl">
          <span className="grid place-items-center h-10 w-10 rounded-full gradient-hero shadow-soft">
            <Leaf className="h-5 w-5 text-white" />
          </span>
          <span className={scrolled ? "text-foreground" : "text-white drop-shadow"}>Verdant</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full gradient-hero text-white px-5 py-2.5 text-sm font-semibold shadow-elegant hover:brightness-110 transition"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
        <button
          className={`lg:hidden p-2 rounded-full ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-white/40">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 font-medium">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full gradient-hero text-white px-5 py-3 text-center font-semibold">
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Luxurious modern home garden"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-primary/60" />
      <FloatingLeaves />
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl text-white">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass text-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" /> Premium Home Gardening
            </span>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Transform Your Home Into a{" "}
              <span className="italic bg-gradient-to-r from-[oklch(0.9_0.15_130)] to-[oklch(0.85_0.15_85)] bg-clip-text text-transparent">
                Beautiful Green Paradise
              </span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
              We design, create, and maintain beautiful home gardens that bring nature closer to your everyday life.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-4 font-semibold shadow-elegant hover:scale-[1.03] transition">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/50 glass text-white px-7 py-4 font-semibold hover:bg-white/20 transition">
                Explore Services
              </a>
            </div>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { v: "500+", l: "Gardens" },
                { v: "98%", l: "Satisfaction" },
                { v: "5+", l: "Years" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-white/80">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <Reveal className="max-w-3xl mx-auto text-center mb-14">
      <span className="inline-flex items-center gap-2 rounded-full bg-secondary text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
        <Leaf className="h-3.5 w-3.5" /> {eyebrow}
      </span>
      <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-secondary/40 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-3xl gradient-hero opacity-20 blur-2xl" />
            <img
              src={about}
              alt="Gardener planting flowers"
              loading="lazy"
              width={1280}
              height={960}
              className="relative rounded-[2rem] shadow-elegant object-cover w-full aspect-[5/6]"
            />
            <div className="absolute -bottom-8 -right-6 md:-right-10 glass rounded-2xl p-5 shadow-elegant max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-12 w-12 rounded-2xl gradient-hero">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">700+</div>
                  <div className="text-xs text-muted-foreground">Gardens created</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <Leaf className="h-3.5 w-3.5" /> Who We Are
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
            Crafting <span className="text-gradient">living spaces</span> that breathe with life.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We specialize in creating beautiful outdoor and indoor spaces that improve lifestyles and bring nature closer to every home. Our team combines creativity, quality plants, and expert care to design gardens that remain beautiful throughout the year.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Leaf, t: "Certified horticulturists" },
              { icon: Shield, t: "100% satisfaction promise" },
              { icon: Sprout, t: "Sustainable practices" },
              { icon: Users, t: "Dedicated garden managers" },
            ].map((b) => (
              <div key={b.t} className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-secondary text-primary">
                  <b.icon className="h-5 w-5" />
                </div>
                <span className="font-medium">{b.t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Our Services"
          title={<>Everything your <span className="text-gradient">garden</span> needs</>}
          sub="A complete suite of design, installation and care services for indoor and outdoor spaces."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group h-full bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 grid place-items-center h-12 w-12 rounded-2xl gradient-hero shadow-elegant">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-primary font-semibold text-sm group/link">
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Why Choose Us"
          title={<>Trusted by homeowners who <span className="text-gradient">love their gardens</span></>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="h-full rounded-3xl bg-card p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 border border-border/50">
                <div className="grid place-items-center h-14 w-14 rounded-2xl gradient-hero shadow-soft">
                  <f.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 md:py-32 gradient-soft relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Our Process"
          title={<>Simple, transparent, <span className="text-gradient">from seed to bloom</span></>}
        />
        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-primary via-[color:var(--leaf)] to-[color:var(--gold)]" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="relative text-center">
                <div className="mx-auto grid place-items-center h-28 w-28 rounded-full gradient-hero shadow-elegant relative">
                  <p.icon className="h-10 w-10 text-white" />
                  <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-[color:var(--gold)] text-white font-bold grid place-items-center text-sm shadow-soft">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Gallery"
          title={<>Gardens we've <span className="text-gradient">brought to life</span></>}
          sub="A curated look at the transformations our team has crafted."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {GALLERY.map((g, i) => (
            <Reveal key={i} delay={i * 40} className={`${g.span} group relative overflow-hidden rounded-3xl shadow-soft`}>
              <img
                src={g.src}
                alt="Garden project"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Leaf className="h-4 w-4" /> Verdant Project
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <FloatingLeaves />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-3xl p-8">
              <Counter target={s.value} suffix={s.suffix} />
              <div className="mt-2 text-sm md:text-base font-semibold text-foreground/80 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Testimonials"
          title={<>Loved by <span className="text-gradient">every homeowner</span></>}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="h-full bg-card rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500">
                <div className="flex text-[color:var(--gold)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-14 w-14 rounded-full object-cover ring-2 ring-secondary" />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-24 md:py-32 gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Pricing"
          title={<>Packages that grow <span className="text-gradient">with you</span></>}
          sub="Transparent pricing for every scale — from balcony gardens to full landscapes."
        />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRICING.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div className={`relative h-full rounded-[2rem] p-8 flex flex-col ${
                p.highlight
                  ? "gradient-hero text-white shadow-elegant scale-[1.03]"
                  : "bg-card shadow-soft"
              }`}>
                {p.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--gold)] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-soft">
                    Most Popular
                  </span>
                )}
                <div>
                  <div className={`text-sm font-semibold uppercase tracking-widest ${p.highlight ? "text-white/80" : "text-primary"}`}>
                    {p.tag}
                  </div>
                  <div className="mt-1 text-3xl font-bold">{p.name}</div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold">{p.price}</span>
                    <span className={p.highlight ? "text-white/80" : "text-muted-foreground"}>+ onwards</span>
                  </div>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`mt-0.5 grid place-items-center h-6 w-6 rounded-full shrink-0 ${
                        p.highlight ? "bg-white/20 text-white" : "bg-secondary text-primary"
                      }`}>
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition ${
                    p.highlight
                      ? "bg-white text-primary hover:brightness-95"
                      : "gradient-hero text-white hover:brightness-110"
                  }`}
                >
                  Choose {p.name} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="FAQs"
          title={<>Answers to <span className="text-gradient">common questions</span></>}
        />
        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-lg">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Contact"
          title={<>Let's grow <span className="text-gradient">something beautiful</span></>}
          sub="Tell us about your space — our team will get back within 24 hours."
        />
        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch soon."); }}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-soft space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold">Full Name</label>
                  <input required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-sm font-semibold">Phone</label>
                  <input required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold">Email</label>
                <input required type="email" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="text-sm font-semibold">Service Interested In</label>
                <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">
                  {SERVICES.slice(0, 8).map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold">Tell us about your space</label>
                <textarea rows={4} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Garden size, location, ideas..." />
              </div>
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-hero text-white px-8 py-4 font-semibold shadow-elegant hover:brightness-110 transition">
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
          <Reveal delay={200} className="lg:col-span-2">
            <div className="h-full flex flex-col gap-5">
              {[
                { icon: Phone, title: "Call us", val: "+91 98765 43210" },
                { icon: Mail, title: "Email us", val: "hello@verdantgardens.com" },
                { icon: MapPin, title: "Visit us", val: "12 Green Avenue, Bengaluru 560001" },
              ].map((c) => (
                <div key={c.title} className="bg-card rounded-2xl p-5 shadow-soft flex items-center gap-4">
                  <div className="grid place-items-center h-12 w-12 rounded-2xl gradient-hero shrink-0">
                    <c.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">{c.title}</div>
                    <div className="font-semibold truncate">{c.val}</div>
                  </div>
                </div>
              ))}
              <div className="relative rounded-2xl overflow-hidden shadow-soft flex-1 min-h-56 bg-secondary">
                <div className="absolute inset-0 grid place-items-center text-primary/60">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 mx-auto" />
                    <div className="mt-2 font-semibold">Google Maps</div>
                    <div className="text-sm">12 Green Avenue, Bengaluru</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.05_155)] text-white/80 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 text-white text-xl font-bold">
            <span className="grid place-items-center h-10 w-10 rounded-full gradient-hero">
              <Leaf className="h-5 w-5 text-white" />
            </span>
            Verdant
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Premium home gardening services — design, installation, and lifelong care for outdoor and indoor spaces.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((I, i) => (
              <a key={i} href="#" className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => <li key={n.href}><a className="hover:text-white transition" href={n.href}>{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => <li key={s.title}><a className="hover:text-white transition" href="#services">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Newsletter</h4>
          <p className="text-sm">Gardening tips and seasonal offers, straight to your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
            <input placeholder="Your email" className="flex-1 rounded-full bg-white/10 border border-white/20 px-4 py-2.5 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]" />
            <button className="rounded-full gradient-hero px-4 py-2.5 text-sm font-semibold text-white">Join</button>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <div>© {new Date().getFullYear()} Verdant Gardens. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-40 grid place-items-center h-12 w-12 rounded-full gradient-hero text-white shadow-elegant hover:scale-110 transition animate-fade-up"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Gallery />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
