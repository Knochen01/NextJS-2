import React from "react";
import styles from "../../../../local.module.css";

export default function page({ params }) {
  return (
    <div className={styles.main}>This project is called {params.name}</div>
  );
}
