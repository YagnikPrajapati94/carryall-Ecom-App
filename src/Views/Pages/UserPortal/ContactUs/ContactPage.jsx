import React from 'react'
import UserLayout from '../UserLayout'
import HeroCommon from '../Sections/HeroCommon'
import ContactSection1 from './Sections/ContactSection1'

const ContactPage = () => {
  return (
    <>
      <UserLayout>
        <HeroCommon title={"Contact with us"} desc={"With that in mind, we strive to deliver accurate, trustworthy, and engaging content to our users. Our team of experts, researchers, and writers work tirelessly to curate high-quality articles, guides, and resources that cover various domains such as technology, science, health, business, and more."}/>
        <ContactSection1/>
      </UserLayout>
    </>
  )
}

export default ContactPage
