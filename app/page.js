"use client";
import Card from "./components/Card";
import { auth , db } from "@/firbase";
import { onAuthStateChanged } from "firebase/auth";
import { collection  , getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LeftSideBar from "./components/LeftSideBar";
import RightSidebar from "./components/RightSidebar";
export default function Home() {
  const [usersInfoList, setUsersInfoList] = useState([]);
  const router = useRouter()
  // useEffect(() => {
  //   // Check the user's authentication state
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       // Redirect unauthenticated users to the login page
  //       router.push('/login');
  //     }
  //   })
  // })
  useEffect(() => {
  const fetchUserData = async () => {
    try {
      // Fetch user details from Firebase
      const userRef = collection(db, 'users');
      const docSnap = await getDocs(userRef);
      // const userDoc = await db.collection('users').doc(userid).get();
      if (docSnap) {
          docSnap.forEach((doc) => {
              setUsersInfoList(prevList => [...prevList, doc.data()]);
          })

          // setUsersInfo(docSnap.data());
      } else {
      //   console.log("User not found", error);
      }
    } catch (error) {
      console.log("Error" , error)
    }
  };
  fetchUserData();
}, []);


  return (
    <div className="flex w-full">
      <LeftSideBar />
    <main className="main-content w-full p-4">
    {usersInfoList.length!==0 && usersInfoList.map((user, index) => (
      user.tweets &&
          user.tweets.map((tweet) => (
            <Card key={tweet.id} tweet={tweet} user={user} />
          ))
    ))
          }
    </main>
    <RightSidebar />
    </div>
  );
}
