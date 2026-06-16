'use client';

import React, { useState, useEffect } from 'react';
import {
  newsData,
  initiativesData,
  rktewtCards,
  gzrrcCards,
  foundersData,
  facilitiesData,
  rescueTalesData,
  resourcesData,
  faqData
} from './data';

export default function AshvkathaApp() {
  const [activeSection, setActiveSection] = useState<'home' | 'resources' | 'about' | 'contact'>('home');

  // Background Slider state (only active on home tab, hero section)
  const backgroundImages = ['/tiger.png', '/elephant.png', '/leopard.png'];
  const [bgIndex, setBgIndex] = useState(0);
  const [isBgPlaying, setIsBgPlaying] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(false);

  // Initiatives accordion
  const [activeInitiative, setActiveInitiative] = useState('init-1');

  // Care Tabs state
  const [activeCareTab, setActiveCareTab] = useState('rktewt');

  // Tales of Rescue state
  const [activeTaleIndex, setActiveTaleIndex] = useState(0);

  // Resource Filters
  const [resourceFilter, setResourceFilter] = useState('All');
  const [resourceSearch, setResourceSearch] = useState('');
  const [resourceSort, setResourceSort] = useState('new');

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    requestType: '',
    name: '',
    email: '',
    message: '',
    agree: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; text: string } | null>(null);

  // Auto transition background slideshow (only runs when on home)
  useEffect(() => {
    if (!isBgPlaying || activeSection !== 'home') return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isBgPlaying, activeSection]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ requestType: '', name: '', email: '', message: '', agree: false });
      setFormSubmitted(false);
    }, 4000);
  };

  const filteredResources = resourcesData.filter((item) => {
    const matchesFilter = resourceFilter === 'All' || item.category === resourceFilter;
    const matchesSearch = item.title.toLowerCase().includes(resourceSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    if (resourceSort === 'new') {
      return a.id.localeCompare(b.id);
    } else {
      return b.id.localeCompare(a.id);
    }
  });

  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Floating Navigation Pill Header */}
      <header className="nav-header-container">
        <nav className="nav-pill">
          <button
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => {
              setActiveSection('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </button>
          <button
            className={`nav-link ${activeSection === 'resources' ? 'active' : ''}`}
            onClick={() => {
              setActiveSection('resources');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Resources
          </button>
          
          <div className="nav-logo" onClick={() => {
            setActiveSection('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <span className="nav-logo-main">ASHVKATHA</span>
            <span className="nav-logo-sub">every thing matters</span>
          </div>

          <button
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => {
              setActiveSection('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            About
          </button>
          <button
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => {
              setActiveSection('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Contact Us
          </button>
        </nav>
      </header>

      {/* Page Contents Wrapper */}
      <div className="main-wrapper">
        
        {/* Render View based on Active Tab State */}
        {activeSection === 'home' && (
          <div>
            {/* HERO SECTION containing the background carousel */}
            <div className="hero-wrapper">
              <div className="bg-carousel">
                {backgroundImages.map((img, idx) => (
                  <div
                    key={img}
                    className={`bg-slide ${idx === bgIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </div>
              <div className="bg-overlay" />
              <div className="hero-content">
                <h1 className="hero-title">
                  Advancing the Frontier
                </h1>
                <div className="divider" />
                <button 
                  className="btn-primary" 
                  onClick={() => {
                    setActiveSection('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* News & Highlights Section */}
            <section id="news" className="section-container" style={{ minHeight: 'auto', paddingBottom: '100px' }}>
              <div className="section-title-wrap">
                <span className="section-sub">Latest Updates</span>
                <h2 className="title-line">News & Highlights</h2>
                <div className="divider" />
              </div>

              <div className="slider-container">
                <div className="news-grid">
                  {newsData.map((item) => (
                    <div key={item.id} className="news-card glass">
                      <span className="news-date">{item.date}</span>
                      <h3 className="news-title">{item.title}</h3>
                      <div className="divider" style={{ width: '60px', margin: '12px 0' }} />
                      <button
                        className="card-link"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        onClick={() => setModalContent({ title: item.title, text: item.desc })}
                      >
                        Read Story
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Initiatives & Care Tabs */}
            <section id="initiatives" className="section-container" style={{ minHeight: 'auto', paddingBottom: '120px' }}>
              <div className="section-title-wrap">
                <span className="section-sub">Our Pillars</span>
                <h2 className="title-line">Core Initiatives</h2>
                <div className="divider" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', marginBottom: '80px' }}>
                <div className="accordion-wrapper">
                  {initiativesData.map((item) => (
                    <div key={item.id} className="accordion-item">
                      <button
                        className={`accordion-trigger ${activeInitiative === item.id ? 'active' : ''}`}
                        onClick={() => setActiveInitiative(item.id)}
                      >
                        <span>{item.title}</span>
                        <svg
                          className="accordion-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{
                            transform: activeInitiative === item.id ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.3s'
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`accordion-content ${activeInitiative === item.id ? 'open' : ''}`}>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RKTEWT & GZRRC Switcher */}
              <div className="tabs-header">
                <button
                  className={`tab-btn ${activeCareTab === 'rktewt' ? 'active' : ''}`}
                  onClick={() => setActiveCareTab('rktewt')}
                >
                  Elephant Welfare (RKTEWT)
                </button>
                <button
                  className={`tab-btn ${activeCareTab === 'gzrrc' ? 'active' : ''}`}
                  onClick={() => setActiveCareTab('gzrrc')}
                >
                  Rescue Centre (GZRRC)
                </button>
              </div>

              <div style={{ minHeight: '350px' }}>
                {activeCareTab === 'rktewt' ? (
                  <div>
                    <h3 className="title-line" style={{ fontSize: '1.6rem' }}>Elephant Care Centre</h3>
                    <div className="divider" />
                    <p style={{ color: 'var(--text-gray)', marginBottom: '32px', maxWidth: '800px', lineHeight: '1.6' }}>
                      Across 998 acres of protected land, the Radhe Krishna Temple Elephant Welfare Trust (RKTEWT) shelters more than 260 elephants rescued from logging, circuses, and city streets.
                    </p>
                    <div className="care-grid">
                      {rktewtCards.map((card) => (
                        <div key={card.id} className="care-card glass">
                          <h4 className="care-card-title">{card.title}</h4>
                          <div className="divider" style={{ width: '40px' }} />
                          <button
                            className="card-link"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                            onClick={() => setModalContent({ title: card.title, text: card.desc })}
                          >
                            Read more &rarr;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="title-line" style={{ fontSize: '1.6rem' }}>Wild Animals Rescue</h3>
                    <div className="divider" />
                    <p style={{ color: 'var(--text-gray)', marginBottom: '32px', maxWidth: '800px', lineHeight: '1.6' }}>
                      The Greens Zoological, Rescue and Rehabilitation Centre (GZRRC) provides a safe haven for rescued, injured, and orphaned wildlife in a 3,500+ acre habitat.
                    </p>
                    <div className="care-grid">
                      {gzrrcCards.map((card) => (
                        <div key={card.id} className="care-card glass">
                          <h4 className="care-card-title">{card.title}</h4>
                          <div className="divider" style={{ width: '40px' }} />
                          <button
                            className="card-link"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                            onClick={() => setModalContent({ title: card.title, text: card.desc })}
                          >
                            Read more &rarr;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* Section 4: About */}
        {activeSection === 'about' && (
          <section id="about" className="section-container" style={{ minHeight: '100vh' }}>
            <div className="section-title-wrap">
              <span className="section-sub">Where Healing Begins</span>
              <h2 className="title-line">Founding Vision</h2>
              <div className="divider" />
            </div>

            {/* Founders panel */}
            <div className="founders-grid">
              {foundersData.map((founder) => (
                <div key={founder.id} className="founder-card glass">
                  <span className="founder-role">{founder.role}</span>
                  <h3 className="founder-name">{founder.name}</h3>
                  <div className="divider" style={{ width: '50px' }} />
                  <p className="founder-quote">"{founder.quote}"</p>
                </div>
              ))}
            </div>

            {/* Statistics grid */}
            <div className="stat-grid">
              <div className="stat-card glass">
                <div className="stat-value">3,500+</div>
                <div className="stat-label">Acres of Safe Haven</div>
              </div>
              <div className="stat-card glass">
                <div className="stat-value">2,000+</div>
                <div className="stat-label">Species Protected</div>
              </div>
              <div className="stat-card glass">
                <div className="stat-value">40+</div>
                <div className="stat-label">Veterinary Clinics</div>
              </div>
            </div>

            {/* Nurturing Care Facilities */}
            <div className="section-title-wrap" style={{ marginTop: '60px' }}>
              <span className="section-sub">Expert Facilities</span>
              <h2 className="title-line">Nurture and Care</h2>
              <div className="divider" />
            </div>
            <div className="facilities-grid">
              {facilitiesData.map((fac) => (
                <div key={fac.id} className="facility-card glass">
                  <h4 className="facility-title">{fac.title}</h4>
                  <div className="divider" style={{ width: '40px', margin: '8px 0' }} />
                  <button
                    className="card-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    onClick={() => setModalContent({ title: fac.title, text: fac.desc })}
                  >
                    View details
                  </button>
                </div>
              ))}
            </div>

            {/* Tales of Rescue */}
            <div className="section-title-wrap" style={{ marginTop: '80px' }}>
              <span className="section-sub">Hardships to Healing</span>
              <h2 className="title-line">Tales of Rescue</h2>
              <div className="divider" />
            </div>

            <div className="slider-container">
              <div className="slider-wrapper">
                {rescueTalesData.map((tale, idx) => (
                  <div key={tale.id} className="slider-slide slider-slide-third" style={{ display: idx === activeTaleIndex || idx === (activeTaleIndex + 1) % rescueTalesData.length || idx === (activeTaleIndex + 2) % rescueTalesData.length ? 'block' : 'none' }}>
                    <div className="care-card glass" style={{ height: '100%' }}>
                      <div>
                        <span className="news-date">Rescue Story</span>
                        <h4 className="care-card-title">{tale.title}</h4>
                        <h5 style={{ fontSize: '0.85rem', color: 'var(--text-gray)', margin: '8px 0 16px 0', fontStyle: 'italic' }}>
                          {tale.subtitle}
                        </h5>
                      </div>
                      <div>
                        <div className="divider" style={{ width: '50px' }} />
                        <button
                          className="card-link"
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                          onClick={() => setModalContent({ title: `${tale.title} Rescue`, text: tale.desc })}
                        >
                          Read Story &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="slider-controls">
                <button
                  className="slider-arrow"
                  onClick={() => setActiveTaleIndex((prev) => (prev - 1 + rescueTalesData.length) % rescueTalesData.length)}
                >
                  &larr;
                </button>
                <span className="slider-pagination">
                  {activeTaleIndex + 1} / {rescueTalesData.length}
                </span>
                <button
                  className="slider-arrow"
                  onClick={() => setActiveTaleIndex((prev) => (prev + 1) % rescueTalesData.length)}
                >
                  &rarr;
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Section 5: Resources */}
        {activeSection === 'resources' && (
          <section id="resources" className="section-container" style={{ minHeight: '100vh' }}>
            <div className="section-title-wrap">
              <span className="section-sub">Discoveries & Research</span>
              <h2 className="title-line">Insights & Evolution</h2>
              <div className="divider" />
            </div>

            <div style={{ marginBottom: '40px' }}>
              <div className="filters-container">
                {['All', 'Media', 'Research Papers', 'General Articles', 'Legal', 'Annual Report'].map((cat) => (
                  <button
                    key={cat}
                    className={`filter-btn ${resourceFilter === cat ? 'active' : ''}`}
                    onClick={() => setResourceFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="form-input"
                  style={{ flex: '1', minWidth: '250px' }}
                  value={resourceSearch}
                  onChange={(e) => setResourceSearch(e.target.value)}
                />
                <select
                  className="form-select"
                  value={resourceSort}
                  onChange={(e) => setResourceSort(e.target.value)}
                >
                  <option value="new">Newest First</option>
                  <option value="old">Oldest First</option>
                </select>
              </div>
            </div>

            {/* Resources list */}
            <div className="resources-grid">
              {sortedResources.map((item) => (
                <div key={item.id} className="resource-card glass">
                  <div>
                    <span className="resource-cat">{item.category}</span>
                    <h4 className="resource-title">{item.title}</h4>
                  </div>
                  <div>
                    <div className="divider" style={{ width: '100%', margin: '15px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button
                        className="download-btn"
                        onClick={() => setModalContent({ title: item.title, text: item.desc })}
                      >
                        Read abstract
                      </button>
                      <a
                        href="#"
                        className="download-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Downloading PDF for: ${item.title}`);
                        }}
                      >
                        PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 6: Contact & FAQ */}
        {activeSection === 'contact' && (
          <section id="contact" className="section-container" style={{ minHeight: '100vh' }}>
            <div className="section-title-wrap">
              <span className="section-sub">Get in Touch</span>
              <h2 className="title-line">Connect with Us</h2>
              <div className="divider" />
            </div>

            <div className="contact-container">
              <div className="contact-info">
                <div className="contact-info-block">
                  <h4>General Inquiries</h4>
                  <p>+91 90160 12345</p>
                  <a href="mailto:contact@ashvkatha.in">contact@ashvkatha.in</a>
                </div>
                <div className="contact-info-block">
                  <h4>Media Contacts</h4>
                  <p>+91 70160 12345</p>
                  <a href="mailto:media@ashvkatha.in">media@ashvkatha.in</a>
                </div>
                <div className="contact-info-block">
                  <h4>Careers</h4>
                  <a href="mailto:careers@ashvkatha.in">careers@ashvkatha.in</a>
                </div>
              </div>

              {/* Form */}
              <div className="glass" style={{ padding: '40px 32px' }}>
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', color: 'var(--accent-green)', padding: '24px 0' }}>
                    <h3 className="title-line" style={{ fontSize: '1.5rem' }}>Thank You</h3>
                    <p>Your message has been sent successfully. We will connect with you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="contact-form">
                    <div className="form-group form-full">
                      <label className="form-label">Type of Request</label>
                      <select
                        className="form-select"
                        required
                        value={formData.requestType}
                        onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                      >
                        <option value="">Select type of request</option>
                        <option value="partner">Investors and partners</option>
                        <option value="gov">Government and developing organizations</option>
                        <option value="research">Researchers and scientists</option>
                        <option value="volunteer">Volunteers and activists</option>
                        <option value="donor">Donors and patrons</option>
                        <option value="media">Media representatives</option>
                        <option value="student">Students</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-input"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-input"
                        required
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group form-full">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-textarea"
                        placeholder="Write your query..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <div className="form-group form-full" style={{ marginTop: '8px' }}>
                      <label className="form-checkbox-label">
                        <input
                          type="checkbox"
                          required
                          checked={formData.agree}
                          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        />
                        By submitting this form, I agree to the collection and use of my personal data as per Privacy Policy for marketing purposes.
                      </label>
                    </div>

                    <div className="form-full" style={{ marginTop: '16px' }}>
                      <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* FAQs */}
            <div style={{ marginTop: '100px' }}>
              <div className="section-title-wrap">
                <span className="section-sub">Common Queries</span>
                <h2 className="title-line">Frequently Asked Questions</h2>
                <div className="divider" />
              </div>

              <div className="accordion-wrapper" style={{ margin: '0 auto', maxWidth: '850px' }}>
                {faqData.map((faq, idx) => (
                  <div key={idx} className="accordion-item">
                    <button
                      className={`accordion-trigger ${openFaq === idx ? 'active' : ''}`}
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        className="accordion-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{
                          transform: openFaq === idx ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.3s'
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`accordion-content ${openFaq === idx ? 'open' : ''}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-logo-desc">
              <div className="footer-logo">
                ashvkatha<span>.</span>
              </div>
              <p className="footer-desc">
                Advancing the frontier of animal rescue, advanced treatment, and science-led wildlife conservation.
              </p>
            </div>
            
            <div className="footer-partners">
              <div className="partner-logo">
                Reliance Foundation<span>.</span>
              </div>
              <div className="partner-logo">
                We<span>Care</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>2026 Copyright &copy; All Rights Reserved. Supported by Reliance Foundation.</p>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms & Conditions</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Audio controls */}
      {activeSection === 'home' && (
        <div className="media-controls">
          <button
            className="control-btn"
            title={isBgPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            onClick={() => setIsBgPlaying(!isBgPlaying)}
          >
            {isBgPlaying ? (
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            className="control-btn"
            title={isSoundOn ? 'Sound On' : 'Sound Off'}
            onClick={() => {
              setIsSoundOn(!isSoundOn);
              alert(`Mock Ambient Sound: ${!isSoundOn ? 'Enabled (playing tranquil nature audio)' : 'Disabled'}`);
            }}
          >
            {isSoundOn ? (
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
            ) : (
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Abstract Modal */}
      {modalContent && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px'
          }}
          onClick={() => setModalContent(null)}
        >
          <div
            className="glass"
            style={{
              maxWidth: '600px',
              width: '100%',
              padding: '40px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'var(--text-gray)',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
              onClick={() => setModalContent(null)}
            >
              &times;
            </button>
            <h3 className="title-line" style={{ fontSize: '1.4rem', paddingRight: '20px' }}>
              {modalContent.title}
            </h3>
            <div className="divider" style={{ width: '80px' }} />
            <p style={{ color: 'var(--text-gray)', lineHeight: '1.7', fontSize: '0.98rem' }}>
              {modalContent.text}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
