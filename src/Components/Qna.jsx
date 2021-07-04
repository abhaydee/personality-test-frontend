import React from "react";
import styles from "../../styles/Questions.module.scss";
function Qna({ data }) {
  console.log("passing the data", data);
  return (
    <div className={styles["questions-container"]}>
      <h3 className={styles["questions-container_qnumber"]}>
        {data.questionId}
      </h3>
      <div className={styles["questions-container_border"]}></div>
      <h3 className={styles["questions-container_question"]}>
        {data.questionDescription}
      </h3>
      {data?.Answers.map((ans, index) => (
        <div key={index}>
          <h5 className={styles["questions-container_answer"]}>
            {ans.answerDescription}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default Qna;
