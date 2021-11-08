import React from "react";
import {Container, Title, Outer, Frame, Col, Link } from './styles';

 export  default function Footer({children, ...props}){
    return <Container {...props}>{children}</Container>
 }



Footer.Title = ({children, ...props})=>{
    return <Title {...props}>{children}</Title>
}

Footer.Outer = ({children, ...props})=>{
    return <Outer {...props}>{children}</Outer>
}
Footer.Frame = ({children, ...props})=>{
    return <Frame {...props}>{children}</Frame>
}

Footer.Col = ({children, ...props})=>{
    return <Col {...props}>{children}</Col>
}

Footer.Link = ({children, ...props})=>{
    return <Link {...props}>{children}</Link>
}

