import { useEffect, useRef } from 'react';

const values = [
  { emoji:'🛡️', title:'Integrity & Trust', desc:'Transparent and ethical recruitment process.' },
  { emoji:'🌍', title:'Global Reach', desc:'Strong network with international employers.' },
  { emoji:'⚡', title:'Fast Processing', desc:'Quick documentation and visa support.' },
  { emoji:'👥', title:'Expert Team', desc:'Experienced consultants guiding you.' },
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
        .about-sec {
          padding: 90px 20px;
          background: linear-gradient(
            180deg,
            rgba(127,29,29,0.05) 0%,
            #fef3c7 50%
          );
        }

        .about-wrap {
          max-width: 1200px;
          margin: auto;
        }

        .about-title {
          font-size: 36px;
          font-weight: 800;
          color: #1f2937;
        }

        .about-text p {
          color: #374151;
          line-height: 1.8;
          margin-bottom: 12px;
        }

        .value-card {
          background: #fff;
          padding: 22px;
          border-radius: 14px;
          border: 1px solid #eee;
          transition: .25s;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.1);
        }
      `}</style>

      <section id="about" className="about-sec" ref={ref}>
        <div className="about-wrap">

          <div style={{textAlign:'center', marginBottom:50}}>
            <h2 className="about-title mb-8">About Our Agency</h2>
            <p className='mt-8' style={{color:'#555', maxWidth:600, margin:'auto'}}>
              We provide reliable overseas manpower recruitment services,
              helping individuals build successful careers abroad.
            </p>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:50}}>

            {/* Image */}
            <div style={{position:'relative'}}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                style={{
                  width:'100%',
                  height:420,
                  objectFit:'cover',
                  borderRadius:20
                }}
              />

              <div style={{
                position:'absolute',
                inset:0,
                borderRadius:20,
                background:'linear-gradient(180deg, rgba(127,29,29,0.15), transparent)'
              }} />
            </div>

            {/* Text */}
           <div className="about-text">
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

  {/* Buttons */}
  <div className="flex flex-wrap gap-4 mt-8">

    {/* Primary Button */}
    <button
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      className="btn-primary"
    >
      Apply for Jobs
      <i className="fas fa-arrow-right ml-2 text-xs" />
    </button>

    {/* Secondary Button */}
    <button
      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      className="btn-secondary"
    >
      View Services
    </button>

  </div>
</div>
          </div>

          {/* Values */}
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(4,1fr)',
            gap:20,
            marginTop:60
          }}>
            {values.map((v,i) => (
              <div key={i} className="value-card">
                <div style={{fontSize:26}}>{v.emoji}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}