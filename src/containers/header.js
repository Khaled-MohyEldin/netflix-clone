import React from "react";
import {Header} from "../components";


export default function HeaderContainer({children}){
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to='/' src="./images/misc/logo.svg" alt="Netflix"/>
                <Header.Link to='./signin'>Sign In
                </Header.Link>
            </Header.Frame>
            {children}
        </Header>
    )
}