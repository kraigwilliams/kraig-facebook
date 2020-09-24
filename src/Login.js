import React from 'react'
import facebook from "./images/facebook.png";
import fbText from './images/Facebook-Logo.wine.svg'
import {Button} from '@material-ui/core'
import './Login.css'
import {auth, provider} from './firebase'
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider'


function Login() {
document.title='Login'

const [state,dispatch]=useStateValue()
const signIn= ()=>{
    //sign in
    auth
    .signInWithPopup(provider)
    .then(result=>{
        dispatch({
            type: actionTypes.SET_USER,
            user:result.user
        })
        //console.log(result)
    })
    .catch((error)=>alert(error.message)) 

}

    return (
        <div className='login'>
            <div className='login__logo'>
            <img alt='logo' src={facebook}/>    
            <img alt='logo=-text' src={fbText}/>    
                </div>                         {/* end logo */}
     
<Button type='submit' onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
