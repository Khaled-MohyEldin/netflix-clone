import React, {useState, useEffect, useRef} from 'react'
import {Background, Logo, CTA, Links,
     Container, INFrame, Profile, Search, Input} from './styles'
import {Link as RouterLink} from 'react-router-dom'

export default function Header({children, ...props}) {
    return (
        <Background {...props}>
            {children}
        </Background>)
}

Header.Logo = ({to, ...props})=>{
    return( 
        <RouterLink to='./'>
            <Logo {...props} />
        </RouterLink>)
}

Header.Link = ({to, children, ...props})=>{
    return <CTA to='./signin' {...props}> {children} </CTA>
}

Header.Links = ({to, children, ...props})=>{
    return <Links to='./signin' {...props}> {children} </Links>
}

Header.Frame = ({children, ...props})=>{
    return (<Container {...props}>{children}</Container>)
}

Header.INFrame = ({children, ...props})=>{
    return (<INFrame {...props}>{children}</INFrame>)
}

Header.Profile = ({ src, name, onClick, ...props})=>{
    return (<Profile {...props}>
        <img src={src} alt="profile picture" />
        <div className="drop">
            <div className="row">
                <img src={src} alt="profile picture" />
                <span>{name}</span>
            </div>
            <RouterLink className="rlnk" to='./signin' onClick={onClick} >
                Sign out</RouterLink>
        </div>
    </Profile>)
}

Header.Search = function HeaderSearch ({ srchTxt, setSearch, ...props}){
    const [active, setActive] = useState(false); 
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    }, [active])

    return (<Search  { ...props} >
        <Input value={srchTxt} active={active} ref={inputRef}
            onChange={(e)=> setSearch(e.target.value)} 
            placeholder="Search files and series" />

        <img src="./images/icons/search.png" alt="searchIcon" 
            onClick={()=>setActive(!active)}/>
    </Search>)
}


// what Next 
// Header select menu Language