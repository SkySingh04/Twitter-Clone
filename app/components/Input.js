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
                <nav className=" fixed top-0 w-1/2 bg-black text-white flex justify-center">
                    <a href="#" className="text-white border-b-4 border-transparent hover:border-blue-500 px-6 py-2 mx-4">For You</a>
                    <a href="#" className="text-white border-b-4 border-transparent hover:border-blue-500 px-4 py-2 mx-4">Following</a>
                    <a href="#" className="text-white  hover:border-blue-500 px-4 py-0 mx-4"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEUAAAD////6+vr39/fy8vLt7e3IyMjc3NyhoaFHR0fl5eW4uLjq6uqnp6djY2PS0tKTk5M6Ojqurq56enobGxsjIyMpKSm/v7+FhYVYWFg1NTVMTEx0dHQuLi4RERGNjY1ra2tyn20fAAAEaklEQVR4nO2agY6qOhCGnRZaKCggKKCIvP9T3ikq0MJm15xtvTlnvmwiYBN+S2f6z7C7HUEQBEEQBEEQBEEQBEEQBEEQ/yCHREgVpiqro/OntbyIU5g4flrMiyNwlQkhsixk/PppNU8YqLjCz766A+w/rebBHuD+PKwkQPU5Jf10dFHApxOcqugTckZylZSn56Ghg0NaPI6uucxin5oSjDOWHmM9XwGEi3tHADl+VGUW4Jjg4E1SlaEkphOAjGJrbV9SCM5dzfW3WlbjSVOPmlQb50rfOOTW0j4CpFpwILpL5E8VRpi86YPhiLqYlS8r0JKyfBzRAPejqsZbXp7Ht4MIlJUuI55G8Ss4GxTYuteEj0SeFuenkz2iWJ6gqrCwR/w2JzCC7XswtSauxLyoAhD998NmWh/pFKPrrT1XQOB+UXXsrV+OMyudaZlRLHxj9N1PpsLwG9ZX46Hs2g3bKYCtwtMBxSqc+rYOGOP4J/OL+VXMoPagSe8y4c24cTa7YQjNBZf72mdwmZTL++K2wlVUDt1daLMul8GpQPkxfXcO2XymN13xcii3JjCS64GZ6d8R51KbgznKI2C8W3x/qtFoTao6vTsnrvNULvXCqafbtGsjhwZwnsgmNcf/PkWkvVuQzBGmC4XBHibmQgIpx5+RDW/tTT+nDLUJjpbruNvabQvLR5RjdAo3XiFlTOXmD5ablmGVXq81Z45SAwadlbJPDMTGwJavqveSj/XE77NuFJRmxprACbSuxIEjV7UuyTFfb64UsShPn6LCzTn9Y/q1W4u+KNITLLPMK1hGZ1sjXYhiPxVVOBK1/fg2/Xq29fjcuIV1Tuq+XOipLSpw1E4LILPcec83ve7A1nPKHKUEpbcYM9qyzaoAawtzP8StxlWlfBh3MTEsL8FGpF9xq1us/1s+bk9HRy3a02hbWDZPg+512KvKuhaNPuHo0r4MYuwATbIKDsx8LrpPNAVatdfdjnTv2n0etCw1nTbA2XIJa8MuJwtfoskLcue9BGQIlgup1BrLp4x2D4ZvuTJHOXNFbjqTTjfs0np/z5OxpSiWVZYEddt5oMcbGZHUJ8FcYklzhZWGC3VHvLYwcZ5hJcpZmAxW7VIEbtyBzRHYVs+3uF63iqkawMPz69Ui9r6nBEf7y5/cpQ99tIISYG+1FxPgzjv8X9QKX9N6eLGFovhb+1jt48Wk3YNu7Q5oZaQFtPE+0ifuJOq1quK7YuGqlxCIwyu7oibuY+vb6b6Knp7qXjP9GsQ035fxNYg6jlL3wDaTmgMS/PndodbeDdLUyo74pdR9EKaiAteT+9Bb3PiBaCqrx4EVQrprI/kc4E/TaBSAy2ZcOcrw6ftHk7O/JtpxKi/r6UUnopeSxkhEc7BVZe3Kl3/PGR/V1CCKvGx1P2DxZvusVrXxp+CQHoridimK/81EPTrEqZIyDfmbLwMdUqjZDn/uXyVs2nxfZ1KKJGocNYEJgiAIgiAIgiAIgiAIgiAIgiD+Bv4D6WUqzoWbP3wAAAAASUVORK5CYII=" className="h-15 w-12"></img></a>
                </nav>
            </header>
            <main>

                <div className="h-36 w-full bg-black-200 border-white border-transparent justify-center flex items-center  text-center">
                    <img src=""></img>
                    <div class="p-4 mt-4 w-full">
                        <input onChange={e=>setInputVal(e.target.value)} type="textarea" placeholder="What's happening?" class="outline-none w-full my-2 border border-white bg-black rounded br-4 p-2 text-black::placeholder" />
                        {/* <p className='text-2xl text-gray-600  text-center'>What is Happening?!</p> */}
                        <p className='mt-4 ml-4 text-blue-500 text-base text-center'>Everyone can reply</p>
                    </div>
                    <hr className='text-white'></hr>
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
    )
}

export default Input