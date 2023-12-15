import React from "react";
import styles from "../projects.module.css";
import mainStyle from "../../../../local.module.css";

export default function page({ params }) {
  return (
    <main className={mainStyle.main}>
      <div className={styles.cars}>
        Thank you for choosing the {params.CARS} Brand
      </div>
    </main>
  );
}
