'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { auth } from "@/firbase";
import { useRouter } from "next/navigation";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaFeather } from "react-icons/fa";
import { signOut } from 'firebase/auth';
import "./layout.css";
const LeftSideBar = ({user}) => {
  const router = useRouter()
  const handleLogout =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      router.push(`/`);

    }).catch((error) => {
      // An error happened.
      console.log(error);
    });

    router.push(`/`);
  }
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       // Fetch user details from Firebase
  //       const userRef = doc(db, "users", userid);
  //       const docSnap = await getDoc(userRef);
  //       // const userDoc = await db.collection('users').doc(userid).get();
  //       if (docSnap.exists) {
  //         setUser(docSnap.data());
  //       } else {
  //         console.log("User not found", error);
  //       }
  //     } catch (error) {
  //       console.log("User not found", error);
  //     }
  //   };
  //   fetchUserData();
  // }, []);

  return (
    <div>
        <div className="sidebar flex flex-col px-8 py-12 h-screen">
          <div className="flex flex-col gap-8">
            <div className="logo">
              <Link href="/"><Image src={"/logo.jpg"} width={30} height={30} alt="logo" /></Link>
            </div>
            <Link href="/">
              <div className="logo-item flex gap-2">
                <GoHome size={20} />
                <div>Home</div>
              </div>
            </Link>
            <Link href="/explore">
              <div className="logo-item flex gap-2">
                <FaSearch size={20} />
                <div>Explore</div>
              </div>
            </Link>
            <Link href="/profile">
              <div className="logo-item flex gap-2">
                <CgProfile size={20} />
                <div>Profile</div>
              </div>
            </Link>
            <Link href="/post">
              <div className="button flex logo-item bg-blue-500 gap-2 px-4 py-2 rounded-lg text-center">
                <FaFeather size={20} />
                <div>Post</div>
              </div>
            </Link>
          </div>
          {user ? (
            <div className="profile-card flex gap-2">
              <Link href={`/${user?.uid}`}>
                <img src={user?.profileImage} alt="profile" />
                <div className="info">
                  <div className="profile-name">{user?.name}</div>
                  <div className="profile-username">{user?.email}</div>
                </div>
              </Link>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="profile-card flex gap-2">
              <div className="info">
                <div className="profile-name">Guest</div>
                <div className="profile-username">guest@example.com</div>
              </div>
              <a className="logout-button" href="/login">Login</a>
            </div>
          )}
        </div>
    </div>
  )
}

export default LeftSideBar