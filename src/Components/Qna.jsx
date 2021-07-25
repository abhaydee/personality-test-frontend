import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/Questions.module.scss";
import { AuthContext } from "../utils/context";
import Footer from "./Footer";
function Qna({ data, questionsData }) {
  const context = useContext(AuthContext);
  const [eventValue, setEventValue] = useState("");
  const [questionValue, setQuestionValue] = useState(1);
  const [flag, setFlag] = useState(false);
  const [listValue, setListValue] = useState([]);
  const [anscount, setAnswerCount] = useState(0);
  const [personality, setPersonality] = useState({});
  const router = useRouter();
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
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: questionsData }),
    };
    fetch("http://localhost:3001/test", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          router.push("/");
          setPersonality(data);
          context.setScore(data);
        }
      })
      .catch((err) => {
        console.log("the error", err);
      });
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
