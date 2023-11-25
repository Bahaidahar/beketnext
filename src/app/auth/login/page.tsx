"use client";
import s from "./styles/index.module.scss";

import { LoginForm } from "@/features";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
  useEffect(() => {
    if (token) {
      router.push("/office");
    }
  }, []);
  return (
    <>
      <main className={s.smain}>
        <div className={s.container}>
          <div className={s.main}>
            <div className={s.block}>
              <h2 className={s.title}>Вход на Beket</h2>
              <LoginForm />
            </div>
            <div className={s.register}>
              Нет учётной записи?{" "}
              <Link className={s.link} href="/auth/register">
                <span>Зарегистрируйтесь</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
