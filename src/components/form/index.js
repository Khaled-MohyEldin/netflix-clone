import React from "react";
import { Link as RouterLink } from 'react-router-dom'; 
import {Container, Title, Input, Error, Button, Link, Text } from './styles';

 export  default function FORM({children, ...props}){
    return  <Container {...props}>{children}</Container>
}


FORM.Title = ({children, ...props})=>{
    return <Title {...props}>{children}</Title>
}

FORM.Input = ({children, ...props})=>{
    return <Input {...props} >{children}</Input>
}

FORM.Error = ({children, ...props})=>{
    return <Error {...props}>{children}</Error>
}

FORM.Button = ({ children, ...props})=>{
    return <Button {...props}>{children}</Button>
}

FORM.Link = ({children, ...props})=>{
    return <RouterLink className="router" to='./signup'>
            <Link {...props}>{children}</Link>
        </RouterLink>
}

FORM.Text = ({children, ...props})=>{
    return <Text {...props}>{children}</Text>
}

//LOGIC
// controlled form 
// check vlaidity 
// display error message



