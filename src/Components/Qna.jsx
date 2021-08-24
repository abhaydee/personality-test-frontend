import axios from "axios";
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
  const [anscount, setAnswerCount] = useState(0);
  const router = useRouter();
  const handleChange = (event) => {
    setQuestionValue(event.target.name);
    setEventValue(event.target.value);
  };
  let count = 0;
  useEffect(() => {
    const selectedCount = data.Answers.filter((element) => {
      if (element.selected === true) {
        return element;
      }
    }).length;
    questionsData[questionValue - 1].Answers.forEach((item) => {
      if (item.answerId === eventValue && selectedCount === 0) {
        item.selected = true;
        setFlag(true);
      }
    });
    if (flag === true) {
      setFlag(false);
    }
    questionsData.forEach((item) => {
      item.Answers.forEach((subitem) => {
        if (subitem.selected === true) {
          count = count + 1;
          setAnswerCount(count);
        }
      });
    });
  }, [eventValue, questionValue, anscount]);
  const handleSubmitCallback = async () => {
    console.log(
      "-----questions data altered----",
      JSON.stringify(questionsData)
    );
    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json", //this should be application/json
      },
      URL: "http://localhost:3002/test",
      body: JSON.stringify(questionsData),
    };
    axios("http://localhost:3002/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(questionsData),
    })
      .then((data) => {
        if (data) {
          console.log("backend response", data);
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
