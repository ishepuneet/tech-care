import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Clock3, Cpu, Laptop, ShieldCheck, Wrench, Camera, Monitor, Headphones, HardDrive, MapPin, Menu, Phone, Play, Quote, Star, Video, Wifi, Zap } from "lucide-react";
import CameraScene from "./components/CameraScene.jsx";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .65 } } };
const services = [
  { icon: Camera, num: "01", title: "CCTV & Security", text: "Smart surveillance, IP cameras, DVR/NVR setup and reliable installation.", tag: "SECURITY SYSTEMS" },
  { icon: Laptop, num: "02", title: "Laptop Repair", text: "Diagnostics, screen and keyboard replacement, upgrades and software fixes.", tag: "REPAIR & UPGRADE" },
  { icon: Monitor, num: "03", title: "Computer Repair", text: "Desktop troubleshooting, custom builds, OS installation and performance tune-ups.", tag: "DESKTOP CARE" },
  { icon: Headphones, num: "04", title: "Tech Accessories", text: "Keyboards, mice, cables, adapters, storage, networking and everyday essentials.", tag: "GEAR & ACCESSORIES" },
];
const products = [
  { name: "Smart CCTV Camera", type: "SECURITY", price: "Ask for a quote", image: "photo-1557324232-b8917d3c3dcb", icon: Camera },
  { name: "Laptop & PC Upgrades", type: "PERFORMANCE", price: "SSD • RAM • Parts", image: "photo-1588872657578-7efd1f1555ed", icon: Cpu },
  { name: "Everyday Tech Gear", type: "ACCESSORIES", price: "Quality essentials", image: "photo-1583394838336-acd977736f90", icon: Headphones },
];
const process = [
  { icon: Phone, title: "Tell us the issue", text: "Share the device, symptoms or the space you want to secure." },
  { icon: Wrench, title: "Get a clear plan", text: "We inspect, explain your options and confirm the estimate first." },
  { icon: Check, title: "Back to better", text: "We test the solution and walk you through the result." },
];

function SectionIntro({ eyebrow, title, copy, light = false }) {
  return <div className={`section-intro ${light ? "text-white" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}
function App() {
  return <div className="min-h-screen overflow-hidden bg-white text-ink">
    <div className="topline"><div className="site-container flex items-center justify-between"><span>Technology, made dependable.</span><div className="flex gap-5"><span><Clock3 size={13} /> Mon–Sat · 7:30 AM–7 PM</span><span><MapPin size={13} /> Your local tech partner</span></div></div></div>
    {/* <header className="site-container navbar">
      <a href="#home" className="brand"><span className="brand-mark"><ShieldCheck size={23} /></span><span>secure<span className="brand-accent">tech</span><small>SECURITY · REPAIR · ACCESSORIES</small></span></a>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#home">Home</a>
        <a href="#services">Services <ChevronDown size={13} /></a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#process">How it works</a>
      </nav>
      <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
      <button aria-label="Open menu" className="md:hidden rounded-full border p-2"><Menu size={20} /></button>
    </header> */}

    <main>
      <section id="home" className="hero">
        <div className="hero-grid"></div><div className="site-container hero-inner">
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={fadeUp}>
            <div className="pill"><span className="live-dot" /> YOUR TRUSTED TECHNOLOGY PARTNER</div>
            <h1>Smarter security.<br /><span>Smoother technology.</span><br />Peace of mind.</h1>
            <p className="hero-description">From keeping your space protected to getting your laptop back in action, we make technology feel simple, secure and dependable.</p>
            <div className="hero-actions"><a className="btn-primary" href="#services">Explore our services <ArrowRight size={17} /></a><a className="btn-text" href="#about"><span className="play"><Play size={13} fill="currentColor" /></span> Meet SecureTech</a></div>
            <div className="hero-stats"><div><strong>360°</strong><span>Tech support</span></div><div><strong>1-to-1</strong><span>Personal service</span></div><div><strong>100%</strong><span>Clear estimates</span></div></div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
            <div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div>
            <div className="camera-frame"><CameraScene /></div>
            <div className="float-card card-top"><span className="float-icon"><ShieldCheck size={18} /></span><div><b>Protection, perfected</b><small>Smart security solutions</small></div></div>
            <div className="float-card card-bottom"><span className="signal-bars"><i /><i /><i /><i /></span><div><b>System online</b><small>Designed around you</small></div></div>
            <div className="hero-note">PRECISION <span>×</span> RELIABILITY</div>
          </motion.div>
        </div>
        <div className="hero-bottom site-container"><span>BUILT FOR HOME. READY FOR BUSINESS.</span><ArrowDownRight size={19} /><span className="hero-bottom-line"></span><span>SCROLL TO EXPLORE</span></div>
      </section>

      <section className="trust-strip"><div className="site-container trust-grid"><div className="trust-lead"><span className="eyebrow">ONE PLACE. ALL YOUR TECH.</span><h3>Good tech deserves<br />great care.</h3></div>{[{ icon: ShieldCheck, title: "Security first", text: "Solutions built for peace of mind" }, { icon: Zap, title: "Practical fixes", text: "Clear advice, no confusing jargon" }, { icon: Wrench, title: "Care that lasts", text: "Support from setup to service" }, { icon: Cpu, title: "The right gear", text: "Useful accessories, chosen well" }].map((x, i) => <div className="trust-item" key={x.title}><x.icon size={22} /><b>{x.title}</b><span>{x.text}</span></div>)}</div></section>

      <section id="about" className="section site-container about-section">
        <div className="about-art"><div className="about-image" style={{ backgroundImage: "linear-gradient(180deg,rgba(5,28,38,.05),rgba(5,28,38,.45)),url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85)" }}></div><div className="experience-card"><span>THE SECURETECH PROMISE</span><strong>Technology<br />without the<br /><em>headache.</em></strong><ArrowUpRight size={28} /></div><div className="tiny-stamp"><ShieldCheck size={20} /><span>CARE<br />YOU CAN<br />COUNT ON</span></div></div>
        <div className="about-copy"><span className="eyebrow">A BETTER KIND OF TECH SUPPORT</span><h2>Real solutions.<br /><span>Human support.</span></h2><p>Technology should work for you, not the other way around. We bring security installation, computer and laptop repairs, and essential accessories together with honest guidance and thoughtful service.</p><p>Whether you are protecting a shop, fixing a slow laptop or finding the right adapter, we help you make a confident choice.</p><div className="check-list"><span><Check size={16} /> Clear diagnosis and estimates</span><span><Check size={16} /> Practical recommendations</span><span><Check size={16} /> Home and business solutions</span></div><a className="btn-dark" href="#contact">Get to know us <ArrowRight size={16} /></a></div>
      </section>

      <section id="services" className="section services-section"><div className="site-container"><SectionIntro eyebrow="WHAT WE DO" title={<>Complete tech care.<br /><span>One trusted team.</span></>} copy="From a single repair to a complete security setup, find the support you need." /><div className="service-grid">{services.map((s, i) => <motion.a href="#contact" className={`service-card ${i === 0 ? "featured" : ""}`} key={s.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: .18 }} variants={fadeUp} transition={{ delay: i * .08 }}><div className="service-top"><span className="service-icon"><s.icon size={23} /></span><span className="service-num">{s.num}</span></div><span className="service-tag">{s.tag}</span><h3>{s.title}</h3><p>{s.text}</p><span className="service-link">Explore service <ArrowUpRight size={16} /></span><div className="service-watermark"><s.icon size={100} /></div></motion.a>)}</div></div></section>

      <section className="feature-band"><div className="feature-text"><span className="eyebrow">SECURITY THAT FITS YOUR WORLD</span><h2>See more.<br />Worry less.</h2><p>Upgrade your peace of mind with thoughtfully planned CCTV and smart security. We help you choose camera coverage, recording options and a setup that fits your property.</p><div className="feature-points"><span><Check size={15} /> Camera placement advice</span><span><Check size={15} /> DVR / NVR configuration</span><span><Check size={15} /> Remote viewing setup</span></div><a className="btn-light" href="#contact">Plan your security <ArrowRight size={16} /></a></div><div className="feature-product"><div className="feature-glow"></div><CameraScene /><div className="feature-chip"><Video size={16} /> SMART SURVEILLANCE <span>•</span> 24/7 READY</div></div><div className="feature-side-label">SECURITY SYSTEMS / 001</div></section>

      <section id="products" className="section site-container products-section"><div className="products-heading"><SectionIntro eyebrow="THE RIGHT TOOLS FOR THE JOB" title={<>Technology that<br /><span>works harder.</span></>} copy="Explore popular categories. Ask us about compatibility, availability and the best fit for your needs." /><a className="btn-outline" href="#contact">Ask about products <ArrowUpRight size={16} /></a></div><div className="product-grid">{products.map((p, i) => <motion.a href="#contact" className="product-card" key={p.name} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * .1 }}><div className="product-photo" style={{ backgroundImage: `linear-gradient(0deg,rgba(4,24,32,.3),transparent 55%),url(https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=900&q=85)` }}><span>{p.type}</span><span className="product-arrow"><ArrowUpRight size={18} /></span></div><div className="product-info"><div><h3>{p.name}</h3><p>{p.price}</p></div><p className="product-icon"><p.icon size={21} /></p></div></motion.a>)}</div><p className="product-disclaimer">Product photos are illustrative. Contact us for current stock, exact models and pricing.</p></section>

      <section id="process" className="process-section"><div className="site-container"><SectionIntro eyebrow="STRAIGHTFORWARD FROM START TO FINISH" title={<>Support without<br /><span>the runaround.</span></>} copy="A simple, transparent process designed to get you moving again." /><div className="process-grid">{process.map((p, i) => <div className="process-step" key={p.title}><div className="process-icon"><p.icon size={22} /><span>0{i + 1}</span></div>{i < 2 && <div className="process-connector"><ArrowRight size={18} /></div>}<h3>{p.title}</h3><p>{p.text}</p></div>)}</div></div></section>

      <section className="testimonial-section"><div className="site-container testimonial-inner"><div className="testimonial-image" style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(3,26,36,.45)),url(https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=85)" }}><span className="image-label"><Wifi size={15} /> CONNECTED & PROTECTED</span></div><div className="testimonial-copy"><span className="eyebrow">THE WAY SERVICE SHOULD FEEL</span><div className="stars"><Star /><Star /><Star /><Star /><Star /></div><blockquote>“They explained the options clearly, helped me understand what I actually needed, and made the whole process feel easy.”</blockquote><div className="quote-author"><span className="author-avatar">C</span><div><b>A happy customer</b><small>Local home & business support</small></div><Quote className="quote-mark" size={30} /></div><p className="testimonial-note">A sample testimonial layout — replace with a real customer review when available.</p></div></div></section>

      <section className="cta-band"><div className="cta-backdrop"></div><div className="site-container cta-inner"><span className="eyebrow">YOUR TECH, IN GOOD HANDS</span><h2>Let's get your tech<br /><span>working beautifully.</span></h2><p>Need a repair, a security upgrade or the right accessory? Start with a conversation.</p><a className="btn-primary" href="#contact">Tell us what you need <ArrowRight size={17} /></a><div className="cta-orb"><ShieldCheck size={76} /></div></div></section>

      <section className="section site-container contact-section" id="contact"><div className="contact-copy"><span className="eyebrow">LET'S SOLVE IT TOGETHER</span><h2>What can we<br /><span>help you with?</span></h2><p>Tell us a little about your device, repair or security project. We’ll help you figure out the next step.</p><div className="contact-details"><span><Phone size={17} /> Add your phone / WhatsApp number</span><span><MapPin size={17} /> Add your shop address or service area</span><span><Clock3 size={17} /> Mon–Sat · business hours</span></div></div><form className="contact-form" onSubmit={e => { e.preventDefault(); const data = new FormData(e.currentTarget); const msg = `Hi SecureTech!%0AName: ${data.get("name")}%0AService: ${data.get("service")}%0ADetails: ${data.get("details")}`; window.open(`https://wa.me/?text=${msg}`, "_blank"); }}><div className="form-title"><span>01 / NEW ENQUIRY</span><h3>Start a conversation</h3></div><label>Your name<input name="name" required placeholder="How should we call you?" /></label><label>What do you need?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>CCTV & security installation</option><option>Laptop repair</option><option>Computer / desktop repair</option><option>Accessories & components</option><option>Other / not sure yet</option></select></label><label>Tell us a little more<textarea name="details" rows="3" placeholder="Device model, issue, or project details..." /></label><button className="btn-primary form-submit" type="submit">Continue on WhatsApp <ArrowRight size={17} /></button><small className="form-note">Connect your business WhatsApp number before publishing.</small></form></section>
    </main>
    <footer className="footer"><div className="site-container"><div className="footer-main"><a href="#home" className="brand footer-brand"><span className="brand-mark"><ShieldCheck size={23} /></span><span>secure<span className="brand-accent">tech</span><small>SECURITY · REPAIR · ACCESSORIES</small></span></a><p>Dependable technology support for safer spaces and smoother days.</p><div className="footer-links"><a href="#services">Services</a><a href="#products">Products</a><a href="#about">About</a><a href="#contact">Contact</a></div><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SecureTech. Customize this template for your business.</span><span>BUILT AROUND TRUST <ShieldCheck size={13} /></span></div></div></footer>
  </div>;
}
export default App;