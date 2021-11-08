import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    padding: 0 2em;
    color: #fff;
    margin: 4em auto;
    // border: 2px solid red;
`
export const Frame = styled.div`
    display: flex;
`

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border: 2px solid red;
    margin-right: 1em;
`

export const Image = styled.img`
    max-width: 50%;
    cursor: pointer;
    filter: brightness(80%);

    &:hover{
        filter: brightness(110%);
    }
`

export const Name = styled.p`
    font-weight: bold;
    font-size: 30px;
    text-align: center;
`