import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { raleway } from '@/fonts'

export const metadata: Metadata = {
  title: 'Rustic Sport Bar'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <NavBar/>
        {children}
        <div id="contact-section">
          <Footer/>
        </div>
      </body>
    </html>
  )
}
