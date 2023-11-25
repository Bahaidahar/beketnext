"use client";
import s from "./styles//index.module.scss";

import { Button, Input } from "@/shared";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { requestOnLogin } from "./api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      email: email ? "" : "Введите адрес электронной почты",
      password: password ? "" : "Введите пароль",
    };

    if (Object.values(newErrors).every((error) => error === "")) {
      const userData = { email, password };
      const res = await requestOnLogin(userData);
      if (res.status === 200) {
        router.push("/");
      } else if (res.status === 401) {
        setErrors({
          email: "",
          password: `${res.data.message}`,
        });
      }
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Input
        width="80"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="почта"
        type="email"
      />
      {errors.email && <p className={s.error}>{errors.email}</p>}
      <Input
        width="80"
        placeholder="пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p className={s.error}>{errors.password}</p>}
      <Button width="w-80" type="submit">
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
