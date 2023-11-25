"use client";
import s from "./styles/index.module.scss";

import { useState } from "react";
import Image from "next/image";

import { Button, Input } from "@/shared";
import { document } from "@/shared";
import { requestOnRegister } from "./api";

const RegistreForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCheckedBox, setIsCheckedBox] = useState(false);
  const [isReged, setIsReged] = useState(null);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    isCheckedBox: "",
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedBox(event.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      email: email ? "" : "Введите адрес электронной почты",
      password: password ? "" : "Введите пароль",
      confirmPassword:
        confirmPassword && confirmPassword === password
          ? ""
          : "Пароли не совпадают",
      phoneNumber: phoneNumber ? "" : "Введите номер телефона",
      isCheckedBox: isCheckedBox ? "" : "Необходимо принять условия",
    };

    if (Object.values(newErrors).every((error) => error === "")) {
      const userData = { email, password, confirmPassword, phoneNumber };
      requestOnRegister(userData).then((data) => setIsReged(data.status));
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setConfirmPassword("");
      setIsCheckedBox(false);
    } else {
      setErrors(newErrors);
      setIsReged(null);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Input
        width="80"
        value={email}
        placeholder="почта"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p className={s.error}>{errors.email}</p>}
      <Input
        width="80"
        value={phoneNumber}
        placeholder="номер"
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {errors.phoneNumber && <p className={s.error}>{errors.phoneNumber}</p>}
      <Input
        width="80"
        value={password}
        placeholder="пароль"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p className={s.error}>{errors.password}</p>}
      <Input
        width="80"
        value={confirmPassword}
        placeholder="подтвердите пароль"
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {errors.confirmPassword && (
        <p className={s.error}>{errors.confirmPassword}</p>
      )}
      <div className={s.submit}>
        <input
          type="checkbox"
          checked={isCheckedBox}
          onChange={handleCheckboxChange}
        />
        <p>
          Я принимаю условия пользовательского
          <br />
          соглашения{" "}
          <span>
            Договора публичной оферты
            <Image src={document} alt="file" />
          </span>
        </p>
      </div>
      {errors.isCheckedBox && <p className={s.error}>{errors.isCheckedBox}</p>}
      <Button width="w-80">Регистрация</Button>
      {isReged === 200 && (
        <p className={s.sucess}>вы успешно зарегистрировались</p>
      )}
      {isReged === 400 ? (
        <p className={s.error}>Такой пользователь уже существеут</p>
      ) : (
        ""
      )}
    </form>
  );
};

export default RegistreForm;
