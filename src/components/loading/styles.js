import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // max-width: 600px;
    // padding: 0 2em;
    width: 50vw;
    height: 50vh;
    color: #fff;
    margin: 10em auto;
    // border: 2px solid red;
`
export const Frame = styled.div`
    display: flex;
    margin-right: 1em;
`


export const Image = styled.img`
    width: 100%;
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