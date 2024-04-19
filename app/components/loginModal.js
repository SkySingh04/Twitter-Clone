"use client";
import classes from "./loginModal.module.css";
import { IoMdClose } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import firebase from "firebase/app";
import { auth } from "@/firbase";
import "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginModal({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  function handleCloseLoginModal() {
    closeModal();
  }

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth , email, password);
      handleCloseLoginModal();
      router.push("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <>
      <div className={classes.backdrop}></div>
      <div className={classes.createCon}>
        <header className={classes.header}>
          <button className={classes.close} onClick={handleCloseLoginModal}>
            <IoMdClose />
          </button>
          <div className={classes.logoimg}>
            <FaXTwitter size="3rem" />
          </div>
        </header>
        <main className={classes.main}>
          <h1 className={classes.title}>Welcome Back</h1>
          <input
            placeholder="Email"
            className={classes.input}
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            placeholder="password"
            className={classes.input}
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {error && <p className={classes.error}>Invalid User Input</p>}
          <button className={classes.next} onClick={handleLogin}>
            Login
          </button>
        </main>
      </div>
    </>
  );
}