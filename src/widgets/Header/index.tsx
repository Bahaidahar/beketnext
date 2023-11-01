"use client";
import { rows, logo, userIcon } from "@/shared";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLog, setIsLogged] = useState();
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token]);
  return (
    <header className="flex max-w-7xl my-4 mx-auto justify-between">
      <Link href="/" className="flex hover:opacity-80">
        <Image src={rows} alt="rows" />
        <Image src={logo} alt="logo" />
      </Link>
      <div>
        <Link href="/office" className="flex items-center hover:opacity-80">
          <Image src={userIcon} alt="userIcon" />
          Личный кабинет
        </Link>
        {isLog ? (
          <p
            className="text-sm text-gray cursor-pointer ml-6 hover:opacity-50"
            onClick={() => localStorage.removeItem("access_token")}
          >
            Выход
          </p>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
