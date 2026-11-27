import React from "react";
import video1 from './img/Video(1).png'
import image1 from './img/Image(1).png'
import bg from './img/Bg.png'
import light1 from './img/Light(1).png'
import vector from './img/Vector.png'
import './AboutSection.css'


function AboutSection() {
    return (<>
        <section className="about">
            <div className="about-images">
                <img className="about-image" src={light1} alt="" />
                <img className="about-image1" src={bg} alt="" />
                <img className="about-image2" src={image1} alt="" />
                <img className="about-image3" src={video1} alt="" />
            </div>
            <div className="about-glav-text">
                <div className="about-text">
                    <div className="about-pod-glav-text">
                        <div className="about-text-pod-text">
                            <p className="about-text-pod-text-p"><b>ABOUT US</b></p>
                        </div>
                        <h1 className="about-pod-glav-text-h1">Bring your events to life like never before with our VR services.</h1>
                    </div>
                    <p className="about-text-p">VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>
                </div>
                <div className="about-glav-text-images">
                    <div className="about-glav-text-image-div"><img className="about-glav-text-image" src={vector} alt="" /><p className="about-glav-text-image-p">Cutting-Edge Technology</p></div>
                    <div className="about-glav-text-image-div"><img className="about-glav-text-image1" src={vector} alt="" /><p className="about-glav-text-image-p1">Versatile Applications</p></div>
                    <div className="about-glav-text-image-div"><img className="about-glav-text-image2" src={vector} alt="" /><p className="about-glav-text-image-p2">Affordable and Accessible</p></div>
                </div>
                <div className="input-glav-section1"><button className="about-glav-text-button">READ MORE</button></div>
            </div>
        </section>
    </>)
}

export default AboutSection