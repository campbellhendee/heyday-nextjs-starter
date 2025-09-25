
export default function Hero(){
  return (
    <section className="hero" data-hero>
      <img src="/images/hero.jpg" alt="Romantic garden ceremony florals" />
      <div className="container" style={{paddingBlock:'18vh 10vh'}}>
        <p className="eyebrow" style={{color:'#fff'}}>Est. 2019 • Houston</p>
        <h1 style={{color:'#fff',maxWidth:'24ch',textShadow:'0 1px 2px rgba(0,0,0,.35)'}}>Florals That Tell Your Story</h1>
        <div style={{display:'flex',gap:12}}>
          <a className="btn button--primary" href="/contact">Start Your Inquiry</a>
          <a className="btn" href="/weddings">View Our Work</a>
        </div>
      </div>
    </section>
  )
}
