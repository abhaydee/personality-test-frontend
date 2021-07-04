import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Description.module.scss";

function Description() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/test");
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
    </div>
  );
}

export default Description;
