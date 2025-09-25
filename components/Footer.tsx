
import Link from 'next/link'

export default function Footer(){
  return (
    <footer style={{paddingBlock:'48px', borderTop:'1px solid var(--border)'}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,flexWrap:'wrap'}}>
        <div>
          <strong>Heyday Flower Co</strong>
          <p style={{margin:6,color:'var(--ink-2)'}}>Houston, Texas</p>
        </div>
        <nav>
          <Link href="/weddings">Weddings</Link>{' · '}
          <Link href="/corporate">Corporate</Link>{' · '}
          <Link href="/private">Private</Link>{' · '}
          <Link href="/daily">Daily</Link>{' · '}
          <Link href="/about">About</Link>{' · '}
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
