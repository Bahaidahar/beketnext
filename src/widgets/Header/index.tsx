"use client";
import { rows, logo, userIcon } from "@/shared";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLog, setIsLogged] = useState(false);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
  useEffect(() => {
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLogged(false);
  };
  return (
    <header className="flex max-w-7xl my-4 mx-auto justify-between px-4 items-center">
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
            onClick={handleLogout}
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
