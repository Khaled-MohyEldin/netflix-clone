import styled from "styled-components"

export const Container = styled.div``
   
export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 20px;
`
export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
    }
`
export const Close = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 22px;
    height: 22px;
    opacity: 0.3;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    
    &:hover { opacity: 1 }
    
    &::before,
    &::after {
        position: absolute;
        left: 10px;
        top: 0;
        content: ' ';
        height: 22px;
        width: 2px;
        background-color: #fff;
    }
    
    &::before { transform: rotate(45deg) }

    &::after { transform: rotate(-45deg) }
`;

export const Button = styled.button`
    cursor: pointer;
    width: max-content;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    margin: 2em 0;
    padding: 0.7em 2em; 
    color: #fff;
    background: red;
    &:hover{
        transform: scale(1.1);
    }
`