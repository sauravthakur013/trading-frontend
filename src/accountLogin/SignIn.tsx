import React, {CSSProperties, useEffect} from 'react'
import './style.css'
import { httpPost } from '../communication/environment';
import { useNavigate } from 'react-router-dom';



function SignIn({setActivePage}:any) {

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        localStorage.clear();
    },[])

    const handleSubmit = async (event : any) => {
        event.preventDefault();
        event.stopPropagation();
        try {
            const response :any = await httpPost({path:'auth/signin', data:formData});
            console.log(response)
            if(response.data.statusCode === 200) {
                if(!localStorage.getItem(`token`)) {
                     localStorage.setItem(`token`, response.data.user.token);
                     localStorage.setItem(`username`, response.data.user.username);
                }
                navigate('/profile');
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div id='signinContainer'>
        <header id='signInHeader'>SignIn Into Your Account</header>
        <form>
            <div id='inputContainer'>
                <label>Username</label>
                <input type="text" placeholder='username' name='username' required autoComplete='off' onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
            </div>

            <div id='inputContainer'>
                <label>Password</label>
                <input type="text" placeholder='password' name='password' required autoComplete='off' onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </div>

            <button onClick={(e)=>{handleSubmit(e)}}>Login</button>
        </form>
        <div id='optionsUsers' onClick={() => setActivePage("signup")}>New User ? Make An Account</div>
    </div>
  )
}

export default SignIn;