import { useState, useRef, useEffect } from 'react';

const WA = '923333664912';

const jobs = [
  'Construction & Civil Work', 'Electrical & Mechanical', 'Hospitality & Hotel Staff',
  'Security & Guard Services', 'Drivers & Transportation', 'IT & Software Professionals',
  'Healthcare & Medical', 'Domestic & Housekeeping', 'Oil & Gas Industry',
  'Teaching & Education', 'Accounting & Finance', 'General Inquiry',
];

const buildMsg = (d) =>
  encodeURIComponent(
    `New Inquiry - Al-Amal Company\n\n` +
    `Name: ${d.name}\n` +
    `Phone: ${d.phone}\n` +
    `Email: ${d.email || 'Not provided'}\n` +
    `Interest: ${d.job}\n\n` +
    `Message:\n${d.msg}`
  );

export default function ContactForm() {
  const ref = useRef(null);
  const [f, setF] = useState({ name:'', phone:'', email:'', job:'', msg:'' });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if(en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const ch = (k) => (e) => {
    setF(p=>({...p,[k]:e.target.value}));
    if(err[k]) setErr(p=>({...p,[k]:''}));
  };

  const validate = () => {
    const e = {};
    if(!f.name.trim()) e.name='Enter your name';
    if(!f.phone.trim()) e.phone='Enter phone number';
    if(!f.job) e.job='Select category';
    if(!f.msg.trim() || f.msg.length < 15) e.msg='Message too short';
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    if(Object.keys(errs).length){ setErr(errs); return; }

    window.open(`https://wa.me/${WA}?text=${buildMsg(f)}`, '_blank');
    setDone(true);

    setTimeout(()=>{
      setDone(false);
      setF({ name:'', phone:'', email:'', job:'', msg:'' });
    }, 4000);
  };

  return (
    <>
      <style>{`
        .gf-section { background:#fdfaf6; padding:100px 24px; }
        .gf-inner { max-width:1100px; margin:0 auto; }

        .gf-title {
          font-family:'Syne',sans-serif;
          font-size:clamp(28px,4vw,42px);
          font-weight:800;
          text-align:center;
          margin-bottom:10px;
          color:#2d1f16;
        }

        .gf-sub {
          text-align:center;
          color:#7c6a5d;
          max-width:500px;
          margin:0 auto 50px;
          line-height:1.7;
        }

        .gf-layout {
          display:grid;
          grid-template-columns:1fr 1.2fr;
          gap:40px;
        }
        @media(max-width:900px){
          .gf-layout{grid-template-columns:1fr}
        }

        /* LEFT PANEL */
        .gf-left {
          background:linear-gradient(135deg,#3b2a1f,#6b4f3a);
          color:#fff;
          border-radius:20px;
          padding:30px;
        }

        .gf-left h3 {
          font-size:22px;
          margin-bottom:20px;
        }

        .gf-item {
          margin-bottom:18px;
          font-size:14px;
          opacity:.9;
        }

       

        /* FORM */
        .gf-form {
          background:#fff;
          border-radius:20px;
          padding:35px;
          box-shadow:0 10px 40px rgba(0,0,0,.08);
        }

        .gf-row {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:14px;
        }
        @media(max-width:600px){
          .gf-row{grid-template-columns:1fr}
        }

        .field {
          width:100%;
          padding:12px 14px;
          border-radius:10px;
          border:1px solid #e5e7eb;
          font-size:14px;
          outline:none;
          transition:.2s;
        }

        .field:focus {
          border-color:#c59a3d;
        }

        textarea.field {
          min-height:120px;
        }

        .err {
          border-color:#ef4444;
        }

        .gf-error {
          font-size:12px;
          color:#ef4444;
          margin-top:4px;
        }

     
        /* SUCCESS */
        .gf-success {
          text-align:center;
          padding:40px;
        }

        .gf-success h3 {
          font-size:22px;
          margin-bottom:8px;
        }
      `}</style>

      <section id="getintouch" className="gf-section" ref={ref}>
        <div className="gf-inner">

          <h2 className="gf-title">Let’s Start Your Journey</h2>
          <p className="gf-sub">
            Share your details and our team will guide you toward the right international opportunity.
          </p>

          <div className="gf-layout">

            {/* LEFT */}
            <div className="gf-left reveal">
              <h3>Why Choose Us?</h3>

              <div className="gf-item">✔ Fast response from our team</div>
              <div className="gf-item">✔ Trusted & licensed recruitment agency</div>
              <div className="gf-item">✔ Complete visa & documentation support</div>
              <div className="gf-item">✔ 5000+ successful placements worldwide</div>

             <a
  href={`https://wa.me/${WA}`}
  target="_blank"
  rel="noreferrer"
  className="btn-primary"
  style={{
    width: '100%',
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: '14px 20px',
    borderRadius: 12,
  }}
>
  Chat on WhatsApp
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
</a>
            </div>

            {/* FORM */}
            <div className="gf-form reveal">

              {done ? (
                <div className="gf-success">
                  <h3>Message Sent Successfully</h3>
                  <p>We will contact you shortly on WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={submit}>

                  <div className="gf-row">
                    <div>
                      <input className={`field ${err.name?'err':''}`} placeholder="Full Name" value={f.name} onChange={ch('name')}/>
                      {err.name && <div className="gf-error">{err.name}</div>}
                    </div>

                    <div>
                      <input className={`field ${err.phone?'err':''}`} placeholder="Phone Number" value={f.phone} onChange={ch('phone')}/>
                      {err.phone && <div className="gf-error">{err.phone}</div>}
                    </div>
                  </div>

                  <div style={{marginTop:14}}>
                    <input className="field" placeholder="Email (optional)" value={f.email} onChange={ch('email')}/>
                  </div>

                  <div style={{marginTop:14}}>
                    <select className={`field ${err.job?'err':''}`} value={f.job} onChange={ch('job')}>
                      <option value="">Select Job Category</option>
                      {jobs.map(j => <option key={j}>{j}</option>)}
                    </select>
                    {err.job && <div className="gf-error">{err.job}</div>}
                  </div>

                  <div style={{marginTop:14}}>
                    <textarea className={`field ${err.msg?'err':''}`} placeholder="Write your message..." value={f.msg} onChange={ch('msg')}/>
                    {err.msg && <div className="gf-error">{err.msg}</div>}
                  </div>

  <button
  type="submit"
  className="btn-primary"
  style={{
    width: '100%',
    marginTop: 18,
    padding: '15px',
    borderRadius: 12,
    fontSize: 15,
  }}
>
  Send via WhatsApp
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
</button>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>
    </>
  );
}