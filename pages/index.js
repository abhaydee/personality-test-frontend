import Head from "next/head";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import NavContainer from "../src/Components/NavContainer";
import Description from "../src/Components/Description";
export default function Home() {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>Personality Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Description />
    </div>
  );
}
