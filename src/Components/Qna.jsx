import React, { useState, useEffect } from "react";
import styles from "../../styles/Questions.module.scss";
function Qna({ data, questionsData }) {
  const [ansState, setAnsState] = useState("");
  const [eventValue, setEventValue] = useState("");
  const handleChange = (event) => {
    setEventValue(event.target.value);
  };
  console.log("the questions", questionsData);
  useEffect(() => {
    const selectedCount = data.Answers.filter((element) => {
      if (element.selected === true) {
        return element;
      }
    }).length;
    console.log("the selected count", selectedCount);
    data.Answers.forEach((item) => {
      if (item.answerId === eventValue && selectedCount === 0) {
        item.selected = true;
      }
    });
    console.log("the data", data);
  }, [eventValue]);
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
        <div
          key={index}
          className={styles["questions-container_inputContainer"]}
        >
          <input
            type="radio"
            name={ans.questionReference}
            value={ans.answerId}
            onChange={handleChange}
            className={styles["questions-container_input"]}
          />
          <h5 className={styles["questions-container_answer"]}>
            {ans.answerDescription}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default Qna;
