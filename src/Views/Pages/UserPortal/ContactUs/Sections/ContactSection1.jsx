import React from 'react'
import AllProduct from '../../../../Layouts/Component/Buttons/AllProduct'

const ContactSection1 = () => {
    return (
        <>
            <section>
                <div className="container-fluid py-5 bg-white">
                    <div className="container py-3">
                        <div className="row justify-content-between">
                            <div className="col-lg-5 align-content-center">
                                <form action="" className='form-control contact-form p-4 border border-black'>
                                    <div className="">
                                        <input type="text" className="form-control" placeholder="Enter Username" />
                                    </div>
                                    <div className="my-3">
                                        <input type="email" className="form-control" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="my-3">
                                        <input type="tel" className="form-control" placeholder="Enter Your Phone Number" />
                                    </div>
                                    <div className="my-3">
                                        <textarea name="" className='form-control pb-5' placeholder='Description' id=""></textarea>
                                    </div>
                                    <div className="mt-3">
                                        <AllProduct title={"Send Message"} />
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 text-center d-lg-block d-none">
                                <img src="https://img.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg?t=st=1745845031~exp=1745848631~hmac=35e3a5eb096473d7f2d71d359f2043072fb4c4161282190547cd26aa8ac6b4b0&w=826" className='img-fluid w-75' alt="" />
                            </div>
                        </div>
                        <div className="row"></div>
                    </div>
                </div>
                <div className="container-fluid  p-0 bg-white">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223385.846178024!2d72.5797426!3d23.0202434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1745845269283!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
                </div>
            </section>
        </>
    )
}

export default ContactSection1;
