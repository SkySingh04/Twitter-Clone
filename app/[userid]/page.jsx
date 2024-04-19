"use client";
import { auth, db } from "../../firbase";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Card from "../components/Card";
import LeftSideBar from "../components/LeftSideBar";
import RightSidebar from "../components/RightSidebar";
// import { auth, db } from '../../firebase';

const ProfilePage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const userid = pathname.split("/").pop();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user details from Firebase
        const userRef = doc(db, "users", userid);
        const docSnap = await getDoc(userRef);
        // const userDoc = await db.collection('users').doc(userid).get();
        if (docSnap.exists) {
          setUser(docSnap.data());
        } else {
          console.log("User not found", error);
        }
      } catch (error) {
        console.log("User not found", error);
      }
    };
    fetchUserData();
  }, [userid]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
    <LeftSideBar user={user} />
    <div className="main-content bg-black text-white">
      <div className="h-[60px] px-2 mb-2 flex items-center ">
        <button
          className=" bg-gray-800 rounded-full p-2"
          onClick={() => {
            // Handle back button click
            // You can use the useRouter hook from Next.js to navigate back to the home page
            router.push("/");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 11H7.414l5.293-5.293a1 1 0 0 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L7.414 13H20a1 1 0 0 0 0-2z" />
          </svg>
        </button>
        <div className="relative left-8">
          <p>{user.name}</p>
          <p className="">{user.tweets.length} Tweets</p>
        </div>
      </div>
      <div
        className="h-[200px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${user.bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative">
        <div className="absolute top-[-60px] left-5">
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-[150px] w-[150px] rounded-full border border-blue-200 "
            src={user.profileImage}
            alt="Profile Image"
          />
        </div>
      </div>
      <div className="max-w-2xl mx-auto  py-8">
        <div className="text-left mt-16">
          <p className="p-[2px] text-xl font-bold">{user.name}</p>
          <p className="p-[2px] text-xl font-bold text-blue-600">
            {user.username}
          </p>
          <p className="p-[2px] text-gray-300">{user.bio}</p>
          <p className="p-[2px] text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="relative bottom-[19px] left-[25px]">
              Joined at {user.joinedAt?.toDate().toDateString()}
            </span>
          </p>
          <p>
            {" "}
            <span className="text-gray-300">
              {user.followers}
            </span> Followers{" "}
            <span className="text-gray-300"> {user.following} </span> Following
          </p>
        </div>
        <h2 className="text-2xl font-bold mt-8">Tweets</h2>
        {user.tweets &&
          user.tweets.map((tweet) => (
            <Card key={tweet.id} tweet={tweet} user={user} />
          ))}
      </div>

    </div>
    <RightSidebar />
    </div>
  );
};

export default ProfilePage;
