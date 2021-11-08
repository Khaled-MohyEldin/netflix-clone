import styled from "styled-components"; 


export const Container = styled.div`
    margin: 0 auto 2em;
    padding: 3em 3em 8em ;
    background-color: rgba(0,0,0,0.7);
    font-size: 16px;
    width: 350px;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: start;
`
export const Title = styled.h1``

export const Error = styled.div`
    background-color: orange;
    padding: 1em;
    border-radius: 5px;
`

export const Input = styled.input`
    padding: 1em;
    font-size: 16px;
    margin: 1.5em 0 0;
    border: none;
    border-radius: 5px;
    
    &:last-of-type{
        margin: 1.5em 0 3em;
    }
`
export const Button = styled.button`
    background-color: red;
    border: none;
    padding: 1em 2.2em;
    color: #fff;
    font-size: 16px;
    font-weight: bold;

    &:disabled{
        background-color: gray;
    }

    &:hover{
        opacity: 0.9;
    }
`
export const Text = styled.p`
    color: grey;

    &.smaller{
        font-size: 15px;
    }
`
    
export const Link = styled.span`
    text-decoration: none;
    cursor: pointer;
    color: white;
    &:hover{
        text-decoration: underline;
        filter: brightness(200%);
    }
`