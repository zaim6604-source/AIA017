import { useEffect, useRef } from 'react';

const stats = [
  { n: '12+', l: 'Years Experience' },
  { n: '4000+', l: 'Successful Placements' },
  { n: '25+', l: 'Countries Served' },
  { n: '95%', l: 'Client Satisfaction' },
];

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      ref.current?.querySelectorAll('.fade-up').forEach((el, i) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, i * 120);
      });
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all .7s ease;
        }

        .hero-badge {
          background: rgba(234,179,8,0.15);
          border: 1px solid rgba(234,179,8,0.35);
          color: #fef3c7;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
          padding: 6px 14px;
          border-radius: 999px;
        }

        .stat-box {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
        }

        @media(max-width:640px){
          .stat-box { grid-template-columns: repeat(2,1fr); }
        }

        .stat {
          padding: 18px;
          text-align: center;
        }

        .stat-num {
          font-size: 26px;
          font-weight: 800;
          color: #fef3c7;
        }

        .stat-label {
          font-size: 11px;
          color: rgba(255,255,255,.6);
        }
      `}</style>

      <section
        id="home"
        ref={ref}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px 20px',
          overflow: 'hidden',
        }}
      >
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=90&auto=format&fit=crop"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(127,29,29,.92), rgba(60,10,10,.85))',
            }}
          />
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 800, textAlign: 'center' }}>

          <div className="hero-badge fade-up" style={{ marginBottom: 20 }}>
            Overseas Manpower Promoters & Consultants
          </div>

          <h1 className="fade-up" style={{
            fontSize: 'clamp(34px,6vw,64px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Build Your Career{' '}
            <span style={{ color: '#fef3c7' }}>
              Abroad
            </span>
          </h1>

          <p className="fade-up" style={{
            color: 'rgba(255,255,255,.75)',
            fontSize: '16px',
            maxWidth: 600,
            margin: '0 auto 30px',
            lineHeight: 1.7,
          }}>
            We connect skilled individuals with trusted international employers,
            providing complete support from application to deployment.
          </p>

          <div className="fade-up" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            flexWrap: 'wrap',
            marginBottom: 50,
          }}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: '#eab308',
                color: '#1f2937',
                padding: '14px 28px',
                borderRadius: 10,
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Apply for Jobs
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                border: '1px solid rgba(255,255,255,.4)',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 10,
                background: 'transparent',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              View Services
            </button>
          </div>

          {/* Stats */}
          <div className="stat-box fade-up">
            {stats.map((s, i) => (
              <div key={i} className="stat">
                <div className="stat-num">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}