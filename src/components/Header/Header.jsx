import { signOut } from 'firebase/auth';
import React from 'react'
import {auth} from '../../config/firebase.js';
import { useNavigate } from 'react-router';

export default function Header() {
  
  
  const navigate=useNavigate();
  const logout=async()=>{
  try{
    await signOut(auth);
  }
  catch(e){
    console.log(e);
  }
  finally{
    navigate('/')
  }

}
  
  
  return (
    <div className='bg-black'>
        <div className='flex justify-between'>
        <div className='flex gap-2 m-3 ml-4 mb-1'>
        <div className='text-white text-2xl mt-1'>Smart Shield</div>
        </div>
        <div className='m-3'>
        <button className='mr-4 p-2 border border-b-2 font-semibold border-white rounded-lg  text-white
        hover:bg-white hover:text-black 
        '
        onClick={logout}
        >Logout</button>
        </div>
        </div>
    </div>
  )
}
