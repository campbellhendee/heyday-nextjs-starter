
'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header(){
  const [scrolled,setScrolled]=useState(false)
  useEffect(()=>{ const on=()=>setScrolled(window.scrollY>16); on(); window.addEventListener('scroll',on,{passive:true}); return ()=>window.removeEventListener('scroll',on)},[])
  return (
    <header className={`site-header ${scrolled?'is-scrolled':''}`} data-header>
      <div className="container nav">
        <Link href="/" className="logo">Heyday Flower Co</Link>
        <nav aria-label="Primary">
          <ul className="menu">
            <li><Link href="/weddings">Weddings</Link></li>
            <li><Link href="/corporate">Corporate</Link></li>
            <li><Link href="/private">Private</Link></li>
            <li><Link href="/daily">Daily</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact" className="btn button--primary">Start Inquiry</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
