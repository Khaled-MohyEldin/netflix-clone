import styled from "styled-components"; 

export const Container = styled.div`
    margin: 0;
    background-color: black;
    font-size: 16px;
    color: #373737;
`
export const Title = styled.h3``

export const Outer = styled.div`
    margin: 0 auto;
    padding: 1em 3em;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    // border: 2px solid red;
`
export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
    
export const Col = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
export const Link = styled.a`
    display: block;
    cursor: pointer;
    margin: 1.5em 0;
    
    &:hover{
        text-decoration: underline;
        filter: brightness(200%);
    }
`