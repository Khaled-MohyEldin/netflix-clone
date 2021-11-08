import styled from "styled-components"

// export const = styled.``

export const Container = styled.div`
    display: flex;
    flex-direction: ${({direction})=> direction};
    justify-content: space-between;
    align-items: center;
    color: #FFF;
    padding: 3em;
    // border: 1px solid red;
    // height: 40vh; 
    max-width: 1000px; 
    margin: auto;

    @media(max-width: 900px){
        flex-direction: column;
        height: auto;
    }
`

export const Frame =styled.div`
    display: flex;
    flex-direction: column;
    width: 50%; 

    @media(max-width: 900px){
        width: 100%;
        text-align: center;
    }
`
export const Title = styled.h2`
    font-size: 3rem;
    margin-bottom: 0;
`

export const Subtitle = styled.h3`
    font-size: 1.8rem;
`

export const Image= styled.img`
    width: 45%;
    height: auto;

    @media(max-width: 900px){
        width: 100%;
    }
`