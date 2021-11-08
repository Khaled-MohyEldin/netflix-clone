import React, { useState, useContext } from "react";
import ReactDOM from 'react-dom';
import { Container, Overlay, Inner, Button, Close} from "./styles";

const PlayerContext = React.createContext(); 

export default function Player({children, ...props}){
    const [show, setShow] = useState(false)
    return ( 
    <PlayerContext.Provider value={{show, setShow}}>
        <Container {...props}>{children}</Container>
    </PlayerContext.Provider>)
}

Player.Video = function PlayerVideo({...props}){
    const {show, setShow} = useContext(PlayerContext);

    return show ? ReactDOM.createPortal(
        <Overlay onClick={() => setShow(false)} {...props}>
            <Inner>
                <video id="netflix-player" autoPlay controls>
                    <source src="/videos/bunny.mp4" type="video/mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>,
        document.body): null;
}


Player.Button = function PlayerButton({ ...props }){
    const { show, setShow } = useContext(PlayerContext);

    return <Button {...props} onClick={() => setShow(!show)}>Play</Button>;
}


                    