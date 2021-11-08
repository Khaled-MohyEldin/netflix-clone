import React, {useState, useContext} from "react";
import { FBContext } from "../context/firebase";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import {Form} from "../components";

export default function Signin(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(''); 
    const history = useHistory();
    const {auth} = useContext(FBContext);

    const isValid = email ==='' || password ===''; 

    const handleSumbit = (e)=>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(()=>{
                history.push('./browse');
            }).catch((error) => {
                setEmail('');
                setPassword('');
                setError(error.message)
            });
    }

    return (<>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>

                {error && <Form.Error>{error}</Form.Error>}

                <Form.Input value={email} type='text' placeholder='Email address' 
                    onChange={(e)=> setEmail(e.target.value)}/>

                <Form.Input value={password} type='password' placeholder='Password' 
                    onChange={(e)=> setPassword(e.target.value)}/>

                <Form.Button disabled={isValid}  onClick={handleSumbit}>Sign in</Form.Button>

                <Form.Text>New to Netflix? <Form.Link>Sign up now</Form.Link></Form.Text>

                <Form.Text className='smaller' >
                    This page is protected by Google reCAPTCHA.
                </Form.Text>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}

// what next 
// checkbox for Remember Me 
// check email validity 

