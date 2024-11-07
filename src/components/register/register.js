import { useEffect, useRef, useState } from 'react';
import './register.css';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
    const navigate = useNavigate()
    const [userList, setuserList] = useState()
    const [userFlag, setuserFlag] = useState()
    const [flag, setFlag] = useState(true)
    const [userDetails, setUserDetails] = useState()

    let registerFormValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cPassword: ''
    }
    const { register, control, handleSubmit, formState, getValues } = useForm(registerFormValues)
    const { errors } = formState;
    // const {name,ref,onChage,onBlur}=register('FirstName')

    // function LoginFormDetails(){
    //     // alert('i am func')
    //     alert(userName.current.value)
    //     alert(password.current.value)
    // }
    useEffect(() => {
        (async () => {
            let res = await axios.get('http://localhost:4040/users/')
            setuserList(res.data)
        })()
    }, [])
    useEffect(() => {
        console.log(userDetails)
        if (userFlag == false) {
            axios.post('http://localhost:4040/users/', userDetails)
            .then(()=>{
                alert('Registered successfully')
            navigate('/login')
            })
            
        }
    }, [userFlag,userDetails,navigate])


    function onFormSubmit(data) {
        alert('Validation')
        if (data.password === data.cPassword) {
            const userExists = userList.some(item =>
                item.emailid === data.email ||
                (item.user.split(' ').includes(data.firstName) && item.user.split(' ').includes(data.lastName))
            );

            if (userExists) {
                alert('User with the given email or name already exists');
                setuserFlag(true);
            } else {
                setuserFlag(false);
                const userData = {
                    "user": `${data.firstName} ${data.lastName}`,
                    "password": data.password,
                    "emailid": data.email
                };
                setUserDetails(userData);
            }
        } 
        else {
            alert("Password and confirm password doesn't match")

        }



    }

    return (
        <div className="wrapper">
            {/* <div className="logo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt=""/>
        </div> */}
            <div className="text-center mt-4 name fs-2 " style={{ borderRadius: '50%', color: 'white', backgroundColor: '#00A3E1' }}>
                Register
            </div>
            <form className="p-3 mt-3" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="FirstName" id="firstName" placeholder="FirstName"
                        {...register('firstName', { required: 'FirstName is Required' })} />
                </div>
                {control.getFieldState('firstName').isDirty &&
                    <div id='info' className='form-text m-2' style={{ color: 'red' }}>{errors.firstName?.message}</div>}

                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="lastName" id="userName" placeholder="lastName"
                        {...register('lastName', { required: 'LastName is Required' })} />
                </div>
                {control.getFieldState('lastName').isDirty &&
                    <div id='info' className='form-text m-2' style={{ color: 'red' }}>{errors.lastName?.message}</div>}

                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="email" id="email" placeholder="EmialId"
                        {...register('email', { required: 'Emailid is Required' },
                            {
                                pattern: {
                                    value: /^\w+@[a-zA-z_]+?\.[a-zA-z]{2,3}$/,
                                    message: 'Invalid format'
                                }
                            }
                        )} />
                </div>
                {control.getFieldState('email').isDirty &&
                    <div id='info' className='form-text m-2' style={{ color: 'red' }}>{errors.email?.message}</div>}

                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="password" id="pwd" placeholder="Password"
                        {...register('password', { required: 'Passowrd is Required' })} />
                </div>
                {control.getFieldState('password').isDirty &&
                    <div id='info' className='form-text m-2' style={{ color: 'red' }}>{errors.password?.message}</div>}

                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="cPassword" id="cpwd" placeholder="confirm Password"
                        // {validate:(val)=>val===getValues('pwd')}
                        {...register('cPassword', { required: 'Confirm password is Required' },)} />
                </div>
                {control.getFieldState('cPassword').isDirty &&
                    <div id='info' className='form-text m-2' style={{ color: 'red' }}>
                        {/* {console.log(getValues('pwd'),getValues('cpwd'))} */}
                        {/* {errors.cPassword?.type=='validate'&&<div>Password dosn't match</div>} */}
                        {errors.cPassword?.message}</div>}

                {/* <button className="btn mt-3" 
            // onClick={()=>LoginFormDetails()}
            >Login</button> */}
                <button type='submit' className='btn btn-primary'>Register</button>
            </form>
            <DevTool control={control}></DevTool>

        </div>
    );
};

export default RegistrationForm;

