import React from 'react'
import UserLayout from '../UserLayout'
import HeroCommon from '../Sections/HeroCommon'
import ShopSection1 from './Sections/ShopSection1'

const Shop = () => {
    return (
        <>
            <UserLayout>
                <HeroCommon
                    title={"Shop"}
                    desc={"Explore our complete collection of products – everything you need in one place."}
                />
                <ShopSection1/>

            </UserLayout>
        </>
    )
}

export default Shop
