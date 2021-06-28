import React,{useState} from 'react';
import GoogleLogin from 'react-google-login';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function SignIn() {

    const history = useHistory();
  

    // const [name, setName] = useState("")
    // const [email, setEmail]= useState('')
    // // const [url , setUrl]=useState('')

    const responseGoogle =(response)=>{
        // setName(response.profileObj.name);
        // setEmail(response.profileObj.email);
        history.push("/homepage")

        
        console.log(response)
    }
    return (
        <div className='google' style={{textAlign:"center",paddingTop:"40px"}}>
          <h1>Login with google</h1> 
         
         
         
         <GoogleLogin
         
    clientId="48441982706-24n18ghim2k46ep2fhmsae7jv5hsc666.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    
        </div>
        
    )
}

export default SignIn
