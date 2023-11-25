"use client";
import { RoutePage } from "@/flat_pages";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();

  const paramsString = pathname.split("/route/")[1];

  const paramsArray = paramsString.split("&");
  const depCity = paramsArray[0].split("=")[1];
  const arrCity = paramsArray[1].split("=")[1];
  const date = paramsArray[2].split("=")[1];
  const id = paramsArray[3].split("=")[1];
  return (
    <RoutePage depCity={depCity} arrCity={arrCity} dateOf={date} id={id} />
  );
};

export default Page;
