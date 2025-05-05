import React from 'react'
import AdminLayout from '../AdminLayout'
import AdminDash from '../../../Layouts/Component/Cards/AdminDash'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2'

const Dashboard = () => {
  return (
    <>
    <AdminLayout>
        <div className="container-fluid py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className='color-one'>DashBoard</p>
                    </div>
                </div>
                <div className="row">
                    <AdminDash navigate={"/admin/reports"} title={"Total Revenue"} title_desc={"$58,425"} icon={<AccountBalanceWalletIcon className='text-success' />}/>
                    <AdminDash navigate={"/admin/products"} title={"Total Products"} title_desc={"58,425"} icon={<BusinessCenterIcon className='text-danger' />}/>
                    <AdminDash navigate={"/admin/users"} title={"Total Users"} title_desc={"58,425"} icon={<GroupIcon className='text-info' />}/>
                    <AdminDash navigate={"/admin/orders"} title={"Total Orders"} title_desc={"58,425"} icon={<Inventory2Icon className='text-warning' />}/>
                </div>
            </div>
        </div>
    </AdminLayout>
    </>
  )
}

export default Dashboard
