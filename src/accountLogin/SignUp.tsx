import React from 'react'
import { httpPost } from '../communication/environment';

function SignUp({setActivePage}:any) {

    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });

    const handleSubmit = async (event : any) => {
        event.preventDefault();
        event.stopPropagation();
        try {
            const response: any = await httpPost({path:'auth/signup', data:formData});
            response.status === 200 ? setActivePage("signin") : console.log(response);
        } catch (error) {
            console.log(error);
        }

    }
  return (
    <div id='signinContainer'>
    <header id='signInHeader'>SignUp Into Your Account</header>
    <form>
        <div id='inputContainer'>
            <label>Username</label>
            <input type="text" placeholder='username' name='username' required autoComplete='off' onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        </div>

        <div id='inputContainer'>
            <label>Password</label>
            <input type="text" placeholder='password' name='password' required autoComplete='off' onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
        </div>

        <button onClick={(e)=>{handleSubmit(e)}}>SignUp</button>
    </form>
    <div id='optionsUsers' onClick={() => setActivePage("signin")}>Exist User ? Login Now</div>
</div>
  )
}

export default SignUp;