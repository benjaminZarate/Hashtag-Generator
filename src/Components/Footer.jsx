import React from 'react';
import '../Styles/Footer.css';
import instagram from '../Assets/instagram.png';
import linkedin from '../Assets/linkedin-logo.png';
import github from '../Assets/social.png';

function Footer()
{
    return(
        <footer>
            <div className="footer">
                <div className='footerContainer'>
                    <div className="footerContainerSocials">
                        <a className="footerSocial" href="https://www.instagram.com/hamdev_/" target='_blank' rel="noreferrer">
                            <img className="invert" src={instagram} alt="instagram"/>
                        </a>
                        <a className="footerSocial" href="https://www.linkedin.com/in/benjamin-zarate/" target='_blank' rel="noreferrer">
                            <img className="invert" src={linkedin} alt="linkedin"/>
                        </a>
                        <a className="footerSocial" href="https://github.com/benjaminZarate" target='_blank' rel="noreferrer">
                            <img src={github} alt="github"/>
                        </a>
                    </div>
                    <div style={{display:'flex'}}>
                        <a style={{paddingRight:10, color:'white'}} href="https://benjaminzarate.me/" target='_blank' rel="noreferrer">Portfolio</a>
                        <a style={{color:'white'}} href="https://github.com/benjaminZarate/free-to-play-searcher" target='_blank' rel="noreferrer">Source code</a>
                    </div>
                </div>
                <div style={{alignItems:'center', paddingTop:10, opacity: 1, color: "rgb(156,163, 175)"}}>
                <p style={{fontWeight:500}}>Ham Dev</p> Copyright © 2023
                </div>
            </div>
        </footer>
    );
}

export default Footer;