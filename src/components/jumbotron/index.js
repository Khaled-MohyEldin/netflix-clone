import React from "react";
import {Container, Frame, Title, Subtitle, Image} from './styles'

export default function Jumbotron ({children, direction,  ...props}){
    return <Container direction={direction} {...props}>{children}</Container>
}

Jumbotron.Frame = ({children, ...props})=>{
    return(
        <Frame {...props}>{children}</Frame>
    )
}

Jumbotron.Title = ({children, ...props})=>{
    return(
        <Title {...props}>{children}</Title>
    )
}

Jumbotron.Subtitle = ({children, ...props})=>{
    return(
        <Subtitle {...props}>{children}</Subtitle>
    )
}


Jumbotron.Image = ({src, alt, ...props})=>{
    return(
        <Image src={src} alt={alt} {...props}/>
    )
}