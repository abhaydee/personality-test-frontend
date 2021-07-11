import React, { useState, useEffect } from "react";
import styles from "../../styles/Questions.module.scss";
import Footer from "./Footer";
function Qna({ data, questionsData }) {
  const [listValue, setListValue] = useState([]);
  const [eventValue, setEventValue] = useState("");
  const [questionValue, setQuestionValue] = useState(1);
  const [flag, setFlag] = useState(false);
  const [answered, setAnswered] = useState(0);
  const handleChange = (event) => {
    setQuestionValue(event.target.name);
    setEventValue(event.target.value);
  };
  useEffect(() => {
    const selectedCount = data.Answers.filter((element) => {
      if (element.selected === true) {
        return element;
      }
    }).length;
    setAnswered(selectedCount);
    console.log("the selected count", selectedCount);
    console.log("questions value", questionValue);
    questionsData[questionValue - 1].Answers.forEach((item) => {
      if (item.answerId === eventValue && selectedCount === 0) {
        item.selected = true;
        setFlag(true);
      }
    });
    if (flag === true) {
      setListValue(questionsData);
      setFlag(false);
    }
    // console.log("the data", data);
    console.log("the list value data", listValue);
    console.log("questions data", questionsData);
    console.log("the flag value ", flag);
  }, [eventValue, questionValue]);
  return (
    <>
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
      <Footer
        answeredQuestions={answered}
        questionsLength={questionsData.length}
      />
    </>
  );
}

export default Qna;
