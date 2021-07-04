import React from "react";
import { getQuestionsData } from "../src/utils/utils";
import Qna from "../src/Components/Qna";
function test({ questionsData }) {
  return (
    <div className="page-style">
      <Qna data={questionsData} />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const questionsData = await getQuestionsData(`http://localhost:3001/test`);
  return {
    props: {
      questionsData,
    },
  };
}

export default test;
