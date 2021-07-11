import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import styles from "../../styles/footer.module.scss";
function Footer({ answeredQuestions, questionsLength }) {
  return (
    <div className={styles["footer-container"]}>
      <span className={styles["footer-container_text"]}>
        <p className={styles["footer-container_answerCount"]}>
          {answeredQuestions} of {questionsLength}
        </p>
        <ProgressBar
          completed={60}
          baseBgColor="grey"
          bgColor="rgb(132, 201, 183)"
          className={styles["footer-container_progress"]}
        ></ProgressBar>
      </span>

      <button className={styles["footer-container_button"]}>Submit</button>
    </div>
  );
}

export default Footer;
