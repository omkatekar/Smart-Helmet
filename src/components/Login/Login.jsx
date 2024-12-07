import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import google from '../../assets/google.png';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {auth, googleProvider} from '../../config/firebase';
import { async } from '@firebase/util';
// import firebase from 'firebase';
import './log.css';

export default function Login() {

    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [dispe,setDispe]=useState(false);

    const signIn=async()=>{
        if(email.length<8||password.length<8){
            setDispe(true);
        }
        else{
        setDispe(false);
        try{
            await createUserWithEmailAndPassword(auth,email,password);
        }
        catch(e){
            console.log(e);
        }
        finally{
            return navigate('/main');
        }
    }

}

    const signInwithGoogle=async()=>{
        setDispe(false);
        try{
            await signInWithPopup(auth,googleProvider);
        }
        catch(e){
            console.log(e);
        }
        finally{
            navigate('/main');
        }
    }
    
    console.log(auth.currentUser)

    

    return (
     <>
    <div className='h-20 text-center text-white herohead'>
        <div className='pt-4 text-2xl'>Welcome to SmartShield</div>
    </div>
    <div className='mx-4 my-10 bg-slate-200 p-2 rounded-lg  herobody'>
         
        <p className='text-center font-semibold text-2xl underline'>Login</p>
        <div className='border-2 border-black  rounded-lg p-4 mt-4 w-full'>
        <p className='mt-2 text-xl text-center font-semibold '>Login using Email and Password</p>
        <div className='flex flex-col mx-auto align-middle justify-center mt-8 '>
           <div className='flex justify-center ml-2'>
            <label htmlFor='email'
            className='mt-1'
            >Email :</label>
            <input 
            required="required"
           onChange={e=>setEmail(e.target.value)}
            value={email}
            type='email'
            placeholder='Enter your Email Id...'
            id='email'
            className='ml-1 p-1 rounded-lg w-48 h-8' 
            />
            </div>
           <div className='flex justify-center mt-4 mr-4'>
            <label htmlFor='password'
            className='mt-1'
            >Password:</label>
            <input 
            required="required"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            type='password'
            placeholder='Enter your Password...'
            id='password'
            className='ml-1 p-1 rounded-lg w-48 h-8' 
            />
            </div>
        </div>
        <button 
        className='rounded-lg border border-black p-2 mt-6 mx-auto justify-center align-middle flex bg-green-300 text-black hover:text-white hover:bg-green-700'
        onClick={signIn}
        >Login</button>
         {dispe?<p className='text-center mt-2 text-red-500'>Please enter valid information!!!</p>:' '}

         <p className='text-center mt-4 '>Don't have an account ?</p>

         <div className='flex justify-center gap-1'>
         <Link
         to='/signup'
         className='text-blue-700'
         >
         Click here</Link><span> to create one</span>
             </div>
        </div>
        <p className='text-center mt-8 text-2xl font-bold'>OR</p>
        <button className='border border-black p-2 w-56 flex mx-auto mt-8 hover:bg-black hover:text-white'
         onClick={signInwithGoogle}
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
