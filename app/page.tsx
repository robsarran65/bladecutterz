"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

const phone = "(407) 334-7247";
const phoneLink = "tel:+14073347247";

const services = [
  ["Mowing", "Lawn Care & Maintenance", "Mowing, edging, trimming, blowing, lawn cleanup, and dependable recurring maintenance."],
  ["Shrub", "Shrub & Hedge Care", "Careful trimming, shaping, pruning, cleanup, and landscape bed maintenance."],
  ["Palm", "Tree Trimming", "Routine trimming for smaller trees, palms, branches, and overgrowth to improve appearance and plant health."],
  ["Water", "Irrigation Services", "Sprinkler inspections, adjustments, minor repairs, head replacement, and watering optimization."],
  ["Mulch", "Mulching", "Fresh mulch installation for flower beds, trees, shrubs, and landscaped areas."],
  ["Cleanup", "Landscape Cleanup", "Leaf and debris removal, seasonal cleanup, overgrowth removal, and bed restoration."],
  ["Tropical", "Palm & Tropical Plant Care", "Thoughtful maintenance and trimming for Florida palms and tropical landscaping."],
  ["Care", "Landscape Maintenance", "Ongoing care for lawns, shrubs, trees, flower beds, mulch, and exterior landscaped areas."],
];

const portfolio = [
  ["portfolio-mowed-lawn.webp", "Freshly Mowed Lawn", "Crisp mowing patterns and clean driveway edges"],
  ["portfolio-palms.webp", "Palm Tree Landscaping", "Layered palms and tropical planting"],
  ["portfolio-mulch-beds.webp", "Fresh Mulch Beds", "Rich mulch with a clean, defined border"],
  ["portfolio-hedges.webp", "Trimmed Hedges", "Balanced shaping for a polished entrance"],
  ["portfolio-edging.webp", "Clean Lawn Edging", "Precise borders along walks and beds"],
  ["portfolio-front-yard.webp", "Front Yard Curb Appeal", "A welcoming, professionally maintained lawn"],
  ["portfolio-backyard.webp", "Backyard Maintenance", "A tidy green space ready to enjoy"],
  ["portfolio-irrigation.webp", "Irrigation Optimization", "Efficient sprinkler coverage for healthy turf"],
  ["portfolio-tropical.webp", "Tropical Landscaping", "Colorful Florida friendly plant layers"],
  ["portfolio-before-after.webp", "Lawn Transformation", "A refreshed property with clearer definition"],
  ["portfolio-seasonal-cleanup.webp", "Seasonal Cleanup", "Overgrowth cleared and beds restored"],
  ["portfolio-small-commercial.webp", "Property Maintenance", "A clean, professional first impression"],
];

const testimonials = [
  ["Marcus T.", "Orlando", "The lawn is always cut on schedule, and the edging makes the whole property look sharper."],
  ["Danielle R.", "Lake Nona", "Communication is clear, the crew is professional, and they leave everything clean when they finish."],
  ["James L.", "Winter Springs 32708", "Our shrubs had gotten out of control. The cleanup made an immediate difference in our curb appeal."],
  ["Priya S.", "Orlando 32832", "Reliable recurring service and careful work around our flower beds. Exactly what we needed."],
  ["Tanya B.", "Lake Nona 32832", "They found a sprinkler head that was missing half the lawn and corrected the coverage quickly."],
  ["Eric M.", "Winter Springs 32708", "The fresh mulch and clean edging completely refreshed the front of our home."],
];

function Brand() {
  return <span className="brand"><Image unoptimized src="/images/bladecutterz-logo.png" alt="" width={72} height={72}/><span><strong>BladeCutterz</strong><small>INC. · LAWN & LANDSCAPE</small></span></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return <>
    <a className="skip" href="#main">Skip to main content</a>
    <div className="topbar"><span>Serving Orlando, Lake Nona, Winter Springs & nearby communities</span><a href={phoneLink}>Call {phone}</a></div>
    <header>
      <a href="#home" aria-label="BladeCutterz home"><Brand/></a>
      <button className="menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i/><i/><i/></button>
      <nav className={menuOpen ? "open" : ""}>
        {["Home","Services","About","Testimonials","Portfolio","Contact"].map(x => <a key={x} href={"#"+x.toLowerCase()} onClick={() => setMenuOpen(false)}>{x}</a>)}
        <a className="navCta" href={phoneLink}>Call {phone}</a>
      </nav>
    </header>

    <main id="main">
      <section className="hero" id="home">
        <div className="heroImage"/>
        <div className="shade"/>
        <div className="container heroContent">
          <p className="eyebrow pale">Serving ZIP codes 32832, 32708 & nearby areas</p>
          <h1>Your Lawn.<br/><em>Our Precision.</em></h1>
          <h2 className="heroSeoHeading">Orlando Lawn Care & Landscaping</h2>
          <p className="heroText">Reliable lawn care and landscaping for Orlando, Lake Nona, Winter Springs, and surrounding communities.</p>
          <div className="buttons"><a className="button green" href="#contact">Get a Free Estimate <b>→</b></a><a className="button outline" href={phoneLink}>Call {phone}</a></div>
          <div className="heroTrust"><span>✓ Free estimates</span><span>✓ Reliable scheduling</span><span>✓ Local Florida expertise</span></div>
        </div>
      </section>

      <section className="trust"><div className="container trustGrid">
        {[["Reliable","Scheduled service"],["Precise","Clean edging & trimming"],["Local","Florida lawn knowledge"],["Dependable","Pride in every property"]].map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}
      </div></section>

      <section className="section" id="services"><div className="container">
        <div className="heading split"><div><p className="eyebrow">What we do</p><h2>Complete care for your<br/><em>outdoor space.</em></h2></div><p>From weekly lawn maintenance to seasonal cleanups, we provide the dependable care your property needs to look its best all year.</p></div>
        <div className="serviceGrid">{services.map(([icon,title,text],i) => <article className="service" key={title}><span className="number">{String(i+1).padStart(2,"0")}</span><span className="roundIcon">{icon.slice(0,1)}</span><h3>{title}</h3><p>{text}</p><a href="#contact">Request this service →</a></article>)}</div>
        <div className="inlineCta"><div><p>Not sure what your property needs?</p><h3>We’ll help you build the right service plan.</h3></div><a className="button tan" href={phoneLink}>Request a Free Estimate — {phone}</a></div>
      </div></section>

      <section className="section about" id="about"><div className="container aboutGrid">
        <div className="aboutPhoto"><Image unoptimized src="/images/about-couple-v2.webp" width={1122} height={1402} alt="Blonde couple in their 30s caring for landscaping at a Central Florida home"/><div className="badge"><strong>Local care</strong><span>Built for Florida properties</span></div></div>
        <div className="aboutCopy"><p className="eyebrow">About BladeCutterz</p><h2>We care for your property<br/><em>like it’s our own.</em></h2><p className="lead">BladeCutterz Inc. was built around a simple idea: provide dependable lawn and landscaping services with attention to detail and pride in every property we maintain.</p><p>We understand Florida lawns, tropical landscaping, fast growing vegetation, irrigation needs, and the year round maintenance required to keep a property looking great.</p><div className="values">{[["01","Show up reliably","Consistent service you can count on."],["02","Notice the details","Clean lines and a polished finish."],["03","Respect your property","Professional care from start to cleanup."]].map(([n,a,b]) => <div key={n}><b>{n}</b><span><strong>{a}</strong><small>{b}</small></span></div>)}</div><a className="textLink" href="#contact">Get to know us with a free estimate →</a></div>
      </div></section>

      <section className="section portfolio" id="portfolio"><div className="container">
        <div className="heading centered"><p className="eyebrow">Landscape design inspiration</p><h2>See what your property<br/><em>could become.</em></h2><p>AI generated examples of the results we can help you achieve. These are inspiration images, not completed BladeCutterz customer projects.</p></div>
        <div className="portfolioGrid">{portfolio.map(([src,title,caption],i) => <figure className={"work work"+i} key={src}><Image unoptimized src={"/images/"+src} width={1536} height={1024} alt={title+", an AI generated Central Florida landscape inspiration example"}/><figcaption><span><strong>{title}</strong><small>{caption}</small></span></figcaption></figure>)}</div>
      </div></section>

      <section className="section reviews" id="testimonials"><div className="container">
        <div className="heading split light"><div><p className="eyebrow pale">Starter testimonials</p><h2>Service that earns<br/><em>your trust.</em></h2></div><p>These sample reviews show how verified customer feedback can appear here once collected.</p></div>
        <div className="reviewGrid">{testimonials.map(([name,place,quote]) => <article className="review" key={name}><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“{quote}”</blockquote><div className="reviewer"><span>{name[0]}</span><div><strong>{name}</strong><small>{place} · Sample review</small></div></div></article>)}</div>
      </div></section>

      <section className="section contact" id="contact"><div className="container contactGrid">
        <div className="contactCopy"><p className="eyebrow">Let’s get started</p><h2>A better looking lawn<br/>starts with <em>one call.</em></h2><p>Tell us what your property needs. We’ll follow up to discuss your service and arrange a free estimate.</p><a className="phoneCard" href={phoneLink}><span>Call BladeCutterz today</span><strong>{phone}</strong><small>Tap to call now →</small></a><div className="area"><b>⌖</b><span><strong>Our service area</strong><small>ZIP codes 32832 and 32708, including Orlando, Lake Nona, Moss Park, Narcoossee, Winter Springs, Tuscawilla, Oviedo, Casselberry, and nearby communities.</small></span></div></div>
        <form className="form" onSubmit={submit}><div className="formTitle"><span>Free estimate request</span><h3>Tell us about your property</h3></div><div className="formGrid">
          <label>Full Name<input required name="name" autoComplete="name" placeholder="Your name"/></label>
          <label>Phone Number<input required name="phone" type="tel" autoComplete="tel" placeholder="(407) 555-0123"/></label>
          <label>Email Address<input required name="email" type="email" autoComplete="email" placeholder="you@example.com"/></label>
          <label>Property Address or ZIP<input required name="location" autoComplete="postal-code" placeholder="Address or ZIP code"/></label>
          <label>Service Needed<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{["Lawn Care","Shrub or Hedge Trimming","Tree Trimming","Irrigation","Mulching","Landscape Cleanup","Landscape Maintenance","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
          <label>Preferred Contact<select required name="contact" defaultValue="Phone call"><option>Phone call</option><option>Text message</option><option>Email</option></select></label>
          <label className="full">Message<textarea name="message" rows={4} placeholder="Tell us about your lawn or landscaping needs"/></label>
        </div><button className="button green submit" type="submit">Get Your Free Lawn Care Estimate →</button>{submitted && <p className="success" role="status">Thanks! This form is ready to connect to your inbox. Please call {phone} for immediate scheduling.</p>}<small className="note">No obligation. Your information stays private.</small></form>
      </div></section>
    </main>

    <footer><div className="container footerGrid"><div><a href="#home"><Brand/></a><p>Dependable lawn care and landscape maintenance for Orlando, Lake Nona, Winter Springs, and nearby communities.</p></div><div><strong>Explore</strong><a href="#home">Home</a><a href="#services">Services</a><a href="#about">About</a><a href="#portfolio">Portfolio</a></div><div><strong>Services</strong><a href="#services">Lawn maintenance</a><a href="#services">Shrub & tree care</a><a href="#services">Irrigation</a><a href="#services">Mulching & cleanup</a></div><div><strong>Contact</strong><a className="footerPhone" href={phoneLink}>{phone}</a><span>32832 · 32708</span><a href="#contact">Request an estimate →</a></div></div><div className="container footerBottom"><span>© {new Date().getFullYear()} BladeCutterz Inc. All rights reserved.</span><span>License and insurance details can be added when verified.</span></div></footer>
    <a className="mobileCall" href={phoneLink}><span>Call for a free estimate</span><strong>{phone}</strong></a>
  </>;
}
