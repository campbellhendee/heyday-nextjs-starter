
type Item = { src:string; alt:string; color?:string }
const defaults: Item[] = [
  { src:'/images/gallery/01.jpg', alt:'Garden ceremony pillars', color:'neutral,greenery' },
  { src:'/images/gallery/02.jpg', alt:'Blush table arrangement', color:'blush,neutral' },
  { src:'/images/gallery/03.jpg', alt:'Bold centerpiece', color:'bold' },
  { src:'/images/gallery/04.jpg', alt:'Greenery aisle markers', color:'greenery' },
  { src:'/images/gallery/05.jpg', alt:'Pastel bouquet', color:'blush' },
  { src:'/images/gallery/06.jpg', alt:'Modern neutral tablescape', color:'neutral' },
]

export default function GalleryGrid({ items = defaults }:{ items?: Item[] }){
  return (
    <section className="container">
      <h2>Recent Celebrations</h2>
      <ul className="masonry" style={{listStyle:'none',padding:0}}>
        {items.map((i,idx)=>(
          <li key={idx} className="card" data-color={i.color}>
            <img src={i.src} alt={i.alt} loading="lazy"/>
          </li>
        ))}
      </ul>
    </section>
  )
}
