import { useEffect, useRef } from 'react';

const values = [
  { emoji: '🛡️', title: 'Integrity & Trust',  desc: 'Transparent and ethical recruitment process.' },
  { emoji: '🌍', title: 'Global Reach',        desc: 'Strong network with international employers.' },
  { emoji: '⚡', title: 'Fast Processing',     desc: 'Quick documentation and visa support.' },
  { emoji: '👥', title: 'Expert Team',         desc: 'Experienced consultants guiding you.' },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('show');
      }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Reveal animation ── */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Section ── */
        .about-sec {
          padding: 90px 20px;
          background: linear-gradient(180deg, rgba(127,29,29,0.05) 0%, #fef3c7 50%);
        }

        /* ── Wrapper ── */
        .about-wrap {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Header block ── */
        .about-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .about-title {
          font-size: clamp(26px, 5vw, 36px);
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 14px;
        }

        .about-subtitle {
          color: #555;
          max-width: 600px;
          margin: 0 auto;
          font-size: clamp(14px, 2vw, 16px);
          line-height: 1.7;
        }

        /* ── Two-column grid ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        /* ── Image block ── */
        .about-img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          line-height: 0;
        }

        .about-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
          border-radius: 20px;
        }

        @media (max-width: 768px) {
          .about-img {
            height: 260px;
          }
        }

        @media (max-width: 480px) {
          .about-img {
            height: 210px;
          }
        }

        .about-img-overlay {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(127,29,29,0.15), transparent);
          pointer-events: none;
        }

        /* ── Text block ── */
        .about-text p {
          color: #374151;
          line-height: 1.8;
          margin-bottom: 14px;
          font-size: clamp(14px, 1.8vw, 15px);
        }

        /* ── Buttons ── */
        .about-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 26px;
          background: #B8914A;
          color: #fff;
          font-weight: 600;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-family: inherit;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 4px 16px rgba(184,145,74,0.35);
        }
        .btn-primary:hover {
          background: #9a7a3d;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(184,145,74,0.45);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 26px;
          background: transparent;
          color: #1f2937;
          font-weight: 600;
          border-radius: 10px;
          border: 1.5px solid #d1d5db;
          cursor: pointer;
          font-size: 14px;
          font-family: inherit;
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-secondary:hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        /* ── Values grid ── */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 60px;
        }

        @media (max-width: 900px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .values-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        /* ── Value card ── */
        .value-card {
          background: #fff;
          padding: 22px 20px;
          border-radius: 14px;
          border: 1px solid #eee;
          transition: transform 0.25s, box-shadow 0.25s;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.1);
        }

        .value-emoji {
          font-size: 26px;
          margin-bottom: 10px;
        }

        .value-title {
          font-size: 15px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 6px;
        }

        .value-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Mobile section padding ── */
        @media (max-width: 640px) {
          .about-sec {
            padding: 60px 16px;
          }
          .about-header {
            margin-bottom: 36px;
          }
          .values-grid {
            margin-top: 40px;
          }
        }
      `}</style>

      <section id="about" className="about-sec" ref={ref}>
        <div className="about-wrap">

          {/* Header */}
          <div className="about-header reveal">
            <h2 className="about-title">About Our Agency</h2>
            <p className="about-subtitle">
              We provide reliable overseas manpower recruitment services,
              helping individuals build successful careers abroad.
            </p>
          </div>

          {/* Two-column: image + text */}
          <div className="about-grid">

            {/* Image */}
            <div className="about-img-wrap reveal">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Our team at work"
                className="about-img"
              />
              <div className="about-img-overlay" />
            </div>

            {/* Text */}
            <div className="about-text reveal" style={{ transitionDelay: '0.15s' }}>
              <p>
                We are a licensed overseas manpower promoter based in Rawalpindi,
                providing reliable recruitment solutions for both skilled and unskilled workers.
              </p>
              <p>
                Our goal is to connect talented individuals with verified international employers,
                ensuring safe, transparent, and ethical job placements across multiple industries.
              </p>
              <p>
                From initial application to final deployment, our team handles documentation,
                visa processing, and pre-departure guidance — making your journey abroad smooth
                and stress-free.
              </p>

              <div className="about-btns">
                <button
                  className="btn-primary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Apply for Jobs
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Services
                </button>
              </div>
            </div>

          </div>

          {/* Values */}
          <div className="values-grid">
            {values.map((v, i) => (
              <div
                key={i}
                className="value-card reveal"
                style={{ transitionDelay: `${0.1 * i}s` }}
              >
                <div className="value-emoji">{v.emoji}</div>
                <h4 className="value-title">{v.title}</h4>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
