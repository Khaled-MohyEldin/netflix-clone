import styled from 'styled-components'

export const Container = styled.div`
    max-width: 600px;
    padding: 0 2em;
    color: #fff;
    margin: 2em auto;
`

export const Text = styled.p`
    font-size: 1.3rem;
`

export const Frame = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;

    @media(max-width: 600px){
        flex-direction: column;
        margin-top: 2em;
    }
`

export const Input = styled.input`
    height: 50px;
    margin: 0;
    border: 0;
    font-size: 1.1rem;
    padding: 0 1em;
    width: 65%;
    box-sizing: border-box;

    @media(max-width: 600px){
        width: 100%;
    }
`

export const Button = styled.button`
    height: 50px;
    margin: 0;
    border: 0;
    border-radius: 0;
    background-color: red;
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;
    padding: 0.5em;
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height: 60%;
        margin-left: 0.5em;
        filter: invert(1);
    }

    @media(max-width: 600px){
        margin-top: 0.8em;
    }
    
    &:hover{
        opacity: 0.7;
    }
`