import React from "react";
import {Container, Frame, User, Image, Name} from './styles'

export default function Profiles ({children, ...props}){
    return (<Container {...props}>
        {children}
    </Container>)
}

Profiles.Frame = ({children, ...props})=>{
    return (<Frame {...props}>{children}</Frame>)
}

Profiles.User = ({children, ...props})=>{
    return (<User {...props}>{children}</User>)
}

Profiles.Image = ({ src, children, ...props})=>{
    return (<Image src={src} alt='userPhoto' {...props}/>)
}

Profiles.Name = ({children, ...props})=>{
    return (<Name {...props}>{children}</Name>)
}

