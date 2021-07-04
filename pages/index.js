import Head from "next/head";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import NavContainer from "../src/Components/NavContainer";
export default function Home() {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>Personality Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["header_icons"]}>
        <div className={styles["header_icons_logo"]}>
          <Image
            src={require("../public/personality-logo.jpg")}
            width={50}
            height={50}
          />
          <h3 className={styles["header_icons_title"]}>Personality</h3>
        </div>
        <NavContainer />
      </div>
    </div>
  );
}
