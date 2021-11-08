import React from 'react';
import { Header, Profiles } from '../components';


export default function ProfilesContainer({ user, setLoading, setProfile }) {
    return (<>
        <Header.Frame>
            <Header.Logo to='/' src="./images/misc/logo.svg" alt="Netflix"/>
        </Header.Frame>
        <Profiles>
            <h1>Who's watching</h1>
            <Profiles.Frame>
                <Profiles.User
                    onClick={() =>{
                        setLoading(true); 
                        setTimeout(()=>{
                            setLoading(false);
                            setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL
                            })
                        },500)
                    }}
                >
                    <Profiles.Image src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.Frame>
        </Profiles>
    </>)
}