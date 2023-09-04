import Footer from '@/components/Footer'
import Navbar from '@/components/Header'
import React from 'react'

function RootLayout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default RootLayout