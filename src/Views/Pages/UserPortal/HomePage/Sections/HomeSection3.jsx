import React from 'react'
import Category from '../../../../Layouts/Component/Cards/Category'

const HomeSection3 = () => {
  return (
    <>
     <section>
        <div className="container-fluid py-5 bg-black">
            <div className="container py-4">
                <div className="row">
                    <Category src={"https://carryall-workdo.myshopify.com/cdn/shop/files/category-card1.png?v=1674793472"}/>
                    <Category src={"https://carryall-workdo.myshopify.com/cdn/shop/files/category-card2.png?v=1674793472"}/>
                    <Category src={"https://carryall-workdo.myshopify.com/cdn/shop/files/category-card3.png?v=1674793472"}/>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}

export default HomeSection3
