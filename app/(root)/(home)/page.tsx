"use client";

import React from "react";
import styles from "../../local.module.css";
import Link from "next/link";

export default function Home() {
  console.log("-----------------HELLO----------------");

  return (
    <main className={styles.main}>
      <div>HELLO</div>
    </main>
  );
}

/* <main className={styles.main}>
<div>
  <h1>Welcome to this awesome site</h1>
  <h2>
    Please click{" "}
    <Link href={"/projects/list"}>
      <br />
      <span className=" text-red-600 ">HERE</span>
    </Link>
  </h2>
</div>
</main> */
