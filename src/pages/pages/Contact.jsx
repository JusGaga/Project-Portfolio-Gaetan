import React from 'react';
import "../../styles/pages/Contact.css"
import Scroll from "../../components/Scroll";
import UnderTitle from "../../Img/UnderTitle.svg";
import {Link} from "react-router-dom";
import ContactMe from "../../Img/ContactMe.png";
import planet4 from "../../Img/planet4.svg";
import planet5 from "../../Img/planet5.svg";

const Contact = () => {
    return (
        <>
            <div className={"planet4"}>
                <img src={planet4} alt="planet4"/>
            </div>
            <div className={"middlePageHome4"}>
                <Scroll />
                <div className={"ContainerContact"}>
                    <div className="Present3">
                        <h1>Contact Me</h1>
                        <img className="underTitle" src={UnderTitle}></img>
                        <h2><a href="#FormContact">Mail : gaetan3107@gmail.com</a><br/><br/><br/>phone : 07 77 95 15 80</h2>
                        <div><Link to="#">Contact form</Link></div>
                    </div>

                    <div className={"imgAboutMe"}>
                        <img className={"ContactMeImg"} src={ContactMe} alt="Image Contact"/>
                    </div>
                </div>
            </div>
            <div className={"planet5"}>
                <img src={planet5} alt="planet5"/>
            </div>
            <div className={"line4"}></div>
        </>
    );
};

export default Contact;
