import './App.css'
import './Admin.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Views/Pages/UserPortal/HomePage/Home.jsx'
import About from './Views/Pages/UserPortal/AboutPage/About.jsx'
import ContactPage from './Views/Pages/UserPortal/ContactUs/ContactPage.jsx'
import Privacy from './Views/Pages/UserPortal/Privacy/Privacy.jsx'
import Shop from './Views/Pages/UserPortal/Shop/Shop.jsx'
import Dashboard from './Views/Pages/AdminPortal/AdminDashboard/Dashboard.jsx'
import Products from './Views/Pages/AdminPortal/Products/Products.jsx'
import Orders from './Views/Pages/AdminPortal/Orders/Orders.jsx'
import Users from './Views/Pages/AdminPortal/Users/Users.jsx'
import Report from './Views/Pages/AdminPortal/Reports/Report.jsx'
import AdminLogin from './Views/Pages/AdminPortal/AdminLogin/AdminLogin.jsx'
import MyProfile from './Views/Pages/AdminPortal/Myprofile/MyProfile.jsx'

function App() {
  


  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/shop' element={<Shop/>}/>

        {/* admin routing  */}

        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/products' element={<Products/>}/>
        <Route path='/admin/orders' element={<Orders/>}/>
        <Route path='/admin/users' element={<Users/>}/>
        <Route path='/admin/Reports' element={<Report/>}/>
        <Route path='/admin/profile' element={<MyProfile/>}/>
      </Routes>
     </Router>

  
    </>
  )
}

export default App
