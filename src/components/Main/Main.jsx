    import React, { useEffect, useState } from "react";
import { get, onValue, ref, set } from "firebase/database";
import { database } from "../../config/firebase";
import './main.css';
import emailjs from 'emailjs-com';

export default function Main() {
    const [data, setData] = useState([]);
    const [val,setVal]=useState([]);
    const databaseRef=ref(database,'RIDER');
  useEffect(() => {
    onValue(databaseRef,(snapshot)=>{
        const info=snapshot.val();
        if(info){
            const dataArray=Object.values(info);
            setData(dataArray);
        }
    });
  }, [databaseRef]);

  const dataRef=ref(database,'RIDER/values');
  useEffect(() => {
    onValue(dataRef,(snapshot)=>{
        const info=snapshot.val();
        if(info){
            const dataArray=Object.values(info);
            setVal(dataArray);
        }
    });
  }, [dataRef]);

    // console.log(data);
    // setVal(data[6]);
  
  let msg='';
  
  const[sent,setSent]=useState(false);

  
// if (data[5] === 'Met An Accident..' && !sent) {
//   const msg = `Alert!!! The rider might have met with an accident.\nFollowing are the location coordinates:\nLatitude: ${data[2]}\nLongitude: ${data[3]}`;

//   console.log(msg); // Check if the message is correctly formatted

//   emailjs.send('service_ynf46uu', 'template_c3556oa', {
//     message: msg // Assuming 'message' is the template variable in your EmailJS template
//   }, 'MjBSMmsQDiqBLpqv6')
//     .then((response) => {
//       console.log('Email Sent', response.status, response.text);
//       setSent(true);
//     })
//     .catch((error) => {
//       console.log('Error!!!', error);
//     });

//     setSent(true);
// }




  
    


    return (
    
   <div className="m-4 mt-8 mb-6 bg-slate-50 p-2 bx rounded-lg">
        <div className="text-indigo-500 text-center mt-4 mb-6 text-3xl font-bold underline">Details about the ride and the rider</div>
        <div className="mt-3"><span className="text-xl mt-2">Alcohol Percentage : </span><span className='text-xl'>{val[0]} %</span></div>
        <div className="mt-3"><span className="text-xl mt-2">Alcohol Status : </span><span className={data[0]===' Alcohol Consumed...'?'text-xl text-red-400':'text-green-400 text-xl'}>{data[0]}</span></div>
        <div className="mt-3"><span className="text-xl mt-2">Helmet Status : </span><span className={data[1]==='Wearing Helmet...'?'text-green-400 text-xl':'text-red-400 text-xl'}>{data[1]}</span></div>
        <div className="mt-3"><span className="text-xl mt-2">Location Latitude : </span><span className=" text-xl">{data[2]}°</span></div>
        <div className="mt-3"><span className="text-xl mt-2">Location Longitude : </span><span className="text-xl">{data[3]}°</span></div>
        <div className="mt-3"><span className="text-xl mt-2">Temperature Status : </span><span className={data[4]==='Normal temperature'?'text-orange-300 text-xl':'text-red-400 text-xl'}>{data[4]}</span></div>
        <div className="mt-3"><span className="text-xl mt-2">Vehicle Status : </span><span className={data[5]==='Met An Accident..'?'text-red-500 text-xl':'text-green-400 text-xl'}>{data[5]}</span></div>
        <div className="mt-3"><span className="text-xl mt-2">Humidity in Percentage : </span><span className='text-xl'>{val[1]} %</span></div>
        <div className="mt-3"><span className="text-xl mt-2">Temperature in °C:</span><span className='text-xl'>{val[2]} °C</span></div>
    </div>
  )
}
