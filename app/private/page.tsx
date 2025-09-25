
import Hero from '../../components/Hero'
import GalleryGrid from '../../components/GalleryGrid'

export default function PrivatePage(){
  return (<>
    <Hero />
    <section className="container" data-reveal>
      <h2>Private Overview</h2>
      <p>Short intro about private services. Swap in photos later.</p>
    </section>
    <GalleryGrid />
    <section className="container" style={{ paddingBlock: '24px' }}>
      <a className="btn button--primary" href="/contact">Start Your Inquiry</a>
    </section>
  </>)
}
