'use client';

import React, { useState, useEffect, useRef } from 'react';
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

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Background Video states (only active on home tab, hero section)
  const [isBgPlaying, setIsBgPlaying] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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
    phone: '',
    message: '',
    agree: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [modalContent, setModalContent] = useState<{ title: string; text: string } | null>(null);

  // Auto control background video playback for seamless dual-player
  useEffect(() => {
    const vid1 = videoRef1.current;
    const vid2 = videoRef2.current;

    if (isBgPlaying && activeSection === 'home') {
      if (currentVideoIndex === 0) {
        if (vid1) {
          vid1.play().catch((err) => console.log('Video 1 playback error:', err));
        }
        if (vid2) vid2.pause();
      } else {
        if (vid2) {
          vid2.play().catch((err) => console.log('Video 2 playback error:', err));
        }
        if (vid1) vid1.pause();
      }
    } else {
      if (vid1) vid1.pause();
      if (vid2) vid2.pause();
    }
  }, [isBgPlaying, activeSection, currentVideoIndex]);

  // Handle ambient background audio (Vantara meditation music)
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isSoundOn) {
        audio.play().catch((err) => {
          console.log('Ambient audio playback error:', err);
        });
      } else {
        audio.pause();
      }
    }
  }, [isSoundOn]);

  // Scroll reveal animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-group');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [activeSection]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ requestType: '', name: '', email: '', phone: '', message: '', agree: false });
      setUploadedFiles([]);
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
            {/* HERO SECTION containing the background video */}
             <div className="hero-wrapper">
              <video
                ref={videoRef1}
                src="https://cms.vantara.in/uploads/JUNE_2026_HOMEPAGE_HORIZONTAL_e6ea29466f.mp4"
                className={`bg-video ${currentVideoIndex === 0 ? 'video-active' : 'video-inactive'}`}
                muted
                playsInline
                autoPlay
                onEnded={() => {
                  setCurrentVideoIndex(1);
                  if (videoRef2.current) {
                    videoRef2.current.currentTime = 0;
                  }
                }}
              />
              <video
                ref={videoRef2}
                src="https://cms.vantara.in/uploads/JUNE_2026_ABOUT_US_HORIZONTAL_e00b18db3e.mp4"
                className={`bg-video ${currentVideoIndex === 1 ? 'video-active' : 'video-inactive'}`}
                muted
                playsInline
                onEnded={() => {
                  setCurrentVideoIndex(0);
                  if (videoRef1.current) {
                    videoRef1.current.currentTime = 0;
                  }
                }}
              />
              <audio
                ref={audioRef}
                src="https://cms.vantara.in/uploads/meditation_music_without_nature_sound_256142_4fbaeb3540.mp3"
                loop
              />
              <div className="bg-overlay" />
              <div className="hero-content">
                <h1 className="hero-title">
                  <span className="hero-line hero-line-1">{"Advancing the Frontier of"}</span>
                  <span className="hero-line hero-line-2">{"Rescue, Rehabilitation, and"}</span>
                  <span className="hero-line hero-line-3">{"Conservation"}</span>
                </h1>
                <button 
                  className="hero-btn" 
                  onClick={() => {
                    setActiveSection('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {"Learn More"}
                </button>
              </div>
            </div>

            {/* News & Highlights Section */}
            <section id="news" className="section-container reveal-on-scroll" style={{ minHeight: 'auto', paddingBottom: '100px' }}>
              <div className="section-title-wrap">
                <span className="section-sub">Latest Updates</span>
                <h2 className="title-line">News & Highlights</h2>
                <div className="divider" />
              </div>

              <div className="slider-container">
                <div className="news-grid reveal-group">
                  {newsData.map((item) => (
                    <div key={item.id} className="news-card glass reveal-item">
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
            <section id="initiatives" className="section-container reveal-on-scroll" style={{ minHeight: 'auto', paddingBottom: '120px' }}>
              <div className="section-title-wrap">
                <span className="section-sub">Our Pillars</span>
                <h2 className="title-line">Core Initiatives</h2>
                <div className="divider" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', marginBottom: '80px' }} className="reveal-on-scroll">
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
              <div className="tabs-header reveal-on-scroll">
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
                    <div className="care-grid reveal-group">
                      {rktewtCards.map((card) => (
                        <div key={card.id} className="care-card glass reveal-item">
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
                    <div className="care-grid reveal-group">
                      {gzrrcCards.map((card) => (
                        <div key={card.id} className="care-card glass reveal-item">
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
          <section id="about" className="section-container reveal-on-scroll" style={{ minHeight: '100vh' }}>
            <div className="section-title-wrap">
              <span className="section-sub">Where Healing Begins</span>
              <h2 className="title-line">Founding Vision</h2>
              <div className="divider" />
            </div>

            {/* Founders panel */}
            <div className="founders-grid reveal-group">
              {foundersData.map((founder) => (
                <div key={founder.id} className="founder-card glass reveal-item">
                  <span className="founder-role">{founder.role}</span>
                  <h3 className="founder-name">{founder.name}</h3>
                  <div className="divider" style={{ width: '50px' }} />
                  <p className="founder-quote">{"\""}{founder.quote}{"\""}</p>
                </div>
              ))}
            </div>

            {/* Statistics grid */}
            <div className="stat-grid reveal-group">
              <div className="stat-card glass reveal-item">
                <div className="stat-value">3,500+</div>
                <div className="stat-label">Acres of Safe Haven</div>
              </div>
              <div className="stat-card glass reveal-item">
                <div className="stat-value">2,000+</div>
                <div className="stat-label">Species Protected</div>
              </div>
              <div className="stat-card glass reveal-item">
                <div className="stat-value">40+</div>
                <div className="stat-label">Veterinary Clinics</div>
              </div>
            </div>

            {/* Nurturing Care Facilities */}
            <div className="section-title-wrap reveal-on-scroll" style={{ marginTop: '60px' }}>
              <span className="section-sub">Expert Facilities</span>
              <h2 className="title-line">Nurture and Care</h2>
              <div className="divider" />
            </div>
            <div className="facilities-grid reveal-group">
              {facilitiesData.map((fac) => (
                <div key={fac.id} className="facility-card glass reveal-item">
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
            <div className="section-title-wrap reveal-on-scroll" style={{ marginTop: '80px' }}>
              <span className="section-sub">Hardships to Healing</span>
              <h2 className="title-line">Tales of Rescue</h2>
              <div className="divider" />
            </div>

            <div className="slider-container reveal-on-scroll">
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
          <section id="resources" className="section-container reveal-on-scroll" style={{ minHeight: '100vh' }}>
            <div className="section-title-wrap">
              <span className="section-sub">Discoveries & Research</span>
              <h2 className="title-line">Insights & Evolution</h2>
              <div className="divider" />
            </div>

            <div style={{ marginBottom: '40px' }} className="reveal-on-scroll">
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
            <div className="resources-grid reveal-group">
              {sortedResources.map((item) => (
                <div key={item.id} className="resource-card glass reveal-item">
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
          <section id="contact" className="section-container reveal-on-scroll" style={{ minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span className="section-sub" style={{ fontSize: '0.78rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-gray)', fontWeight: 'bold', display: 'block', marginBottom: '18px' }}>
                {"Contact Us"}
              </span>
              <h2 style={{
                fontFamily: "Georgia, serif",
                fontSize: '2.5rem',
                fontWeight: 'bold',
                lineHeight: '1.35',
                color: 'var(--text-white)',
                maxWidth: '850px',
                margin: '0 auto',
                textAlign: 'center',
                textTransform: 'none'
              }}>
                {"Have a question, idea, or wish"}
                <br />
                {"to help animals in need? Get in"}
                <br />
                {"touch and be part of our mission"}
                <br />
                {"— because every thing matters."}
              </h2>
            </div>

            <div className="contact-container reveal-group">
              <div className="contact-info reveal-item">
                <div className="contact-info-block">
                  <h4>{"For General Queries"}</h4>
                  <a href="mailto:contact@ashvkatha.in">{"contact@ashvkatha.in"}</a>
                  <p style={{ marginTop: '4px', fontWeight: 'bold' }}>{"+91 90002 02222"}</p>
                </div>
                <div className="contact-info-block">
                  <h4>{"For Media"}</h4>
                  <a href="mailto:media@ashvkatha.in">{"media@ashvkatha.in"}</a>
                  <p style={{ marginTop: '4px', fontWeight: 'bold' }}>{"+91 99002 20002"}</p>
                </div>
                <div className="contact-info-block">
                  <h4>{"For Career Opportunities"}</h4>
                  <a href="mailto:careers@ashvkatha.in">{"careers@ashvkatha.in"}</a>
                </div>
              </div>

              {/* Form */}
              <div className="glass reveal-item" style={{ padding: '40px 32px' }}>
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', color: 'var(--accent-green)', padding: '24px 0' }}>
                    <h3 className="title-line" style={{ fontSize: '1.5rem' }}>{"Thank You"}</h3>
                    <p>{"Your message has been sent successfully. We will connect with you soon."}</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="contact-form">
                    <div className="form-group form-full">
                      <label className="form-label">{"Type of Request"}</label>
                      <select
                        className="form-select"
                        required
                        value={formData.requestType}
                        onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                      >
                        <option value="">{"Select type of request"}</option>
                        <option value="partner">{"Investors and partners"}</option>
                        <option value="gov">{"Government and developing organizations"}</option>
                        <option value="research">{"Researchers and scientists"}</option>
                        <option value="volunteer">{"Volunteers and activists"}</option>
                        <option value="donor">{"Donors and patrons"}</option>
                        <option value="media">{"Media representatives"}</option>
                        <option value="student">{"Students"}</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">{"Name"}</label>
                      <input
                        type="text"
                        className="form-input"
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">{"Email"}</label>
                      <input
                        type="email"
                        className="form-input"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group form-full">
                      <label className="form-label">{"Phone (Optional)"}</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="Phone"
                        value={formData.phone || ''}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group form-full">
                      <label className="form-label">{"Message (Optional)"}</label>
                      <textarea
                        className="form-textarea"
                        placeholder="Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <div className="form-group form-full">
                      <label className="form-label">{"Attached files (Optional)"}</label>
                      <div className="file-upload-zone">
                        <input
                          type="file"
                          id="file-upload"
                          multiple
                          accept="image/*,application/pdf"
                          style={{ display: 'none' }}
                          onChange={(e) => {
                            if (e.target.files) {
                              const filesArr = Array.from(e.target.files).slice(0, 5);
                              setUploadedFiles(filesArr.map(f => f.name));
                            }
                          }}
                        />
                        <label htmlFor="file-upload" className="file-upload-label" style={{ cursor: 'pointer' }}>
                          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{ marginBottom: '8px', opacity: 0.7 }}>
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
                          </svg>
                          <span>{"Drag and drop images or PDF files here (Max: 4.45 MB, 5 files total)"}</span>
                          <span className="btn-upload" style={{ display: 'inline-block', marginTop: '12px', padding: '6px 16px', background: 'rgba(28, 18, 12, 0.08)', borderRadius: '15px', fontSize: '0.78rem', fontWeight: 'bold', color: 'var(--text-white)' }}>{"Upload Files"}</span>
                        </label>
                      </div>
                      {uploadedFiles.length > 0 && (
                        <div className="uploaded-files-list" style={{ marginTop: '10px' }}>
                          {uploadedFiles.map((name, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', background: 'rgba(28,18,12,0.04)', padding: '6px 12px', borderRadius: '6px', marginBottom: '4px', color: 'var(--text-white)' }}>
                              <span>{name}</span>
                              <button type="button" onClick={() => setUploadedFiles(prev => prev.filter((_, idx) => idx !== i))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red', fontWeight: 'bold' }}>{"×"}</button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="form-group form-full" style={{ marginTop: '8px' }}>
                      <label className="form-checkbox-label">
                        <input
                          type="checkbox"
                          required
                          checked={formData.agree}
                          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        />
                        {"By submitting this form, I agree to the collection and use of my personal data as per Privacy Policy for marketing purposes, including receiving promotional content and updates on products or services."}
                      </label>
                    </div>

                    <div className="form-full" style={{ marginTop: '16px' }}>
                      <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                        {"Send Message"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* FAQs */}
            <div style={{ marginTop: '100px' }} className="reveal-on-scroll">
              <div className="section-title-wrap">
                <span className="section-sub">{"Common Queries"}</span>
                <h2 className="title-line">{"Frequently Asked Questions"}</h2>
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
            {/* Column 1: Info, Socials, stacked contact info */}
            <div className="footer-info-col">
              <h3 className="footer-title">{"United for Protection"}</h3>
              <p className="footer-subtitle">{"An initiative to rescue, protect, and conserve wildlife by Surya Foundation"}</p>
              
              <div className="footer-socials">
                <a href="#" className="social-icon-btn">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon-btn">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon-btn">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.454 12 20.454 12 20.454s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon-btn">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>

              <div className="footer-contacts-list">
                <div className="footer-contact-item">
                  <span className="footer-contact-label">{"FOR GENERAL INQUIRIES"}</span>
                  <p className="footer-contact-phone">{"+91 90002 02222"}</p>
                  <a href="mailto:contact@ashvkatha.in" className="footer-contact-email">{"contact@ashvkatha.in"}</a>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-label">{"FOR MEDIA"}</span>
                  <p className="footer-contact-phone">{"+91 99002 20002"}</p>
                  <a href="mailto:media@ashvkatha.in" className="footer-contact-email">{"media@ashvkatha.in"}</a>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-label">{"FOR CAREER OPPORTUNITIES"}</span>
                  <a href="mailto:careers@ashvkatha.in" className="footer-contact-email">{"careers@ashvkatha.in"}</a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="footer-links-col">
              <span className="footer-col-title">{"PAGES"}</span>
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); setActiveSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{"Home"}</a>
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); setActiveSection('resources'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{"Resources"}</a>
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); setActiveSection('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{"About"}</a>
              <a href="#" className="footer-link" onClick={(e) => { 
                e.preventDefault(); 
                setActiveSection('contact'); 
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>{"Contact Us"}</a>
              <a href="#" className="footer-link" onClick={(e) => { 
                e.preventDefault(); 
                setActiveSection('contact'); 
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>{"Careers"}</a>
            </div>

            {/* Column 3: Contact Form Card */}
            <div className="footer-form-col">
              <div className="footer-form-card">
                {formSubmitted ? (
                  <div className="footer-form-success">
                    <h3 className="footer-form-success-title">{"Thank You"}</h3>
                    <p>{"Your message has been sent successfully. We will connect with you soon."}</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="footer-form">
                    <div className="footer-form-group">
                      <select
                        className="footer-form-select"
                        required
                        value={formData.requestType}
                        onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                      >
                        <option value="">{"Select type of request"}</option>
                        <option value="partner">{"Investors and partners"}</option>
                        <option value="gov">{"Government and developing organizations"}</option>
                        <option value="research">{"Researchers and scientists"}</option>
                        <option value="volunteer">{"Volunteers and activists"}</option>
                        <option value="donor">{"Donors and patrons"}</option>
                        <option value="media">{"Media representatives"}</option>
                        <option value="student">{"Students"}</option>
                      </select>
                    </div>

                    <div className="footer-form-group">
                      <input
                        type="text"
                        className="footer-form-input"
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="footer-form-group">
                      <input
                        type="email"
                        className="footer-form-input"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="footer-form-group">
                      <div className="footer-textarea-label-row">
                        <span className="footer-textarea-placeholder">{"Message"}</span>
                        <span className="footer-textarea-optional">{"Optional"}</span>
                      </div>
                      <textarea
                        className="footer-form-textarea"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <div className="footer-form-checkbox-group">
                      <label className="footer-form-checkbox-label">
                        <input
                          type="checkbox"
                          required
                          checked={formData.agree}
                          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        />
                        <span>
                          {"By submitting this form, I agree to the collection and use of my personal data as per Privacy Policy for marketing purposes, including receiving promotional content and updates on products or services."}
                        </span>
                      </label>
                    </div>

                    <div className="footer-form-submit-row">
                      <button type="submit" className="footer-form-btn">
                        {"Send Message"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>{"2026 Copyright © All Rights Reserved. Financially Supported by Surya Foundation."}</p>
            <div className="footer-links">
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); alert("Mock Privacy Policy: Your data is protected by encryption."); }}>{"Privacy Policy"}</a>
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); alert("Mock Terms: Use of this site complies with policies of Surya Foundation."); }}>{"Terms & Conditions"}</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Audio controls */}
      {activeSection === 'home' && (
        <div className="media-controls">
          <button
            className="control-btn"
            title={isBgPlaying ? 'Pause Video' : 'Play Video'}
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
            title={isSoundOn ? 'Mute' : 'Unmute'}
            onClick={() => setIsSoundOn(!isSoundOn)}
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
