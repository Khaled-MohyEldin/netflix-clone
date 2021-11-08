import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em auto;
    padding: 2em;
`
   
export const Frame = styled(Container)`
// position: relative;
margin: 0;
padding: 0;
width: 40%;
p{
    line-height: 1.3;
    font-size: 18px;
    span{ color: red;}
}
`

export const BCard = styled.div`
    background-image: url(${({src}) => src});
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    postion: relative;
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    max-width: 100%;

    .close{
      border-radius: 50%;
      padding: 5px 10px;
      width: max-content;
      height: max-content;
      position: absolute;
      right: 75px;
    }
`

export const Title = styled.h1`
    margin-top: 2em;
    letter-spacing: 2px;
    &:first-of-type{ margin-top: 0;}
`
export const Image = styled.img``
    
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

export const Group = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    min-height: 120px;
    gap: 0.6em;
`
export const Meta = styled.div``

export const Card = styled.div`
    background-image: url(${({src}) => src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-width: 200px;
    min-height: 150px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
    transition: transform 0.1s linear;
    &:hover{ transform: scale(1.2) }

    div{
        background-color: rgba(0,0,0,0.7);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        z-index: -1;
        min-width: 200px;
        width: 100%;
        min-height: 75px;
        opacity: 0;
    }
    p{
        font-size: 12px;
        margin: 8px;
    }
    &:hover div{
        opacity: 1;
        color: white;
    }
`