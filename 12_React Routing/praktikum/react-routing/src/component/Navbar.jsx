import styles from "./Navbar.module.css";
import { useState } from "react";

import Sidebar from "./Sidebar";

export default function Navbar() {
  const [buttonToggle, setButtonToggle] = useState(false);

  const clickHandler = () => {
    setButtonToggle(!buttonToggle);
  };

  return (
    <>
      <div className={styles.container}>
        <button
          onClick={clickHandler}
          className={
            styles.burgerMenu + " " + (buttonToggle ? styles.active : "")
          }
        >
          <span />
          <span />
          <span />
        </button>
        <Sidebar isActive={buttonToggle} />
      </div>
    </>
  );
}
