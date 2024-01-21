import React from "react";
import styles from "./Spinner.module.css";

const Spinner: React.FC = () => {
  return <div data-testid="spinner-component" className={styles.spinner}></div>;
};

export default Spinner;
