import React, { useState } from 'react'
import google from '../../assets/google.png';
import { Link } from 'react-router-dom';
import {auth, googleProvider} from '../../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
   
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [dispe,setDispe]=useState(false);

    const signUp=async()=>{
        if(email.length<8||password.length<8){
            setDispe(true);
        }
        else{
        setDispe(false);
        try{
            await signInWithEmailAndPassword(auth,email,password);
        }
        catch(e){
            console.log(e);
        }
        finally{
            return navigate('/main');
        }
    }
}


    const signUpGoogle=async()=>{
        try{
            await signInWithPopup(auth,googleProvider);
        }
        catch(e){
            console.log(e);
        }
        finally{

        }
    }

 
 
    return (
    <>
    <div className='bg-indigo-500 h-20 text-center text-white herohead'>
        <div className='pt-4 text-2xl'>Welcome to SmartShield</div>
    </div>
    <div className='mx-4 my-10 bg-slate-200 p-2 rounded-lg'>
        <p className='text-center font-semibold text-2xl underline'>Sign Up</p>
        <div className='border-2 border-black rounded-lg p-4 mt-4'>
        <p className='mt-8 text-center font-medium text-2xl'>Don't have an account?</p>
        <p className='mt-2 text-center font-medium text-xl'>Sign Up using Email and Password</p>
        <div className='flex flex-col mx-auto align-middle justify-center mt-8 '>
           <div className='flex justify-center ml-2'>
            <label htmlFor='email'
            className='mt-1'
            >Email:</label>
            <input 
            onChange={e=>setEmail(e.target.value)}
            value={email}
            type='email'
            placeholder='Enter your Email Id...'
            id='email'
            className='ml-1 p-1 rounded-lg w-48' 
            />
            </div>
           <div className='flex justify-center mt-4 mr-4'>
            <label htmlFor='password'
            className='mt-1'
            >Password:</label>
            <input 
            onChange={e=>setPassword(e.target.value)}
            value={password}
            type='password'
            placeholder='Enter your Password...'
            id='password'
            className='ml-1 p-1 rounded-lg w-48' 
            />
            </div>
        </div>
        <button 
        className='rounded-lg border border-black p-2 mt-8 mx-auto justify-center align-middle flex bg-green-300 text-black hover:text-white hover:bg-green-700'
        onClick={signUp}
        >Sign Up</button>
        {dispe?<p className='text-red-500 text-center mt-2'>Please enter valid information!!!</p>:''}
        </div>
        <p className='text-center mt-8 text-2xl font-bold'>OR</p>
        <button className='border border-black p-2 w-56 flex mx-auto mt-8 hover:bg-black hover:text-white'
        onClick={signUpGoogle}
        >
            <img src={google}
            className='w-5 h-5 mt-0.5 mr-3'
            ></img>
            Sign Up using Google
        </button>
    </div>
    </>
  )
}
