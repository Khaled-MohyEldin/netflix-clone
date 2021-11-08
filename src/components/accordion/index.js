import React, {useState, useContext, useEffect, createContext } from "react";
import {Container, Title, Frame, Head, Body} from './styles';

const ToglContext = createContext();

 export default function Accordion({children, ...props}){
     return <Container {...props}>{children}</Container>
    }
    
Accordion.Title = ({children, ...props})=>{
    return <Title {...props}>{children}</Title>
}

Accordion.Frame = function AccordionFrame ({children, ...props}){
    const [active, setActive] = useState(false);

    return ( 
        <ToglContext.Provider value={{active, setActive}}>
            <Frame {...props}>{children}</Frame>
        </ToglContext.Provider>)
}

Accordion.Head = function AccordionHead ({onClick, children, ...props}){

    const {active, setActive} = useContext(ToglContext);

    return <Head {...props} active={active} onClick={()=> setActive(!active)} >
                {children}
            <img src="./images/icons/add.png" alt="open" />
        </Head>
}

Accordion.Body = function AccordionBody ({children, ...props}){
    const {active} = useContext(ToglContext);
    

    return <>{active && <Body active={active} {...props}>{children}</Body>}</>
}


// what we need 
// body show and hide smoothly ()