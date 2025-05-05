import React from 'react'

const PrivacySection1 = () => {
  return (
    <>
      <section>
        <div className="container-fluid py-5 bg-white">
            <div className="container py-3">
                <div className="row">
                    <div className="col-12">
                        <h1 className='fw-bold'>Privacy Policy</h1>
                        <p className='small text-black fw-medium my-4'>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.</p>
                        <p className='small'>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as “Order Information”.When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>
                    </div>
                    <div className="col-12">
                        <h1 className='fw-bold'>How do we use your personal information?</h1>
                        <p className='small mt-3'>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:</p>
                        <ul className='small'>
                            <li className='py-1'>Communicate with you.</li>
                            <li className='py-1'>Screen our orders for potential risk or fraud.</li>
                            <li className='py-1'>When in line with the preferences you have shared with us.</li>
                            <li className='py-1'>provide you with information or advertising relating to our products or services.</li>
                        </ul>
                        <p className='small'>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default PrivacySection1
