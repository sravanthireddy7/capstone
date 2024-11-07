import './login-form.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginUserContext, loginUserFlagContext } from '../../App';


const LoginForm = () => {

    const [apidata, setapidata] = useState([])
    const { setLoggedinUser, test } = useContext(loginUserContext)
    const { setLoggedinUserFlag } = useContext(loginUserFlagContext)    
    const [userFlag, setuserFlag] = useState(false)

    useEffect(() => {
        (async () => {const res=await axios.get('http://localhost:4040/users');setapidata(res.data)})()
    }, [])

    let loginFormValues = {
        userName: '',
        password: ''
    }
    const { register, control, handleSubmit, formState } = useForm(loginFormValues)
    const { errors } = formState;
    const { name, ref, onChage, onBlur } = register('userName')
    const navigate = useNavigate()

    // function LoginFormDetails(){
    //     // alert('i am func')
    //     alert(userName.current.value)
    //     alert(password.current.value)
    // }

    function onFormSubmit(data) {
        
        const user = apidata.find(item => item.user === data.userName && item.password === data.password);
         if (user) { 
            setLoggedinUserFlag(true); 
            setLoggedinUser(data.userName); 
            navigate('/items');
         } else { 
            alert('Invalid credentials'); 
            setuserFlag(true);
         }

    }

    return (
        <div className="wrapper">
            {/* <div className="logo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt=""/>
        </div> */}
            <div className="text-center mt-4 name fs-2 " style={{ borderRadius: '50%', color: 'white', backgroundColor: '#CDC1FF', color: 'black' }}>
                Login Form
            </div>
            <form className="p-3 mt-3" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="userName" id="userName" placeholder="Username"
                        {...register('userName', { required: 'Username is Required' })} />
                </div>
                {control.getFieldState('userName').isDirty &&
                    <div id='info' className='form-text m-2' style={{ color: 'red' }}>{errors.userName?.message}</div>}
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="password" id="pwd" placeholder="Password"
                        {...register('password', { required: 'Password is Required' })} />
                </div>
                {control.getFieldState('password').isDirty &&
                    <div id='info' className='form-text m-2' style={{ color: 'red' }}>{errors.password?.message}</div>}
                {/* <button className="btn mt-3" 
            // onClick={()=>LoginFormDetails()}
            >Login</button> */}
                <button type='submit' className='btn' style={{ backgroundColor: '#CDC1FF' }}>Login</button>
            </form>
            {/* <DevTool control={control}></DevTool> */}
            <div className="text-center fs-6">
                <a href="#">Forget password?</a> or <Link to="/register">Sign up</Link>
            </div>
        </div>
    );
};

export default LoginForm;

