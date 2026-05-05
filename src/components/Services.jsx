import { useEffect, useRef } from 'react';

const services = [
  {
    icon: '🌍',
    title: 'International Hiring',
    desc: 'We connect skilled professionals with trusted employers across the Gulf, Europe, and Asia.',
    features: ['Saudi Arabia, UAE, Qatar', 'Europe & Malaysia Jobs', 'Verified Employers', 'Safe Deployment'],
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=90&auto=format&fit=crop',
  },
  {
    icon: '📑',
    title: 'Visa & Documentation',
    desc: 'Complete visa processing with accuracy, transparency, and timely execution.',
    features: ['Work Visa Processing', 'Document Attestation', 'Embassy Handling', 'Application Tracking'],
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=90&auto=format&fit=crop',
  },
  {
    icon: '👔',
    title: 'Talent Recruitment',
    desc: 'We identify, screen, and prepare candidates to meet international workforce standards.',
    features: ['Skill Evaluation', 'Trade Testing', 'Interview Scheduling', 'Background Checks'],
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=90&auto=format&fit=crop',
  },
  {
    icon: '🏢',
    title: 'Corporate Staffing',
    desc: 'Bulk hiring solutions for companies looking for reliable manpower from Pakistan.',
    features: ['Bulk Recruitment', 'Medical & Fitness', 'Contract Processing', 'Deployment Support'],
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=90&auto=format&fit=crop',
  },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('show');
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .sv2-section {
          background: #fffaf5;
          padding: 100px 24px;
        }

        .sv2-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .sv2-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .sv2-chip {
          background: rgba(120,53,15,.08);
          color: #7c2d12;
          border: 1px solid rgba(120,53,15,.2);
          font-size: 12px;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 999px;
          display: inline-block;
          margin-bottom: 16px;
        }

        .sv2-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px,4vw,42px);
          font-weight: 800;
          color: #3b1d0f;
          margin-bottom: 12px;
        }

        .sv2-sub {
          color: #7c6a5d;
          font-size: 15px;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .sv2-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 28px;
        }

        @media(max-width:900px){
          .sv2-grid{grid-template-columns:1fr}
        }

        .sv2-card {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          height: 320px;
          cursor: pointer;
        }

        .sv2-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .sv2-card:hover .sv2-img {
          transform: scale(1.08);
        }

        .sv2-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(60,20,10,.85),
            rgba(60,20,10,.2)
          );
        }

        .sv2-content {
          position: absolute;
          bottom: 0;
          padding: 26px;
          color: #fff;
        }

        .sv2-icon {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .sv2-title2 {
          font-weight: 800;
          font-size: 20px;
          margin-bottom: 6px;
        }

        .sv2-desc {
          font-size: 13px;
          color: rgba(255,255,255,.8);
          margin-bottom: 12px;
        }

        .sv2-features {
          font-size: 12px;
          opacity: .9;
          margin-bottom: 14px;
        }

        .sv2-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          border-radius: 10px;
          background: linear-gradient(135deg,#7c2d12,#f59e0b);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all .25s;
        }

        .sv2-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(124,45,18,.4);
        }

      `}</style>

      <section id="services" className="sv2-section" ref={ref}>
        <div className="sv2-inner">

          {/* Header */}
          <div className="sv2-header reveal">
            <div className="sv2-chip">Our Expertise</div>
            <div className="sv2-title">
              Smart Solutions for Overseas Careers
            </div>
            <p className="sv2-sub">
              From job placement to final deployment — we simplify your journey
              towards international employment with trusted processes.
            </p>
          </div>

          {/* Cards */}
          <div className="sv2-grid">
            {services.map((s,i) => (
              <div key={i} className="sv2-card reveal">

                <img src={s.img} className="sv2-img" />
                <div className="sv2-overlay" />

                <div className="sv2-content">
                  <div className="sv2-icon">{s.icon}</div>
                  <div className="sv2-title2">{s.title}</div>
                  <div className="sv2-desc">{s.desc}</div>

                  <div className="sv2-features">
                    {s.features.slice(0,2).join(' • ')}
                  </div>

                  <button
                    className="sv2-btn"
                    onClick={() =>
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Get Details →
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}