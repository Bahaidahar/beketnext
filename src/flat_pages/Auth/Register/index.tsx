import s from "./styles/index.module.scss";

import Link from "next/link";

import { RegistreForm } from "@/features";
import { Header } from "@/widgets";
import { bus } from "@/shared";

import Image from "next/image";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <main className={s.smain}>
        <div className={s.container}>
          <div className={s.main}>
            <div className={s.block}>
              <h2 className={s.title}>Регистрация на сайте</h2>
              <RegistreForm />
            </div>
            <div className={s.login}>
              Уже зарегистрированы?{" "}
              <Link className={s.link} href="/auth/login">
                <span>Войдите на сайт</span>
              </Link>
            </div>
            <div className={s.forComp}>
              <Image src={bus} alt="bus" />
              <p>Регистрация для транспортных компаний</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
