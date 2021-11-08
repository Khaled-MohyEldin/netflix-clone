import styled from "styled-components"; 

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background-color: black;
    font-size: 16px;
    color: #FFF;
`

export const Title = styled.h2``

export const Head = styled.div`
    margin: 0 auto;
    padding: 1em;
    max-width: 600px;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    cursor: pointer;

    img{
        filter: brightness(0) invert(1);
        width: 24px;
        ${({active})=> active && 'transform: rotate(45deg);'}
        ${({active})=> active && 'transition: transform ease-in 50ms;'}
    }

`
export const Body = styled.p`
    line-height: 1.2;
    padding: 0 1em 1em; 
    font-size: 24px;
    transform: transelateY(-100%);
    transition: transform 2s ease;
    // ${({active})=> active && 'transform: transelateY(100%);'}
`
    
export const Frame = styled.div`
    margin-bottom: 0.4em;
    background-color: #373737;
`
