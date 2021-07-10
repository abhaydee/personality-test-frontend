import React from "react";
import { getQuestionsData } from "../src/utils/utils";
import Qna from "../src/Components/Qna";
import Footer from "../src/Components/Footer";
function test({ questionsData }) {
  return (
    <div style={{ backgroundColor: "rgb(255, 247, 239)" }}>
      {questionsData.map((data, index) => (
        <div key={index}>
          <Qna data={data} questionsData={questionsData} />
        </div>
      ))}
      <Footer />
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
