import React from "react";
import {Optform, Feature} from "../components";
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import JumbotronContainer from '../containers/jumbotron'
import FaqsContainer from '../containers/faqs'
import styled from "styled-components"

const Break = styled.div`
    flex-basis: 100%;
    height: 0.5em;
    background-color: #373737;
`;

export default function Home(){
    return(
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
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
                </Feature>
            </HeaderContainer> 
            <Break />
            <JumbotronContainer>
                <FaqsContainer />
            </JumbotronContainer>
            <Break />
            <FooterContainer />
        </>
    )
}