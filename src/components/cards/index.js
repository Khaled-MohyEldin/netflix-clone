import React, {useState, useContext} from "react";
import { Container, Title, Group, Image,
        Frame, Card, BCard, Meta, Button } from "./styles";

export default function Cards({children, ...props}){
    return <Container {...props}>{children}</Container>
}

Cards.Title = ({children, ...props})=>{
    return <Title {...props}>{children}</Title>
}


Cards.Button = ({children, ...props})=>{
    return <Button {...props}>{children}</Button>
}

Cards.Group = ({children, ...props})=>{
    return <Group {...props}>{children}</Group>
}

Cards.Frame = ({children, ...props})=>{
    return <Frame {...props}>{children}</Frame>
}

Cards.Image = ({children, ...props})=>{
    return <Image {...props}>{children}</Image>
}

Cards.Meta = ({children, ...props})=>{
    return <Meta {...props}>{children}</Meta>
}

Cards.Card = function CardsCard ({ src, desc,title, ...props}){
    return <Card src={src}{...props}>
        <div><p>{title}</p><p>{desc}</p></div>
    </Card>
}

Cards.BCard = function CardsCard ({src, children, ...props}){
    return <BCard src={src} {...props}>{children}</BCard>
}

                    