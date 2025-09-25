
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import GalleryGrid from '../components/GalleryGrid'

export default function HomePage(){
  return (<>
    <Hero />
    <div data-reveal><ServicesGrid /></div>
    <div data-reveal><GalleryGrid /></div>
  </>)
}
