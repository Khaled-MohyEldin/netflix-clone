import React from "react";
import {Optform, Accordion} from "../components";
import faqs from '../fixtures/faqs.json'

export default function FaqsContainer(){
    return(<>
        <Accordion>
            <h1>Frequently Asked Questions</h1>
            {faqs.map((item)=> (
                <Accordion.Frame key={item.id} >
                    <Accordion.Head>{item.header}</Accordion.Head>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Frame> ))
            }
        </Accordion>
        <Optform>
            <Optform.Text>
                Ready to watch? Enter your email to create or restart your membership.
            </Optform.Text>
            <Optform.Frame>
                <Optform.Input placeholder="Email address"/>
                <Optform.Button>Get Started 
                    <img src="./images/icons/chevron-right.png" alt="chev" /></Optform.Button>
            </Optform.Frame>
        </Optform>
        </>
    )
}