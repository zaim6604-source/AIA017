const quickLinks = [
  { l:'Home',         id:'home'       },
  { l:'About Us',     id:'about'      },
  { l:'Our Services', id:'services'   },
  { l:'Contact',      id:'contact'    },
  { l:'Get In Touch', id:'getintouch' },
];

const serviceLinks = [
  'Overseas Employment','Visa Processing','Recruitment Solutions','Employer Services',
];

const phones = ['0314-5230994','0333-5138529'];

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });

export default function Footer() {
  return (
    <>
      <style>{`
        .ft {
          background: #1a1a1a;
          color: #fff;
          position: relative;
        }

        /* TOP GRADIENT LINE (CONNECTS WITH HERO) */
        .ft::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg,#7f1d1d,#ea580c,#f59e0b);
        }

        /* CTA STRIP */
        .ft-top {
          background: linear-gradient(135deg,#7f1d1d,#ea580c,#f59e0b);
        }

        .ft-top-inner {
          max-width:1200px;
          margin:auto;
          padding:50px 24px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
          gap:20px;
        }

        .ft-top-title {
          font-size:26px;
          font-weight:800;
        }

        .ft-top-sub {
          font-size:14px;
          opacity:.85;
        }

        .ft-btn {
          background:#fff;
          color:#7f1d1d;
          padding:14px 26px;
          border-radius:12px;
          font-weight:700;
          border:none;
          cursor:pointer;
          transition:.25s;
        }

        .ft-btn:hover {
          transform:translateY(-2px);
          box-shadow:0 10px 25px rgba(0,0,0,.25);
        }

        /* BODY */
        .ft-body {
          max-width:1200px;
          margin:auto;
          padding:60px 24px;
          display:grid;
          grid-template-columns:1.5fr 1fr 1fr 1.2fr;
          gap:40px;
        }

        @media(max-width:900px){
          .ft-body{grid-template-columns:1fr 1fr;}
        }
        @media(max-width:560px){
          .ft-body{grid-template-columns:1fr;}
        }

        .ft-title {
          font-size:12px;
          text-transform:uppercase;
          letter-spacing:.12em;
          margin-bottom:16px;
          color:#f59e0b;
        }

        .ft-link {
          display:block;
          margin-bottom:10px;
          font-size:14px;
          color:#d1d5db;
          cursor:pointer;
          transition:.2s;
        }

        .ft-link:hover {
          color:#f59e0b;
        }

        /* BRAND */
        .ft-logo {
          display:flex;
          gap:12px;
          margin-bottom:14px;
        }

        .ft-logo-icon {
          width:46px;
          height:46px;
          border-radius:12px;
          background:linear-gradient(135deg,#7f1d1d,#ea580c,#f59e0b);
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:800;
          font-size:14px;
        }

        .ft-tagline {
          font-size:14px;
          color:#d1d5db;
          line-height:1.7;
          margin-bottom:18px;
        }

        .ft-card {
          background: rgba(234,88,12,.12);
          border:1px solid rgba(234,88,12,.4);
          padding:10px 14px;
          border-radius:10px;
          font-size:13px;
          color:#fdba74;
          margin-bottom:16px;
        }

        /* CONTACT */
        .ft-contact-line {
          font-size:13px;
          color:#d1d5db;
          margin-bottom:6px;
        }

        .ft-contact-line a {
          color:#d1d5db;
          text-decoration:none;
        }

        .ft-contact-line a:hover {
          color:#f59e0b;
        }

        /* WHATSAPP */
        .ft-wa {
          margin-top:14px;
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:12px 18px;
          border-radius:10px;
          background:linear-gradient(135deg,#16a34a,#22c55e);
          color:#fff;
          font-weight:600;
          text-decoration:none;
          transition:.25s;
        }

        .ft-wa:hover {
          transform:translateY(-2px);
          box-shadow:0 8px 20px rgba(22,163,74,.4);
        }

        /* BOTTOM */
        .ft-bottom {
          border-top:1px solid rgba(255,255,255,.1);
          padding:18px;
          text-align:center;
          font-size:13px;
          color:#9ca3af;
        }
      `}</style>

      <footer className="ft">

        {/* CTA */}
        <div className="ft-top">
          <div className="ft-top-inner">
            <div>
              <div className="ft-top-title">Start Your Career Abroad</div>
              <div className="ft-top-sub">Trusted recruitment with A-1 Agency</div>
            </div>

            <button className="ft-btn" onClick={()=>go('getintouch')}>
              Get Started →
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="ft-body">

          {/* BRAND */}
          <div>
            <div className="ft-logo">
              <div className="ft-logo-icon">A1</div>
              <div>
                <div style={{fontWeight:800}}>A-1 Agency</div>
                <div style={{fontSize:12,color:'#f59e0b'}}>Overseas Employment</div>
              </div>
            </div>

            <p className="ft-tagline">
              Licensed manpower promoter connecting Pakistani talent with global opportunities.
            </p>

            <div className="ft-card">
              🏛 License No. 0444 / RWP
            </div>

            <a href="https://wa.me/923145230994" target="_blank" className="ft-wa">
              WhatsApp Us →
            </a>
          </div>

          {/* LINKS */}
          <div>
            <div className="ft-title">Quick Links</div>
            {quickLinks.map(({l,id})=>(
              <div key={id} className="ft-link" onClick={()=>go(id)}>{l}</div>
            ))}
          </div>

          {/* SERVICES */}
          <div>
            <div className="ft-title">Services</div>
            {serviceLinks.map(s=>(
              <div key={s} className="ft-link" onClick={()=>go('services')}>{s}</div>
            ))}
          </div>

          {/* CONTACT */}
          <div>
            <div className="ft-title">Contact</div>

            <div className="ft-contact-line">📍 B-343, Tingo Market</div>
            <div className="ft-contact-line">Satellite Town, Rawalpindi</div>

            {phones.map(p=>(
              <div key={p} className="ft-contact-line">
                📞 <a href={`tel:${p}`}>{p}</a>
              </div>
            ))}

            <div className="ft-contact-line">🕐 Mon–Sat: 9AM – 6PM</div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="ft-bottom">
          © {new Date().getFullYear()} A-1 Agency · License No. 0444 / RWP · Rawalpindi, Pakistan
        </div>

      </footer>
    </>
  );
}