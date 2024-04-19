"use client";
import { IoMdClose } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import classes from "./createAccModal.module.css";
import { useEffect, useState } from "react";

export default function CreateAccModal({ closeModal }) {
  // const [inputType, setInputType] = useState("phone");
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
          <input placeholder="Email" className={classes.input} name="email" />
          <input
            placeholder="Banner url"
            className={classes.input}
            name="banner"
          />
          <input
            placeholder="profile image url"
            className={classes.input}
            name="profileImg"
          />
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
          <button className={classes.next}>Next</button>
        </main>
      </div>
    </>
  );
}
