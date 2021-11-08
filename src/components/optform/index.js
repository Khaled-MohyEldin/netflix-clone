import React from "react";
import {Container, Text, Frame, Input, Button } from './styles'

export default function Optform ({children, ...props}){
    return <Container {...props}>{children}</Container>
}

Optform.Text = ({children, ...props})=>{ 
    return <Text {...props} >{children}</Text>
}

Optform.Frame = ({children, ...props})=>{
    return(
        <Frame {...props}>{children}</Frame>
    )
}

Optform.Input  = ({value, onChange, placeholder, ...props})=>{ 
    return <Input value={value} onChange={onChange} placeholder={placeholder} {...props}/>
}

Optform.Button  = ({children, ...props})=>{ 
    return <Button {...props}> {children} </Button>
}