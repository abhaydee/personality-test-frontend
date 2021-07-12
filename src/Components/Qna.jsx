import React, { useState, useEffect } from "react";
import styles from "../../styles/Questions.module.scss";
import Footer from "./Footer";
function Qna({ data, questionsData }) {
  const [listValue, setListValue] = useState([]);
  const [eventValue, setEventValue] = useState("");
  const [questionValue, setQuestionValue] = useState(1);
  const [flag, setFlag] = useState(false);
  const [anscount, setAnswerCount] = useState(0);
  const handleChange = (event) => {
    setQuestionValue(event.target.name);
    setEventValue(event.target.value);
  };
  console.log("initial data", questionsData);
  let count = 0;
  useEffect(() => {
    const selectedCount = data.Answers.filter((element) => {
      if (element.selected === true) {
        return element;
      }
    }).length;
    console.log("the selected count", selectedCount);
    // console.log("questions value", questionValue);
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
    questionsData.forEach((item) => {
      item.Answers.forEach((subitem) => {
        console.log("sub", subitem);
        if (subitem.selected === true) {
          count = count + 1;
          setAnswerCount(count);
        }
      });
    });
    console.log("the answers count", anscount);
    // console.log("the data", data);
    // console.log("the list value data", listValue);
    // console.log("questions data", questionsData);
    // console.log("the answered", count);
    // console.log("the flag value ", flag);
    // console.log("answered", answered);
  }, [eventValue, questionValue, anscount]);
  const handleSubmitCallback = async () => {
    const results = await fetch("http://localhost:3001/test", {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(questionsData),
    });
    console.log("the results", results);
  };
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
        answeredQuestions={anscount}
        questionsLength={questionsData.length}
        submitCallback={handleSubmitCallback}
      />
    </>
  );
}

export default Qna;
