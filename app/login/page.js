import classes from "./page.module.css";
import { FaXTwitter } from "react-icons/fa6";
export default function LoginPage() {
  return (
    <div className={classes.loginCon}>
      <div className={classes.logoCon}>
        <FaXTwitter size="20rem"/>
      </div>
      <div className={classes.formCon}>
        <h1>Happening now</h1>        
      </div>
    </div>
  );
}
