import React from 'react'
import Navbar from '../../Layouts/Header/Navbar'
import Footer from '../../Layouts/Footer/Footer'

const UserLayout = ({children}) => {
  return (
    <>
      <header className='sticky-top'>
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <footer className=''>
        <Footer/>
      </footer>
    </>
  )
}

export default UserLayout
