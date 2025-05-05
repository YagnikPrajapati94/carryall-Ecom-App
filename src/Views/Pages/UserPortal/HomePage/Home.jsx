import React from 'react'
import UserLayout from '../UserLayout'
import HeroHome from '../Sections/HeroHome'
import HomeSection1 from './Sections/HomeSection1'
import HomeSection2 from './Sections/HomeSection2'
import HomeSection3 from './Sections/HomeSection3'
import HomeSection4 from './Sections/HomeSection4'

const Home = () => {
  return (
    <>
      <UserLayout>
        <HeroHome/>
        <HomeSection1/>
        <HomeSection2/>
        <HomeSection3/>
        <HomeSection4/>
      </UserLayout>
    </>
  )
}

export default Home
