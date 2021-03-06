import React from "react";
import {Route, Redirect} from "react-router-dom";

export function IsUserRedirect({user, loggedinPath, children, ...props}){
    return(
        <Route 
            {...props}
            render={()=>{
                if(!user) return null;

                if(user){
                    return(
                        <Redirect to ={{pathname: loggedinPath}} />
                    )};

                return null;
            }} />
    ) 
}

export function ProtectedRoute({user, children, ...props}){
    return(
        <Route 
            {...props}
            render={({location})=>{
                if(user) return children;

                if(!user){
                    return(
                        <Redirect to={{pathname: 'signin', state: {from: location}}}/>
                    )};

                return null; 
            }}/>
    )
}