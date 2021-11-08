import React,  {Fragment} from "react";
import {Jumbotron} from "../components";
import jumbo from "../fixtures/jumbo.json"
import styled from "styled-components"

const Break = styled.div`
    flex-basis: 100%;
    height: 0.5em;
    background-color: #373737;
`;

export default function JumbotronContainer({children}){
   
    return(<>        
            { jumbo.map((item)=> (
            <Fragment key={item.id}>
            <Jumbotron direction={item.direction}>
                
                <Jumbotron.Frame>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
                </Jumbotron.Frame>

                <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron>
            <Break />
            </Fragment>
        ))}
        
        {children}
        </>
    )    
}


 


