import React from "react";
import { Container, Title, Subtitle, Button } from "./styles";

export default function Feature({children, ...props}){
    return(
        <Container {...props}>{children}</Container>
    )
}

Feature.Title = ({children, ...props})=>{
    return <Title {...props}>{children}</Title>
}

Feature.Subtitle = ({children, ...props})=>{
    return <Subtitle {...props}>{children}</Subtitle>
}

Feature.Button = ({children, ...props})=>{
    return <Button {...props}>{children}</Button>
}