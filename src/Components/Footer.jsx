import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import styles from "../../styles/footer.module.scss";
function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <h3>/</h3>
      <ProgressBar
        completed={60}
        baseBgColor="linear-gradient(transparent, rgb(255, 247, 239), rgb(255, 247, 239), rgb(255, 247, 239))"
        bgColor="rgb(132, 201, 183)"
        className={styles["footer-container_progress"]}
      />
      <button className={styles["footer-container_button"]}>Submit</button>
    </div>
  );
}

export default Footer;
