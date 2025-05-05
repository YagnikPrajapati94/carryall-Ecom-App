import React from 'react'
import UserLayout from '../UserLayout'
import HeroCommon from '../Sections/HeroCommon'
import PrivacySection1 from './PrivacySections/PrivacySection1'

const Privacy = () => {
  return (
    <>
      <UserLayout>
        <HeroCommon title={"Privacy Policy"} desc={"We value the diverse perspectives and experiences of our users, and we encourage collaboration and community engagement. Our platform provides opportunities for users to contribute their knowledge, share their opinions, and engage in discussions with like-minded individuals."}/>
        <PrivacySection1/>
      </UserLayout>
    </>
  )
}

export default Privacy
