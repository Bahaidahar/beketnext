"use client";

import { RoutesPage } from "@/flat_pages";
import { usePathname } from "next/navigation";

const Routes = () => {
  const pathname = usePathname();

  const paramsString = pathname.split("/routes/")[1];

  const paramsArray = paramsString.split("&");
  const depCity = paramsArray[0].split("=")[1];
  const arrCity = paramsArray[1].split("=")[1];
  const date = paramsArray[2].split("=")[1];
  return <RoutesPage depCity={depCity} arrCity={arrCity} dateOf={date} />;
};

export default Routes;
