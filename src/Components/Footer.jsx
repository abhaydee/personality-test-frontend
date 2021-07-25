import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import styles from "../../styles/footer.module.scss";
function Footer({ answeredQuestions, questionsLength, submitCallback }) {
  const handleSubmit = () => {
    submitCallback();
  };
  return (
    <div className={styles["footer-container"]}>
      <span className={styles["footer-container_text"]}>
        <p className={styles["footer-container_answerCount"]}>
          {answeredQuestions} of {questionsLength}
        </p>
        <ProgressBar
          completed={(answeredQuestions / questionsLength) * 100}
          baseBgColor="grey"
          bgColor="rgb(132, 201, 183)"
          isLabelVisible={false}
          className={styles["footer-container_progress"]}
        ></ProgressBar>
      </span>

      <button
        className={`${styles["footer-container_button"]} ${
          answeredQuestions !== questionsLength
            ? styles["footer-container_button_disabled"]
            : styles["footer-container_button"]
        }`}
        disabled={answeredQuestions === questionsLength ? false : true}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Footer;
