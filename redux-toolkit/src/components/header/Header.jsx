import React from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const { favorites } = useSelector((state) => state);
  return (
    <header className={styles.header}>
      <BsFillBookmarkHeartFill />
      <span>{favorites.length}</span>
    </header>
  );
};

export default Header;
