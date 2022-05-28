/* ------ IMPORTING FILES ------- */
import '../css/navigation.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col,Row } from 'react-bootstrap';
import home from '../assets/home.png';
import one from '../assets/one.png'
import group from '../assets/group.png'
import broadcast from '../assets/broadcast.png'
import chat from '../assets/chatting.png'

// Function to provide the user with 3 different choices
// one on one call, group call and broadcast

function Mode() {
    return (

        <div class="landing-page">           
            
            {/* Welcome Page */}
            <section className="main-welcome">

                 <Row>
                    <Col className='welcome' sm={6}>
                        <div>
                            <h1>Welcome to </h1>
                            <h1>E-health platform.</h1>
                            <p>A simple and elegant way to connect with your doctors!</p>
                            <button class="homeButton" onClick={() => window.location.replace("/#main-choice")}>Get Started </button>
                        </div>
                    </Col>

                    <Col className='image' sm={6}>
                        <div>
                            <img src={home} class="d-none d-md-block about-img"></img>
                        </div>
                    </Col>
                </Row>

            </section>

            {/* Choices */}
            <section id="main-choice">
                <div className="mode-choice">

                    <div class="row mode-heading">
                        <div className="heading">
                            <h1>Make a Call!</h1>
                            <p>Connect with your doctors in four different ways!</p>
                        </div>
                    </div>

                    <Row className="mode-cards">
                       
                        <Col className="eachCard" sm={12} md={3}>
                            <div>
                                <Card className='customCard'>
                                    <Card.Img id='customCardImg' variant="top" src={one} />
                                    <Card.Body id='customCardText'>
                                        <Card.Title>One on One Call</Card.Title>
                                        <button class="choiceButton" onClick={() => window.location.replace("/CreateRoom")}>
                                            Get Started
                                        </button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        
                        <Col className="eachCard" sm={12} md={3} >
                            <div>
                                   <Card className='customCard'>
                                    <Card.Img id='customCardImg' variant="top" src={group} />
                                    <Card.Body id='customCardText'>
                                        <Card.Title>Group Call</Card.Title>
                                        <button class="choiceButton" onClick={() => window.location.replace("/CreateRoomGroup")}>
                                            Get Started
                                        </button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        <Col className="eachCard" sm={12} md={3}>
                            <div>
                                <Card className='customCard'>
                                    <Card.Img id='customCardImg' variant="top" src={chat} />
                                    <Card.Body id='customCardText'>
                                        <Card.Title>Chatting</Card.Title>
                                        <button class="choiceButton" onClick={() => window.location.replace("/ChatModes")}>
                                            Get Started
                                        </button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        
                        <Col class="eachCard" sm={12} md={3}>
                            <div>
                                <Card className='customCard'>
                                    <Card.Img id='customCardImg' variant="top" src={broadcast} />
                                    <Card.Body id='customCardText'>
                                        <Card.Title>Broadcast</Card.Title>
                                        <button class="choiceButton" onClick={() => window.location.replace("/CreateRoomBroadcast")}>
                                            Get Started
                                        </button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                    </Row>

                </div>
            </section>  
            
            {/* Footer */}
            <footer class = "text-center footer">
                <p> This site is arranged by Koriciza Bel Floret
                   {/*  <a href = "https://www.linkedin.com/in/sonal-kushwaha/" target="_blank">
                        <span> Sonal Kushwaha </span>
                    </a>
                    <br></br>
                    <span>Last updated on July 12, 2021</span>
                    <p> &copy; 2021</p> */}
                </p>
            </footer>



        </div>
    );
}

export default Mode;