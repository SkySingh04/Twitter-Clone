"use client";
import classes from "./page.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import CreateAccModal from "../components/createAccModal";
import { useState } from "react";
export default function LoginPage() {
  const [isopenCreateModal, setisOpenCreateModal] = useState(false);
  const [isopenLoginModal, setisOpenLoginModal] = useState(false);
  function handleOpenCreateAcc(){
    setisOpenCreateModal(true);
  }
  function handleCloseCreateAcc(){
    setisOpenCreateModal(false);
  }
  function handleOpenLogin(){
    setisOpenLoginModal(true);
  }
  function handleCloseLogin(){
    setisOpenLoginModal(false);
  }
  return (
    <div>
      <div className={classes.loginCon}>
        <div className={classes.logoCon}>
          <FaXTwitter size="20rem" />
        </div>
        <div className={classes.formCon}>
          <h1 className={classes.header}>Happening now</h1>
          <p className={classes.intro}>Join today. </p>
          <div className={classes.actionCon}>
            <button className={classes.emailSignIn}>
              <div className={classes.signin}>
                <p className={classes.sign}>Sign in with email</p>
                <p>xyz@gmail.com</p>
              </div>
              <FcGoogle />
            </button>
            <button className={classes.apple}>
              <FaApple />
              <p>Sign up with Apple</p>
            </button>
            <p className={classes.or}>or</p>
            <button className={classes.createAcc} onClick={handleOpenCreateAcc}>
              Create Account
            </button>
            <p className={classes.cookies}>
              By signing up, you agree to the{" "}
              <span className={classes.span}>Terms of Service</span> and{" "}
              <span className={classes.span}>
                Privacy
                <br />
                Policy
              </span>
              , including <span className={classes.span}>Cookie Use</span>.
            </p>
          </div>
          <div>
            <div className={classes.createAccCon}>
              <h1 className={classes.haveAccHead}>Already have an Account</h1>
              <button className={classes.haveAcc}>Sign in</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer}></div>
      {isopenCreateModal && <CreateAccModal closeModal={handleCloseCreateAcc}/>}
    </div>
  );
}
