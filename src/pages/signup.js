import React, {useState, useContext} from "react";
import { FBContext } from "../context/firebase";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import {Form} from "../components";

export default function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState(''); 
    const [password2, setPassword2] = useState(''); 
    const [error, setError] = useState(''); 
    const history = useHistory();
    const {auth} = useContext(FBContext);



    const isValid = email ==='' || name ==='' || password2 ==='' || password1 ===''; 
    
    const handleSumbit = (e)=>{    
        e.preventDefault();
        // if there's an error, populate the error state
        const matches = (password1 === password2) ? true: false; 
        if(!matches) setError('Passwords does not match') 
        // call in here to firebase to authenticate the user
        createUserWithEmailAndPassword(auth, email, password1)
        .then(({user}) =>
            updateProfile(user, {
                displayName: name,
                photoURL: Math.floor(Math.random() * 5 ) + 1,
            }).then(() => {
                history.push('./browse')
            })
        
        ).catch((error) => {
            setEmail('');
            setPassword1('');
            setPassword2('');
            setError(error.message)
        });
    
    }

    return (<>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>

                {error && <Form.Error>{error}</Form.Error>}

                <Form.Input value={name} type='text' placeholder='Name'
                    onChange={(e)=> setName(e.target.value)} />

                <Form.Input value={email} type='text' placeholder='Email address'
                    onChange={(e)=> setEmail(e.target.value)} />

                <Form.Input value={password1} type='password' placeholder='Password'
                    onChange={(e)=> setPassword1(e.target.value)} />

                <Form.Input value={password2} type='password' placeholder='Confirm Password'
                    onChange={(e)=> setPassword2(e.target.value)} />

                <Form.Button disabled={isValid} onClick={handleSumbit}>Sign Up</Form.Button>

                <Form.Text>Already a user? <Form.Link>Sign in now</Form.Link></Form.Text>
                <Form.Text className='smaller' >This page is protected by Google reCAPTCHA.</Form.Text>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}

// what next 
// checkbox for Remember Me 
// check email vlaidity 
// check password strength

