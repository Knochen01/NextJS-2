import Link from "next/link";
import style from "./local.module.css";

export default function Home() {
  return (
    <main className={style.main}>
      <div>
        <h1>Welcome to this awesome site</h1>
        <h2>
          Please click{" "}
          <Link href={"/projects/list"}>
            <span className=" text-red-600 ">HERE</span>
          </Link>
        </h2>
      </div>
    </main>
  );
}
