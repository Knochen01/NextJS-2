import React from "react";
import Link from "next/link";
import styles from "./projects.module.css";

export default function List() {
  return (
    <div className={styles.main}>
      <h1> Current Projects</h1>
      <br />
      <ul>
        <li>
          <Link href={"/projects/list/carrent"}>Carrent</Link>
        </li>
        <li>
          <Link href={"/projects/list/jobit"}>Jobit</Link>
        </li>
        <li>
          <Link href={"/projects/list/datastore"}>Datastore</Link>
        </li>
      </ul>
    </div>
  );
}
