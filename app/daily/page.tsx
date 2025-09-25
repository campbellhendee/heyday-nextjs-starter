
import Hero from '../../components/Hero'
import GalleryGrid from '../../components/GalleryGrid'

export default function DailyPage(){
  return (<>
    <Hero />
    <section className="container" data-reveal>
      <h2>Daily Overview</h2>
      <p>Short intro about daily services. Swap in photos later.</p>
    </section>
    <GalleryGrid />
    <section className="container" style={paddingBlock:'24px'}>
      <a className="btn button--primary" href="/contact">Start Your Inquiry</a>
    </section>
  </>)
}
