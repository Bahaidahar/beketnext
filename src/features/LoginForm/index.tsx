"use client";
import s from "./styles//index.module.scss";

import { Button, Input } from "@/shared";

import { useState } from "react";
import { requestOnLogin } from "./api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      email: email ? "" : "Введите адрес электронной почты",
      password: password ? "" : "Введите пароль",
    };

    if (Object.values(newErrors).every((error) => error === "")) {
      const userData = { email, password };
      requestOnLogin(userData);
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Input
        width="w-80"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ivanov@mail.ru"
        type="email"
      />
      {errors.email && <p className={s.error}>{errors.email}</p>}
      <div className={s.pass}>
        <p className="">Напомнить пароль</p>
        <Input
          width="w-80"
          placeholder="pass"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors.password && <p className={s.error}>{errors.password}</p>}
      <Button width="w-80" type="submit">
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
