"use client";

import React, { useState } from "react";
import styles from "../../local.module.css";
import { createQuestion } from "@/lib/actions/question.action";

export default function About() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  async function handleSubmit() {
    await createQuestion({});
  }

  return (
    <main className={styles.main}>
      <div>This is the about section</div>

      <section>
        <form action="">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="Name"
            id="name"
            value={name}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </section>
    </main>
  );
}
