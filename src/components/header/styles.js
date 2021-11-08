import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'


export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #cccccc;
    background-image: url(${({ src })=> src ? `./images/misc/${src}.jpg` 
        :'./images/misc/home-bg.jpg'});

    background-position: ${({ src })=> src? 'top center' :'top left'};
    bachkground-size: cover;
    background-repeat: no-repeat;
    padding: 0 0 4em;
`
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 3em;
    height: 64px;
    padding: 18px 0;
`
export const INFrame = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`


export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 3em; 
`

export const Links = styled.a`
    cursor: pointer;
    color: white;
    text-decoration: none;
    font-size: 18px;
    text-shadow: 0 0 10px rgba(0,0,0,0.2);

    &:hover{
        transform: scale(1.1);
    }
`

export const CTA = styled(RouterLink)`
    text-decoration: 0;
    background-color: red;
    color: #FFF;
    font-weight: bold;
    padding: 0.5em 1.2em;
    border-radius: 5px;
`
export const Profile = styled.div`
    position: relative;

    img{ height: 30px; }
    
    .drop{
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 2em;
        right: 1em;
        padding: 1em;
        gap: 0.7em;
        opacity: 0;
        background-color: rgba(0,0,0,0.8);
    }
    .row{
        display: flex;
        gap: 0.5em;
        align-items: center;
    }
    
    .rlnk{
        text-decoration: none;
        cursor: pointer;
        color: white;
        &:hover{ color: red;}
    }

    &:hover .drop{
        opacity: 1;
    }

`

export const Search = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img{
        filter: brightness(0) invert(1);
        height: 30px;
    }
`

export const Input = styled.input`
    margin: 0;
    padding: 0.5em 1.2em;
    font-size: 16px;
    border-radius: 5px;
    margin-right: 1em;
    border: none;
    transition: width 200ms ease-in;
    width: ${ ({active})=> active? '200px': '0px'};
    opacity: ${ ({active})=> active? '1': '0'} ;
`
