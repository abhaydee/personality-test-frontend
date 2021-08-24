import { useRouter } from "next/router";
import React, { useContext } from "react";
import styles from "../../styles/Description.module.scss";
import { AuthContext } from "../utils/context";
function Description() {
  const router = useRouter();
  const { score } = useContext(AuthContext);
  const handleClick = () => {
    router.push("/test");
  };
  const scoreReturns = () => {
    if (score) {
      if (score.introvertScore > score.extrovertScore) {
        return (
          <h3 className={styles["description-container_text"]}>
            Well!! Well !! Well !! Did you expect this? You have turned out to
            be an Introvert
          </h3>
        );
      } else {
        return (
          <h3 className={styles["description-container_text"]}>
            Well!! Well !! Well !! Did you expect this? You have turned out to
            be an Extrovert
          </h3>
        );
      }
    }
  };
  return (
    <div className={styles["description-container"]}>
      <h1>“It’s so incredible to finally be understood.”</h1>
      <h3 className={styles["description-container_text"]}>
        Take our Personality Test and get a “freakishly accurate” description of
        who you are and why you do things the way you do. No registration or
        introspection required
      </h3>
      <button
        className={styles["description-container_button"]}
        onClick={handleClick}
      >
        <p>Take the test {`->`}</p>
      </button>
      {/* {score?.introvertScore > score?.extrovertScore ? (
        <h3 className={styles["description-container_text"]}>
          Well!! Well !! Well !! Did you expect this? You have turned out to be
          an Introvert
        </h3>
      ) : (
        <h3 className={styles["description-container_text"]}>
          Well!! Well !! Well !! Did you expect this? You have turned out to be
          an Extrovert
        </h3>
      )} */}
      {scoreReturns()}
    </div>
  );
}

export default Description;
