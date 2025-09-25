
import Link from 'next/link'

const cards = [
  { href:'/weddings', title:'Weddings', img:'/images/services/weddings.jpg', alt:'Bridal bouquet and ceremony florals' },
  { href:'/corporate', title:'Corporate', img:'/images/services/corporate.jpg', alt:'Corporate event floral centerpieces' },
  { href:'/private', title:'Private', img:'/images/services/private.jpg', alt:'Intimate dinner party florals' },
  { href:'/daily', title:'Daily', img:'/images/services/daily.jpg', alt:'Daily floral arrangement' },
]

export default function ServicesGrid(){
  return (
    <section className="container" aria-labelledby="services-heading">
      <h2 id="services-heading">What We Design</h2>
      <ul className="grid" style={{gridTemplateColumns:'repeat(12,1fr)', listStyle:'none',padding:0}}>
        {cards.map((c)=>(
          <li key={c.title} className="card" style={{gridColumn:'span 6'}}>
            <figure className="media"><img src={c.img} alt={c.alt} loading="lazy"/></figure>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 16px'}}>
              <h3 style={{margin:0}}>{c.title}</h3>
              <Link href={c.href} className="btn">Explore</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
