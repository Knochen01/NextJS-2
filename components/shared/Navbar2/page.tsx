import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar2 = () => {
  return (
    <nav className="flex-between background-light900_dark200  fixed z-50 w-full gap-5 p-6 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          width={23}
          height={23}
          alt={"DEVFLOW"}
          src={"/public/assets/images/site-logo.svg"}
        />
        <p>
          <span className="text-primary-500">OverFlow</span>
        </p>
      </Link>
    </nav>
  );
};

export default Navbar2;
