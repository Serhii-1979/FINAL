import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ICH from "../../images/svg/ICH2.svg";
import Button from "../../components/button/button";

import styles from "./LogIn.module.css";

function LogIn() {
  // const { t } = useTranslation();
  const { t, i18n } = useTranslation();
  const [fadeIn, setFadeIn] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className={`${styles.LogIn_container} ${fadeIn ? styles['fade-in'] : ''}`}>
      <div className={styles.languageSwitcher}>
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("ru")}>RU</button>
        </div>
      <div>
        <div className={styles.LogIn_cont}>
          <div>
            <img src={ICH} alt="logo" />
          </div>
          <form className={styles.Login_form}>
            <div className={styles.login_cont_inp}>
              <div className={styles.LogIn_cont_input}>
                <input
                  type="text"
                  placeholder={t("email_or_username")}
                  className={styles.LogIn_inp}
                />
              </div>
              <div className={styles.LogIn_cont_input}>
                <input
                  type="password"
                  placeholder={t("password")} 
                  className={styles.LogIn_inp}
                />
              </div>
            </div>
            <div className={styles.login_button}>
              <Button text={t("login")} />
            </div>
            <div className={styles.login_or}>
              <div className={styles.login_line}></div>
              <p>{t("or")}</p> 
              <div className={styles.login_line}></div>
            </div>
            <div className={styles.login_link}>
              <Link to="/reset" className="p_blue">
                {t("forgot_password")} 
              </Link>
            </div>
          </form>
        </div>
        <div className={styles.LogIn_cont}>
          <div className={styles.login_bottom}>
            <p className="p_14Small">{t("no_account")}</p>
            <Link to="/signup" className="p_14Blue">
              {t("signup")} 
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LogIn;
