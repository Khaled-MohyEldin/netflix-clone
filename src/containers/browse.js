import React, {useState, useContext, useEffect, Fragment} from "react";
import { FBContext } from "../context/firebase";
import { signOut } from "firebase/auth"
import ProfilesContainer from './profiles';
import FooterContainer from './footer';
import {Header, Feature, Loading, Cards, Player} from "../components";
import Fuse from 'fuse.js';
import styled from "styled-components"

const Break = styled.div`
    flex-basis: 100%;
    height: 0.5em;
    background-color: #373737;
`;

export default function BrowseContainer({slides}){
    const [profile, setProfile] = useState({}); 
    const [category, setCategory] = useState('series'); 
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [active, setActive] = useState(false);
    const [card, setCard] = useState({});
    const [slideRows, setSlideRows] = useState([]);
    const { auth } = useContext(FBContext);

    const adjustTitle = (text)=> {
        return text === 'Feel Good'? 'feel-good'
        : (text.charAt(0).toLowerCase() + text.slice(1));
    }
    const user = { displayName: 'Khaled', photoURL: "./images/users/4.png" }
    
    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(search).map(({ item }) => item);
        
        if (slideRows.length > 0 && search.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [search])

    return(<>{profile.displayName?
        <>
        <Header src='joker1'>
            <Header.Frame>
                <Header.INFrame>
                    <Header.Logo to='/' src="./images/misc/logo.svg" alt="Netflix"/>
                    <Header.Links  
                        onClick={()=> setCategory('films')} >Films</Header.Links>/
                    <Header.Links
                        onClick={()=> setCategory('series')} >Series</Header.Links>
                </Header.INFrame>
                <Header.INFrame>
                    <Header.Search srchTxt={search} setSearch={setSearch}/>

                    <Header.Profile src={user.photoURL} name={user.displayName} 
                        onClick={()=> signOut(auth)}/>
                </Header.INFrame>
            </Header.Frame>
            <Feature className="inside" >
                <Feature.Title>Watch Joker Now</Feature.Title>
                <Feature.Subtitle>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.
                </Feature.Subtitle>
                <Feature.Button>Play</Feature.Button>
            </Feature>
        </Header>
        <Break />

        <Cards>
            {slideRows.map((items)=> (
            <Fragment key={Math.random()}>
                <Cards.Title>{items.title}</Cards.Title>
                <Cards.Group>
                    {items.data.map((item)=>{
                        const src = `./images/${category}/${adjustTitle(items.title)}/${item.slug}/small.jpg`;
                        return (<Cards.Card src={src} title={item.title} key={Math.random()}
                                desc={item.description} onClick={()=> 
                                {setCard({...item, genre: items.title});setActive(true)}}
                               />
                            )}
                    )}
                </Cards.Group>  
                {active && (card.genre === items.title) && 
                <Cards.BCard src={`./images/${category}/${adjustTitle(card.genre)}/${card.  slug}/large.jpg`} >
                    <Cards.Frame>
                        <h1>{card.title}</h1>
                        <p>{card.description}</p>
                        <p>{+card.maturity<=12? 'PG': card.maturity} : {card.genre}</p>
                        {/* <Cards.Button>Play</Cards.Button> */}
                        <Player>
                            <Player.Button />
                            <Player.Video />
                        </Player>
                    </Cards.Frame>
                    <Cards.Button className="close" onClick={()=>setActive(false)}>X</Cards.Button>
                </Cards.BCard>}
            </Fragment>
            ))}
        </Cards>
        <Break />

        <FooterContainer />
        </>
        : loading? <Loading /> 
        : <ProfilesContainer user={user} setLoading={setLoading} 
        setProfile={setProfile} />}
    </>)
}

// <Player.Button />
// <Player.Video />
// src='./images/{category}/{item.title}/{slug}/small.jpg'
// './images/series/children/spongebob/small.jpg'
// the Extended card to show only in one slide 