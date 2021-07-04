import React, { useState } from "react";
import { navList, ComponentReSize } from "../utils/utils";
import Image from "next/image";
import styles from "../../styles/NavContainer.module.scss";
import Menu from "../../public/menu.png";
export default function NavContainer() {
  const isMobile = ComponentReSize();
  const [toggleModal, setToggleModal] = useState(false);
  const handleClick = () => {
    setToggleModal(true);
  };
  const handleClose = () => {
    setToggleModal(false);
  };
  return (
    <div className={styles["nav-container"]}>
      {/* {!isMobile && (
        <ul className={styles["nav-container__list"]}>
          {navList.map((data) => (
            <li key={data.id} className={styles["nav-container__listitem"]}>
              {data.title}
            </li>
          ))}
        </ul>
      )} */}
      {
        // !isMobile ? (
        //   <Image
        //     src={require("../../public/menu.png")}
        //     className={styles["nav-container__search"]}
        //     width={30}
        //     height={30}
        //     alt="search"
        //   />
        // ) :
        <span
          style={{ cursor: "pointer", color: "white" }}
          onClick={handleClick}
        >
          <Image
            src={require("../../public/menu.png")}
            width={50}
            height={50}
            className={styles["nav-container__img"]}
            alt="nav-image"
          />
        </span>
      }
      {toggleModal && (
        <>
          <div
            id="mySidenav"
            className={`${styles["sidenav"]} ${
              toggleModal ? styles["sidenav-open"] : styles["sidenav-close"]
            }`}
          >
            {/* <Image
              src={Menu}
              width={50}
              height={50}
              className={styles["nav-container__img"]}
              alt="nav"
            /> */}

            <a className={styles["closebtn"]} onClick={handleClose}>
              &times;
            </a>
            <div className={styles["nav-display"]}>
              {navList.map((data) => (
                <a key={data.id} className={styles["nav-container__listitem"]}>
                  {data.title}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
