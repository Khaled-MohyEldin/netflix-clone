import React from "react";
import {Footer} from "../components";


export default function FooterContainer(){
    return (
        <Footer>
            <Footer.Outer>
                <Footer.Title>
                    Questions? contact us 
                </Footer.Title>
                <Footer.Frame>
                    <Footer.Col>
                        <Footer.Link>FAQs</Footer.Link>
                        <Footer.Link>Investor relations</Footer.Link>
                        <Footer.Link>Privacy</Footer.Link>
                        <Footer.Link>Speed Test</Footer.Link>
                    </Footer.Col>
                    <Footer.Col>
                        <Footer.Link>Help Center</Footer.Link>
                        <Footer.Link>Jobs</Footer.Link>
                        <Footer.Link>Cookie Pref</Footer.Link>
                        <Footer.Link>Legal Notice</Footer.Link>
                    </Footer.Col>
                    <Footer.Col>
                        <Footer.Link>Account</Footer.Link>
                        <Footer.Link>Ways to Watch</Footer.Link>
                        <Footer.Link>Corporate</Footer.Link>
                        <Footer.Link>Only</Footer.Link>
                    </Footer.Col>
                    <Footer.Col>
                        <Footer.Link>Media Center</Footer.Link>
                        <Footer.Link>Terms of Use</Footer.Link>
                        <Footer.Link>Contact Us</Footer.Link>
                    </Footer.Col>
                </Footer.Frame>
                <p>Netflix Egypt</p>
            </Footer.Outer>
        </Footer>
    )
}
