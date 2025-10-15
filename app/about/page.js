'use client'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
import { useState } from 'react'
import Team from "@/components/sections/home3/Team"


export default function About() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
   
    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="About Us">
        {/*About One Start */}
        <section className="about-one about-seven">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box" style={{marginTop:'150px'}}>
                                    <span className="section-title__tagline">ABOUT US</span>
                                </div>
                                <h2 className="section-title__title">Leaders in Interior Solutions</h2>
                            </div>
                            <p className="about-one__text">Since 1996, Zeenath has been providing high-quality plywood, laminates, and veneers. 
                                We combine quality products with reliable service to meet every customer’s needs</p>
                            <ul className="about-one__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-analytics"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="about">Trusted Quality</Link></h3>
                                        <p>Our products are strong, durable, and made to last.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-prestige"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="about">Customer Support</Link></h3>
                                        <p>We guide and help our customers at every step of their project.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}

        {/* Counter Two Start */}
        <section className="counter-two">
            <div className="counter-two__bg-box">
                <div className="counter-two__bg"
                    style={{ backgroundImage: 'url(assets/images/backgrounds/counter-two-bg.png' }} ></div>
            </div>
            <div className="container">
                <div className="counter-two__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box" style={{marginTop:'50px'}}>
                            <span className="section-title__tagline">Best Roof rapairing</span>
                        </div>
                        <h2 className="section-title__title">Our Journey in Numbers </h2>
                    </div>
                    <p className="counter-two__top-text">Zeenath has grown by delivering quality products and reliable service.
                         Here’s a look at what we have achieved over the years.</p>
                </div>
                <div className="counter-two__bottom">
                    <div className="row">
                        {/* Counter Two Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-settings"></span>
                                </div>
                                <div className="counter-two__count count-box">
                                <CounterUp end={25} />
                                    <span className="counter-two__plus">+</span>
                                </div>
                                <p className="counter-two__count-text">Years</p>
                            </div>
                        </div>
                        {/* Counter Two Single End */}
                        {/* Counter Two Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-paint"></span>
                                </div>
                                <div className="counter-two__count count-box">
                                <CounterUp end={100} />
                                    <span className="counter-two__plus">+</span>
                                </div>
                                <p className="counter-two__count-text">Products</p>
                            </div>
                        </div>
                        {/* Counter Two Single End */}
                        {/* Counter Two Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-mechanic-2"></span>
                                </div>
                                <div className="counter-two__count count-box">
                                <CounterUp end={500} />
                                    <span className="counter-two__plus">+</span>
                                </div>
                                <p className="counter-two__count-text">Projects</p>
                            </div>
                        </div>
                        {/* Counter Two Single End */}
                        {/* Counter Two Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-analytics"></span>
                                </div>
                                <div className="counter-two__count count-box">
                                <CounterUp end={1000} />
                                    <span className="counter-two__plus">+</span>
                                </div>
                                <p className="counter-two__count-text">Happy Clients</p>
                            </div>
                        </div>
                        {/* Counter Two Single End */}
                    </div>
                </div>
            </div>
        </section>
        {/* Counter Two End */}

        {/*Contact Two Start */}
        {/* <section className="contact-two contact-four">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">talk to us</span>
                                </div>
                                <h2 className="section-title__title">Crafting Perfect from <br/> Foundation to Finish</h2>
                            </div>
                            <p className="contact-two__text">Et purus duis sollicitudin dignissim habitant. Egestas nulla
                                <br/> quis venenatis cras sed eu massa eu faucibus</p>
                            <div className="contact-two__call-box">
                                <div className="icon">
                                    <span className="icon-call"></span>
                                </div>
                                <div className="content">
                                    <span>Need help?</span>
                                    <p><Link href="tel:+8085550111">+(808) 555-0111</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__right">
                            <form action="assets/inc/sendemail.php" className="contact-two__form contact-form-validated">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-two__input-box">
                                            <input type="text" placeholder="Your Name" name="name"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-two__input-box">
                                            <input type="email" placeholder="Your E-mail" name="email"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-two__input-box">
                                            <input type="text" placeholder="Your Phone" name="email"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-two__input-box">
                                            <input type="text" placeholder="Your Location" name="email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="contact-two__input-box text-message-box">
                                            <textarea name="message" placeholder="Your Massage"></textarea>
                                        </div>
                                        <div className="contact-two__btn-box">
                                            <button type="submit" className="thm-btn contact-two__btn">Send us<span
                                                    className="icon-dabble-arrow-right"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/*Contact Two End */}

        {/* Success One Start */}
        <section className="success-one" style={{marginTop:'150px'}}>
            <div className="success-one__shape-1">
                <img src="assets/images/shapes/success-one-shape-1.png" alt=""/>
            </div>
            <div className="success-one__img-box">
                <div className="success-one__img">
                    <img src="assets/images/resources/success-one-img-1.jpg" alt=""/>
                </div>
                <div className="success-one__counter">
                    <ul className="list-unstyled success-one__counter-list">
                        <li>
                            <div className="success-one__counter-count count-box">
                                <h3 >100</h3>
                                <span className="success-one__counter-percent">%</span>
                            </div>
                            <p className="success-one__counter-text">Success Rate</p>
                        </li>
                        <li>
                            <div className="success-one__counter-count count-box">
                                <h3>250</h3>
                                <span className="success-one__counter-percent">+</span>
                            </div>
                            <p className="success-one__counter-text">Happy Clients</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="success-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box" style={{marginTop:'70px'}}>
                                    <span className="section-title__tagline">Best Services</span>
                                </div>
                                <h2 className="section-title__title"> Committed To Your Success</h2>
                            </div>
                            <p className="success-one__text">At Zeenath, we understand that choosing the right plywood,
                                 laminates, and veneers can be confusing.
                                 We’re here to make it easier for you. Find answers to the most common questions our customers ask.</p>
                            <ul className="list-unstyled success-one__points">
                                <li>
                                    <div className="success-one__points-icon">
                                        <span className="icon-constructo-pro"></span>
                                    </div>
                                    <p className="success-one__points-text"><Link href="service-details">Quality Products</Link></p>
                                </li>
                                <li>
                                    <div className="success-one__points-icon">
                                        <span className="icon-proconstruct"></span>
                                    </div>
                                    <p className="success-one__points-text"><Link href="service-details">Customer Support</Link></p>
                                </li>
                            </ul>
                            <div className="success-one__btn-box">
                                <Link href="about" className="success-one__btn thm-btn">Read more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Success One End */}

        {/*FAQ One Start*/}
        <section className="faq-one faq-five">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box" style={{marginTop:'80px'}}>
                                    <span className="section-title__tagline">SOME fAQS</span>
                                </div>
                                <h2 className="section-title__title">Got Questions? We’ve Got Answers </h2>
                            </div>
                            <p className="faq-one__text">At Zeenath, we understand that choosing the right plywood, laminates, and veneers can be confusing.
                                 We’re here to make it easier for you. Find answers to the most common questions our customers ask.</p>
                            <div className="faq-one__btn-box">
                                <Link href="#" className="faq-one__btn thm-btn">Learn more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>What products do you offer?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>We provide a wide range of plywood, laminates, and veneers for different interior needs.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>Do you supply in bulk?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Yes, we are manufacturers and wholesalers, and can supply both small and large quantities</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>How long has Zeenath been in business?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>We have been serving customers since 1996, with over 25 years of experience.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>Can I get guidance for my project?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Yes, our team is happy to help you choose the right products for your interiors.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*FAQ One End*/}
        <Team />
        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__shape-1">
                        <img src="assets/images/shapes/ply.png" alt=""/>
                    </div>
                    <div className="cta-one__img">
                        <img src="assets/images/resources/ply.png" alt=""/>
                    </div>
                    <h3 className="cta-one__title">Strong Products,<br/> Lasting Interior Solutions</h3>
                    <div className="cta-one__from-box">
                        <form className="cta-one__form">
                            <div className="cta-one__input-box">
                                <input type="email" placeholder="Your E-mail" name="email"/>
                            </div>
                            <button type="submit" className="cta-one__btn thm-btn">Subscribe Us</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}

            </Layout>
        </>
    )
}


