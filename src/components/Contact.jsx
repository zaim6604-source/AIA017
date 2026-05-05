import { useEffect, useRef } from 'react';

const LAT = 33.64219238074362;
const LNG = 73.07377875767143;

const info = [
  {
    icon: '📍',
    label: 'Office Address',
    lines: ['H-132, D Block, Satellite Town', '6th Road, Near Total Petrol Pump', 'Rawalpindi, Punjab'],
  },
  {
    icon: '📞',
    label: 'Contact Numbers',
    lines: ['051-4853259', '0333-3664912', '0347-0111494'],
  },
  {
    icon: '🏛️',
    label: 'License Details',
    lines: ['License No. 0056 / RWP', 'Government Approved'],
  },
  {
    icon: '🕐',
    label: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: By Appointment'],
  },
];

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('show');
        }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ct-section {
          background: linear-gradient(135deg, #fffaf5, #fef3e7);
          padding: 100px 24px;
        }

        .ct-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .ct-chip {
          display:inline-flex;
          align-items:center;
          gap:8px;
          background:rgba(180,83,9,.08);
          border:1px solid rgba(180,83,9,.2);
          color:#b45309;
          font-size:12px;
          font-weight:700;
          letter-spacing:.08em;
          text-transform:uppercase;
          padding:6px 16px;
          border-radius:999px;
          margin-bottom:18px;
        }

        .ct-title {
          font-family:'Syne',sans-serif;
          font-weight:800;
          font-size:clamp(30px,4vw,44px);
          color:#2b1a12;
          margin-bottom:14px;
        }

        .ct-layout {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:42px;
        }

        @media(max-width:900px){
          .ct-layout{grid-template-columns:1fr}
        }

        .ct-card {
          background:#fff;
          border-radius:20px;
          padding:26px;
          border:1px solid #f1e5d8;
          transition:all .3s;
        }

        .ct-card:hover {
          transform:translateY(-5px);
          box-shadow:0 18px 45px rgba(0,0,0,.08);
        }

        .ct-company {
          display:flex;
          align-items:center;
          gap:14px;
          margin-bottom:20px;
        }

        .ct-logo {
          width:52px;
          height:52px;
          border-radius:14px;
          background:linear-gradient(135deg,#92400e,#d97706);
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          font-weight:800;
          font-size:20px;
        }

        .ct-name {
          font-weight:800;
          font-size:18px;
          color:#2b1a12;
        }

        .ct-lic {
          font-size:12px;
          color:#9a7b5f;
        }

        .ct-info {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:14px;
        }

        @media(max-width:480px){
          .ct-info{grid-template-columns:1fr}
        }

        .ct-item {
          background:#fffaf3;
          border-radius:14px;
          padding:16px;
          border:1px solid #f3e2cf;
        }

        .ct-item-label {
          font-size:11px;
          font-weight:700;
          text-transform:uppercase;
          color:#b45309;
          margin-bottom:6px;
        }

        .ct-item-line {
          font-size:13px;
          color:#5c3b2e;
          line-height:1.6;
        }

        .ct-map {
          border-radius:20px;
          overflow:hidden;
          border:1px solid #f1e5d8;
          box-shadow:0 6px 24px rgba(0,0,0,.08);
          position:relative;
        }

        .ct-badge {
          position:absolute;
          top:14px;
          left:14px;
          background:#fff;
          padding:8px 14px;
          border-radius:10px;
          font-size:13px;
          font-weight:600;
          color:#2b1a12;
          box-shadow:0 4px 14px rgba(0,0,0,.12);
        }

        .ct-btns {
          margin-top:18px;
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }

        .ct-btn {
          padding:12px 18px;
          border-radius:10px;
          font-size:13px;
          font-weight:600;
          border:none;
          cursor:pointer;
          display:flex;
          align-items:center;
          gap:6px;
          transition:.25s;
        }

        .ct-btn-main {
          background:linear-gradient(135deg,#92400e,#d97706);
          color:#fff;
        }

        .ct-btn-main:hover {
          transform:translateY(-2px);
          box-shadow:0 10px 22px rgba(146,64,14,.3);
        }

        .ct-btn-outline {
          background:#fff;
          border:1px solid #e7d3bd;
          color:#7c2d12;
        }

        .ct-btn-outline:hover {
          background:#fff4e6;
        }
      `}</style>

      <section id="contact" className="ct-section" ref={ref}>
        <div className="ct-inner">

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
            <div className="ct-chip">Visit Us</div>
            <h2 className="ct-title">
              Our Office in <span style={{color:'#b45309'}}>Rawalpindi</span>
            </h2>
            <p style={{ color:'#7c5a45', maxWidth:520, margin:'0 auto', lineHeight:1.7 }}>
              Meet our team in person and start your overseas career journey with expert guidance.
            </p>
          </div>

          <div className="ct-layout">

            {/* LEFT */}
            <div className="ct-card reveal">

              <div className="ct-company">
                <div className="ct-logo">A</div>
                <div>
                  <div className="ct-name">Al-Amal Company</div>
                  <div className="ct-lic">License No. 0056 / RWP</div>
                </div>
              </div>

              <div className="ct-info">
                {info.map((item,i)=>(
                  <div key={i} className="ct-item">
                    <div className="ct-item-label">{item.label}</div>
                    {item.lines.map((l,j)=>(
                      <div key={j} className="ct-item-line">{l}</div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="ct-btns">
                <a
                  href="https://wa.me/923333664912"
                  target="_blank"
                  rel="noreferrer"
                  className="ct-btn ct-btn-main"
                >
                  WhatsApp Us →
                </a>

                <button
                  className="ct-btn ct-btn-outline"
                  onClick={()=>document.getElementById('getintouch')?.scrollIntoView({behavior:'smooth'})}
                >
                  Send Enquiry
                </button>
              </div>

            </div>

            {/* RIGHT */}
            <div className="ct-map reveal">
              <div className="ct-badge">📍 Satellite Town</div>

              <iframe
                title="Location"
                src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
                width="100%"
                height="520"
                style={{border:0}}
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}