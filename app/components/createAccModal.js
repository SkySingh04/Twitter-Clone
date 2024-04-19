"use client";
import { IoMdClose } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import classes from "./createAccModal.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , db } from "@/firbase";
import { doc, getDoc , setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function CreateAccModal({ closeModal }) {
  // const [inputType, setInputType] = useState("phone");
  const router = useRouter()
  const [days, setDays] = useState([]);
  const [years, setYears] = useState([]);

  function handleCloseCreateAcc() {
    closeModal();
  }

  useEffect(() => {
    // Populate days array with numbers from 1 to 31
    const daysArray = Array.from({ length: 31 }, (_, i) => i + 1);
    setDays(daysArray);

    // Populate years array from current year to 1980
    const currentYear = new Date().getFullYear();
    const yearsArray = Array.from(
      { length: currentYear - 1980 + 1 },
      (_, i) => currentYear - i
    );
    setYears(yearsArray);
  }, []);

  const handleChange = (e) => {
    // Handle change logic here
  };

  const handleSubmit = () => {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const bio = document.querySelector('input[name="bio"]').value;
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const bannerImage = document.querySelector('input[name="banner"]').value;
    const profileImage = document.querySelector('input[name="profileImg"]').value;
    const month = document.querySelector('select[name="month"]').value;
    const day = document.querySelector('select[name="day"]').value;
    const year = document.querySelector('select[name="year"]').value;
  
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed up 
      const loggedInuser = userCredential.user;
      const user = {
        name,
        bio,
        bannerImage,
        profileImage,
        followers:0,
        following:0,
        username,
        tweets : []
      };
        const userDocRef = doc(db, 'users', loggedInuser.uid);

        setDoc(userDocRef , user).then(() => {
          console.log('User document created with UID: ', user.uid);
          router.push("/")
        })
        .catch((error) => {
          console.error('Error creating user document: ', error);
        
      })
    }
  ).catch((error)=>{
    console.log(error)
  }
) 
  }

    
  // function handleChangeType() {
  //   setInputType((prev) => (prev === "phone" ? "email" : "phone"));
  // }
  return (
    <>
      <div className={classes.backdrop}></div>
      <div className={classes.createCon}>
        <header className={classes.header}>
          <button className={classes.close} onClick={handleCloseCreateAcc}>
            <IoMdClose />
          </button>
          <div className={classes.logoimg}>
            <FaXTwitter size="3rem" />
          </div>
        </header>
        <main className={classes.main}>
          <h1 className={classes.title}>Create your account</h1>
          <input placeholder="Name" className={classes.input} name="name" />
          <input placeholder="Username" className={classes.input} name="username" />
          <input placeholder="Email" className={classes.input} name="email" />
          <input placeholder="Bio" className={classes.input} name="bio" />
          <input
                type="password"
                placeholder="Password"
                className={classes.input}
                name="password"
                onChange={handleChange}
              />
          <input
            placeholder="Banner Image"
            className={classes.input}
            name="banner"
          />
          <input
            placeholder="Profile Image"
            className={classes.input}
            name="profileImg"
          />
          {/* {inputType === "phone" && (
            <input placeholder="Phone" className={classes.input} name="phone" />
          )} */}

          {/* <button className={classes.changeType} onClick={handleChangeType}>
            use {inputType === "phone" ? "email" : "phone"} instead
          </button> */}
          <div className={classes.birthCon}>
            <h1>Date of birth</h1>
            <p>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <div className={classes.dob}>
              <select
                name="month"
                id="month"
                onChange={handleChange}
                className={classes.select}
              >
                <option value="01" className={classes.options}>
                  January
                </option>
                <option value="02" className={classes.options}>
                  February
                </option>
                <option value="03" className={classes.options}>
                  March
                </option>
                <option value="04" className={classes.options}>
                  April
                </option>
                <option value="05" className={classes.options}>
                  May
                </option>
                <option value="06" className={classes.options}>
                  June
                </option>
                <option value="07" className={classes.options}>
                  July
                </option>
                <option value="08" className={classes.options}>
                  August
                </option>
                <option value="09" className={classes.options}>
                  September
                </option>
                <option value="10" className={classes.options}>
                  October
                </option>
                <option value="11" className={classes.options}>
                  November
                </option>
                <option value="12" className={classes.options}>
                  December
                </option>
              </select>
              <select
                name="day"
                id="day"
                onChange={handleChange}
                className={classes.select}
              >
                {days.map((day) => (
                  <option key={day} value={day} className={classes.options}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                name="year"
                id="year"
                onChange={handleChange}
                className={classes.select}
              >
                {years.map((year) => (
                  <option key={year} value={year} className={classes.options}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button onClick={handleSubmit}  className={classes.next}>Submit</button>
        </main>
      </div>
    </>
  );
}
