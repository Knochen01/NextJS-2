import React from "react";
import Link from "next/link";
import mainStyle from "../../../local.module.css";

export default function page() {
  return (
    <main className={mainStyle.main}>
      <div>Welcome to the Cars Page</div>
      <ul>
        <li>
          <Link href={"/projects/cars/mercedes"}>Mercedes</Link>
        </li>
        <li>
          <Link href={"/projects/cars/bugatti"}>Bugatti</Link>
        </li>
        <li>
          <Link href={"/projects/cars/tesla"}>Tesla</Link>
        </li>
      </ul>
    </main>
  );
}
