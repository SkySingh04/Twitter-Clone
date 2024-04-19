"use client";
import React, { useEffect } from 'react'
import { db } from '@/firbase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { CiImageOn } from "react-icons/ci";
import { MdGif } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";


const Input = ({user}) => {
    const [myUser , setUser] = React.useState(null)
     const [inputVal,setInputVal] = React.useState('')

    

     const handleSubmitTweet = async () => {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        // const userDoc = await db.collection('users').doc(userid).get();
        if (docSnap.exists) {
          setUser(docSnap.data());
        } else {
          console.log("User not found", error);
        }

         console.log(inputVal)
    const washingtonRef = doc(db, "users", user.uid);
// Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
        tweets: [...myUser.tweets,{content:inputVal,like:0,comments:0 , reposts:0,timestamp:"" , view:"2" }]
}).then(()=>{
    console.log('Tweet added')
}).catch((e)=>{
    console.log(e)
})

     }
    return (
        <>
            <header>
                {/* Header content */}
            </header>
            <main>

                <div className="h-36 w-full bg-black-200 border-white border-transparent justify-center flex items-center  text-center">
                    <img src=""></img>
                    <div class="p-4 mt-4 w-full">
                        <input onChange={e=>setInputVal(e.target.value)} type="textarea" placeholder="What's happening?" class="outline-none w-full my-2 border border-white bg-black rounded br-4 p-2 text-black::placeholder" />
                        {/* <p className='text-2xl text-gray-600  text-center'>What is Happening?!</p> */}
                        <p className='mt-4 ml-4 text-blue-500 text-base text-center'>Everyone can reply</p>
                    </div>
                    {/* Other content */}
                </div>
                <div className="flex items-center justify-between">
                    {/*Items aligned to the left */}
                    {/* <div className="flex">
                        <div className="w-1/6 bg-black-200 h-16 flex items-center justify-center"></div>
                        <div className="w-1/6 bg-black-200 h-16 flex items-center justify-center"></div>
                        <div className="w-1/6 bg-black-200 h-16 flex items-center justify-center"></div>
                        <div className="w-1/6 bg-black-200 h-16 flex items-center justify-center"></div>
                        <div className="w-1/6 bg-black-200 h-16 flex items-center justify-center"></div>
                        <div className="w-1/6 bg-black-200 h-16 flex items-center justify-center"></div>
                    </div> */}
                        <div className='flex gap-2'>
                <CiImageOn />
                <MdGif />
                <CiBoxList />
                <CiFaceSmile />
                <CiCalendar />
                <CiLocationOn />
                </div>
                    {/* Button aligned to the right */}
                    <button className="bg-blue-500 text-white px-8 py-2 rounded br-6" onClick={handleSubmitTweet}>Post</button>
                </div>
                
                <hr class="border border-white"></hr>
            </main>
        </>
    );
};

export default Input;
