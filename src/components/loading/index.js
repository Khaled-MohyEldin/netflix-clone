import React from "react";
import {Container, Frame, Image, Name} from './styles'

export default function Loading ({children, ...props}){
    return (<Container {...props}>
        <Image src='./images/misc/loading.gif' alt='Loading' />
    </Container>)
}

// Loading.Image = ({ src, alt, children, ...props})=>{
//     return (<Image src='./images/misc/loading.gif' alt={alt} {...props}/>)
// }

// Loading.Name = ({children, ...props})=>{
//     return (<Name {...props}>{children}</Name>)
// }

// Loading.Frame = ({children, ...props})=>{
//     return (<Frame {...props}>{children}</Frame>)
// }

// Spinner styled component
// Lockbody styled component
// Will be a child of the spinner
// A new CC component that will be the release body

// itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)