import React from "react";
import { getQuestionsData } from "../src/utils/utils";
import dynamic from "next/dynamic";
const Qna = dynamic(() => import("../src/Components/Qna"));

function test({ questionsData }) {
  console.log("getting the data from backend", questionsData);
  return (
    <div style={{ backgroundColor: "rgb(255, 247, 239)" }}>
      {questionsData.map((data, index) => (
        <div key={index}>
          <Qna data={data} questionsData={questionsData} />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const questionsData = await getQuestionsData(`http://localhost:3002/test`);
  return {
    props: {
      questionsData,
    },
  };
}

export default test;
