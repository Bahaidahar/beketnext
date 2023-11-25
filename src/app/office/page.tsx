"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import s from "./styles/index.module.scss";

import { OfficeHelper, OfficeSettings } from "@/entities";
import Link from "next/link";
import { axiosInstance } from "@/shared/lib/axiosInstance";

const OfficePage = () => {
  const router = useRouter();
  const token = localStorage.getItem("access_token");
  const [activeTab, setActiveTab] = useState(0);
  const [settings, setSettings] = useState(false);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (index === 2) {
      setSettings(true);
    } else {
      setSettings(false);
    }
  };

  const tabs = ["Заказы и билеты", "История бронирования", "Настройки"];
  const contents = [
    {
      no: "У вас еще нет приобретенных или забронированных билетов. ",
    },
    {
      no: "У вас еще нет приобретенных или забронированных билетов.",
    },
    { no: "" },
  ];

  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
    }
  }, []);
  return (
    <>
      <main className={s.main}>
        <h2 className={s.title}>Личный кабинет</h2>
        <div className={s.main_nav}>
          <div className={s.nav_tabs}>
            {tabs.map((tab, index) => (
              <Link
                href=""
                key={index}
                className={index === activeTab ? s.nav_tab_active : s.nav_tab}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </Link>
            ))}
          </div>
          <div className={settings ? s.nav_info_set : s.nav_info}>
            {contents.map((content, index) => (
              <div
                key={index}
                className={index === activeTab ? s.content_active : s.content}
              >
                {content.no}
                {settings ? <OfficeSettings /> : ""}
              </div>
            ))}
          </div>
        </div>
        {settings ? "" : <OfficeHelper />}
      </main>
    </>
  );
};

export default OfficePage;
