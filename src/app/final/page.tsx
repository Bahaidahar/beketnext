import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className=" max-w-3xl mx-auto  text-center ">
      <div className=" bg-blue text-white mt-20 mb-10 p-3 rounded-md">
        <p>
          {" "}
          Вы успешно приобрели билет! Вы можете посмотреть код на своей почте!
        </p>
      </div>
      <Link
        href="/"
        className=" bg-blue text-white rounded-md p-3 hover:opacity-80 transition"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default Page;
