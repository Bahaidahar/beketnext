import Link from "next/link";
import Image from "next/image";

import s from "./styles/index.module.scss";

import { appStore, classmates, googlePlay, logo, wk, youtube } from "@/shared";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.main}>
        <div className={s.menu}>
          <Link href="/">
            <Image src={logo} alt="logo" width={50} />
          </Link>
          <ul className={s.ul}>
            <li>Поддержка</li>
            <li>О компании</li>
            <li>Условия использования</li>
            <li>Возврат билета</li>
          </ul>
          <ul className={s.ul}>
            <li>Контроль качества</li>
            <li>Виджет на сайт</li>
            <li>Правила и документы </li>
            <li>Транспортным компаниям</li>
          </ul>
          {/* <div className={s.info}>
            <div className={s.download}>
              <Image width={60} src={googlePlay} alt="googlePlay" />
              <Image src={appStore} alt="appStore" />
            </div>
            <div className={s.contacts}>
              <p className={s.blue}>Связаться с нами по email</p>
              <p className={s.blue}>+7777777777</p>
              <div className={s.social}>
                <Image width={25} className={s.wk} src={wk} alt="вконтакте" />
                <Image
                  width={25}
                  className={s.odn}
                  src={classmates}
                  alt="одноклассники"
                />
                <Image
                  width={25}
                  className={s.youTube}
                  src={youtube}
                  alt="youtube"
                />
              </div>
            </div>
          </div> */}
        </div>
        <div className={s.tools}>
          <div className={s.copy}>&copy; 2023, ООО «Beket»</div>
          {/* <div className={s.blue}>Мобильная версия</div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
