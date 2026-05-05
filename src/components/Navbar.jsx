import { useState, useEffect } from 'react';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const fn = () => {
      setSolid(window.scrollY > 40);

      const ids = ['home', 'about', 'services', 'contact'];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(ids[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .nav-wrap {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          transition: all .3s ease;
        }

        .nav-inner {
          max-width: 1200px;
          margin: auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: height .3s;
        }

        .nav-links {
          display: flex;
          gap: 26px;
          align-items: center;
        }

        .nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          color: #fef3c7;
          padding: 6px 10px;
          border-radius: 6px;
          transition: all .25s;
        }

        .nav-btn:hover {
          background: rgba(255,255,255,0.08);
        }

        .nav-btn.active {
          background: #eab308;
          color: #1f2937;
        }

        .nav-cta {
          background: #eab308;
          color: #1f2937;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all .25s;
        }

        .nav-cta:hover {
          background: #facc15;
          transform: translateY(-1px);
        }

        .menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menu-bar {
          width: 24px;
          height: 2px;
          background: currentColor;
        }

        .mobile-menu {
          overflow: hidden;
          transition: all .3s ease;
        }

        @media(max-width:768px){
          .nav-links { display: none; }
          .menu-btn { display: flex; }
        }
      `}</style>

      <nav
        className="nav-wrap"
        style={{
          background: solid ? '#7f1d1d' : 'transparent',
          boxShadow: solid ? '0 6px 20px rgba(0,0,0,0.2)' : 'none',
        }}
      >
        <div className="nav-inner" style={{ height: solid ? 64 : 74 }}>

          {/* Logo */}
          <button onClick={() => go('home')} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}>
            <div style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: '#eab308',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1f2937',
              fontWeight: 800
            }}>
              A1
            </div>

            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontWeight: 700,
                fontSize: 16,
                color: '#ffffff'
              }}>
                A-1 Agency
              </div>
              <div style={{
                fontSize: 10,
                color: '#fef3c7',
                letterSpacing: '0.08em'
              }}>
                License No. 0444 / RWP
              </div>
            </div>
          </button>

          {/* Desktop */}
          <div className="nav-links">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`nav-btn ${active === l.id ? 'active' : ''}`}
              >
                {l.label}
              </button>
            ))}

            <button className="nav-cta" onClick={() => go('contact')}>
              Apply Now
            </button>
          </div>

          {/* Mobile */}
          <button className="menu-btn" onClick={() => setOpen(!open)}>
            <span className="menu-bar" style={{ color: '#fff' }} />
            <span className="menu-bar" style={{ color: '#fff' }} />
            <span className="menu-bar" style={{ color: '#fff' }} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className="mobile-menu"
          style={{
            maxHeight: open ? 300 : 0,
            background: '#7f1d1d'
          }}
        >
          <div style={{ padding: 20 }}>
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 10px',
                  color: '#fef3c7',
                  background: 'none',
                  border: 'none',
                  fontWeight: 600
                }}
              >
                {l.label}
              </button>
            ))}

            <button
              onClick={() => go('contact')}
              className="nav-cta"
              style={{ width: '100%', marginTop: 10 }}
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}