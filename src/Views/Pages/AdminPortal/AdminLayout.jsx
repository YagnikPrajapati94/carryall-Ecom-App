import React from 'react'
import AdminNav from '../../Layouts/Header/AdminNav'
import AdminFooter from '../../Layouts/Footer/AdminFooter'
// import '../../../Admin.css'

const AdminLayout = ({children}) => {
  return (
    <>
      <header className='sticky-top shadow-lg'>
        <AdminNav/>
      </header>
       <main className='mt-0 admin-body-bg'>
        {children}
       </main>
       <footer className='sticky-bottom '>
        <AdminFooter/>
       </footer>
    </>
  )
}

export default AdminLayout
