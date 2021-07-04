import React from "react";
import styles from "../../styles/Header.module.scss";
import NavContainer from "./NavContainer";
import Image from "next/image";
import router from "next/router";
function Header() {
  const handleNavigation = () => {
    router.push("/");
  };
  return (
    <div className={styles["header_icons"]}>
      <div className={styles["header_icons_logo"]}>
        <Image
          src={require("../../public/personality-logo.jpg")}
          width={50}
          height={50}
          onClick={handleNavigation}
        />
        <h3 className={styles["header_icons_title"]}>Personality</h3>
      </div>
      <NavContainer />
    </div>
  );
}

export default Header;
