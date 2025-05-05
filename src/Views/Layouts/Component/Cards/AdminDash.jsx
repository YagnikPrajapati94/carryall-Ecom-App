import React from 'react'
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const AdminDash = ({title,title_desc,icon,navigate}) => {
  return (
    <>
     <div className="col-lg-3 col-md-6">
        <div className="card bg-card rounded-2  mb-4 border border-opacity-25 border-secondary  py-3">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <p className='text-uppercase color-two small fw-medium'>{title}</p>
                    <p className='mb-0 color-one fw-bold fs-5'>{title_desc}</p>
                  
                </div>
                <div>
                    <p className='m-0  rounded-circle bg-icon p-3  '>
                        {icon}
                    </p>
                </div>
            </div>
            <div className='card-body py-0'>
            <Link to={navigate} className='text-decoration-none'>More Info <DoubleArrowIcon fontSize='small ms-1'/></Link>
            </div>
        </div>
        </div> 
    </>
  )
}

export default AdminDash
