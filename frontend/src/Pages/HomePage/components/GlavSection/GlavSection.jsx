import React from "react";
import './GlavSection.css'
import assets from './img/Assets.png'
import video from './img/Video.png'
import element from './img/Element.png'
import profile from './img/Ellipse35.png'
import profile1 from './img/Ellipse34.png'
import profile2 from './img/Ellipse36.png'
import light from './img/Light.png'
import image from './img/Image.png'
import desc from './img/Title&Desc.png'
import desc1 from './img/Title&Desc(1).png'
import desc2 from './img/Title&Desc(2).png'

function GlavSection() {
    return (<>
        <section className="qwerty">
            <div className="glav-section">
                <img className="glav-section-image" src={assets} alt="" />
                <div className="glav-section-text">
                    <h1 className="glav-section-text-h1">Immerse Yourself in Virtual Reality</h1>
                    <p className="glav-section-text-p">Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services</p>
                    <div className="input-glav-section"><button className="glav-section-text-button"><b>DISCOVER MORE</b></button></div>
                    <div className="glav-section-text-profiles-glav-image">
                        <div className="glav-section-text-profiles-image">
                            <div className="glav-section-text-profiles">
                                <img className="glav-section-text-profile" src={profile} alt="" />
                                <img className="glav-section-text-profile1" src={profile1} alt="" />
                                <img className="glav-section-text-profile2" src={profile2} alt="" />
                            </div>
                            <div className="glav-section-text-profiles-image-text">
                                <img className="glav-section-text-profiles-image-text-image" src={element} alt="" />
                                <p className="glav-section-text-profiles-image-text-p"><b>32k+</b> Happy Client</p>
                            </div>
                        </div>
                        <img src={video} style={{ zIndex: '10' }} alt="" />
                    </div>
                </div>
                <div className="glav-section-glav-image">
                    <img className="glav-section-glav-image1" src={light} alt="" />
                    <img className="glav-section-glav-image2" src={image} alt="" />
                </div>
            </div>
            <div className="qwerty-cards">
                <div className="qwerty-card">
                    <img className="qwerty-card-image" src={desc} alt="" />
                    <div className="qwerty-card-text">
                        <h1 className="qwerty-card-h1">Expertise</h1>
                        <p className="qwerty-card-p">Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service</p>
                    </div>
                </div>
                <div className="qwerty-card">
                    <img className="qwerty-card-image" src={desc1} alt="" />
                    <div className="qwerty-card-text">
                        <h1 className="qwerty-card-h1">Customization</h1>
                        <p className="qwerty-card-p">Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals   </p>
                    </div>
                </div>
                <div className="qwerty-card">
                    <img className="qwerty-card-image" src={desc2} alt="" />
                    <div className="qwerty-card-text">
                        <h1 className="qwerty-card-h1">Service</h1>
                        <p className="qwerty-card-p">We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience.</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default GlavSection