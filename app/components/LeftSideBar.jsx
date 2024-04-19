import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaFeather } from "react-icons/fa";
import "./layout.css";
const LeftSideBar = () => {
  return (
    <div>
        <div className="sidebar flex flex-col px-8 py-12 h-screen">
          <div className="flex flex-col gap-8">
            <div className="logo">
              <Link href="/"><Image src={"/logo.jpg"} width={30} height={30} alt="logo" /></Link>
            </div>
            <Link href="/home">
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
          <div className="profile-card flex gap-2">
            <img src={"/empty-profile.png"} alt="profile" />
            <div className="info">
              <div className="profile-name">John Doe</div>
              <div className="profile-username">@johndoe</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LeftSideBar