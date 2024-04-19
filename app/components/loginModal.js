"use client";
import classes from "./loginModal.module.css";
import { IoMdClose } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
export default function LoginModal({ closeModal }) {
  const [error, setError] = useState(false);

  function handleCloseLoginModal() {
    closeModal();
  }
  function handleLogin() {
    // Handle login logic here
  }
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
          <input placeholder="Email" className={classes.input} name="email" />
          <input
            placeholder="password"
            className={classes.input}
            name="password"
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
