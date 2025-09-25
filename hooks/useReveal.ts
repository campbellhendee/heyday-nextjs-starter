
'use client'
import { useEffect } from 'react'
export function useReveal(selector='[data-reveal]'){
  useEffect(()=>{
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if(reduce || !('IntersectionObserver' in window)){
      document.querySelectorAll(selector).forEach(el=>el.classList.add('reveal-in')); return
    }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('reveal-in'); io.unobserve(e.target) } })
    },{threshold:0.1})
    document.querySelectorAll(selector).forEach(el=>io.observe(el))
    return ()=>io.disconnect()
  },[selector])
}
