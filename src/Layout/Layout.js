import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import PermanentDrawer from './PermanentDrawer/PermanentDrawer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <PermanentDrawer />
      {children}
      <Footer />
    </>
  )
}

export default Layout
