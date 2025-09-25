
import type { Metadata } from 'next'
import '../styles/global.css'
import { Inter, Fraunces } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets:['latin'], weight:['400','500','600'], variable:'--font-inter' })
const fraunces = Fraunces({ subsets:['latin'], weight:['400','600'], variable:'--font-fraunces' })

export const metadata: Metadata = {
  title: 'Heyday Flower Co',
  description: 'Luxury floral design for weddings, brands, private dinners, and daily arrangements.'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
