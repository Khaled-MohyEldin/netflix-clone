import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    align-items: center;
    text-align: center;

    &.inside{
        align-items: start;
        text-align: left;
        margin: 3.9em 0 3.9em 3em;
    }
`
export const Title = styled.h1`
    width: 70%; 
    margin-bottom: 0;
    font-size: 2.8rem;
`

export const Subtitle = styled(Title)`
    font-size: 1.5rem;
    font-weight: normal; 
`

export const Button = styled.button`
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    margin: 2em 0;
    padding: 0.6em 1.5em; 

    &:hover{
        color: #fff;
        background: red;
    }
`