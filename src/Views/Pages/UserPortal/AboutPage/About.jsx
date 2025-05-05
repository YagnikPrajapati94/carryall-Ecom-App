import React from 'react'
import UserLayout from '../UserLayout'
import HeroCommon from '../Sections/HeroCommon'
import AboutSection1 from './AboutSections/AboutSection1'

const About = () => {
  return (
    <>
      <UserLayout>
        <HeroCommon title={"About Us"} desc={"At AboutUs, we are a dynamic and innovative company committed to providing comprehensive information and valuable insights on a wide range of topics."}/>
        <AboutSection1/>
      </UserLayout>
    </>
  )
}

export default About
