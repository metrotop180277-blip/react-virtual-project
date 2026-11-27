import React from "react";
import software from './img/software.png'
import design from './img/design.png'
import review from './img/review(2).png'
import videoConsole from './img/video-console.png'
import party from './img/party.png'
import theatre from './img/theatre.png'
import './OurServiceSection.css'

function OurServiceSection() {
    return (<>
        <section className="OurServiceSection">
            <div className="glav-OurServiceSection-text">
                <div className="OurServiceSection-text">
                    <p className="OurServiceSection-text-p">OUR SERVICE</p>
                    <h1 className="OurServiceSection-text-h1">Our Service</h1>
                </div>
                <p className="glav-OurServiceSection-text-p">We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.</p>
            </div>
            <div className="OurServiceSection-cards">
                <div className="OurServiceSection-card">
                    <img className="OurServiceSection-card-image" src={software} alt="" />
                    <div className="OurServiceSection-card-text">
                        <h1 className="OurServiceSection-card-h1">VR Development</h1>
                        <p className="OurServiceSection-card-p">From concept to creation, our team of VR developers will bring your vision to life.</p>
                    </div>
                </div>
                <div className="OurServiceSection-card1">
                    <img className="OurServiceSection-card-image" src={design} alt="" />
                    <div className="OurServiceSection-card-text">
                        <h1 className="OurServiceSection-card-h1">VR Design</h1>
                        <p className="OurServiceSection-card-p">Our talented VR designers will create immersive and engaging environments that will captivate your audience.</p>
                    </div>
                </div>
                <div className="OurServiceSection-card2">
                    <img className="OurServiceSection-card-image" src={review} alt="" />
                    <div className="OurServiceSection-card-text">
                        <h1 className="OurServiceSection-card-h1">VR Consulting</h1>
                        <p className="OurServiceSection-card-p">Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.</p>
                    </div>
                </div>
                <div className="OurServiceSection-card3">
                    <img className="OurServiceSection-card-image" src={videoConsole} alt="" />
                    <div className="OurServiceSection-card-text">
                        <h1 className="OurServiceSection-card-h1">VR Games</h1>
                        <p className="OurServiceSection-card-p">We offer a wide selection of VR games that are suitable for players of all ages and skill levels.</p>
                    </div>
                </div>
                <div className="OurServiceSection-card4">
                    <img className="OurServiceSection-card-image" src={party} alt="" />
                    <div className="OurServiceSection-card4-text">
                        <h1 className="OurServiceSection-card4-text-h1">VR Events</h1>
                        <p className="OurServiceSection-card4-text-p">Make your next event unforgettable with our VR event services.</p>
                        <div className="input-glav-section1">
                        <button className="OurServiceSection-card4-text-button" type="submit">LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div className="OurServiceSection-card5">
                    <img className="OurServiceSection-card-image" src={theatre} alt="" />
                    <div className="OurServiceSection-card-text">
                        <h1 className="OurServiceSection-card-h1">VR Entertainment</h1>
                        <p className="OurServiceSection-card-p">reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default OurServiceSection