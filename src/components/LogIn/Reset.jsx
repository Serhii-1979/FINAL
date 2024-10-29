import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeTransition from "../../components/FadeTransition";
import Trouble from "../../images/svg/Trouble.svg";
import Button from "../../components/button/button";
import styles from "./LogIn.module.css";
import { validateField } from "../../utils/validation";

function Reset() {
  const { t } = useTranslation();

  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmailOrUsername(value);

    setError(validateField("emailOrUsername", value, t));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalError = validateField("emailOrUsername", emailOrUsername, t);
    setError(finalError);

    if (!finalError) {
      console.log("Восстановление пароля отправлено...");
    }
  };

  return (
    <FadeTransition>
      <div>
      <div className={styles.LogIn_cont}>
        <div>
          <img src={Trouble} alt="logo" />
        </div>
        <div className={styles.reset_text}>
          <p className="p_16Bold reset_center">{t("trouble")}</p>
          <p className="p_14SmallGrey reset_center">
            {t("enter_email_username")}
          </p>
        </div>
        <form className={styles.Login_form} onSubmit={handleSubmit}>
          <div className={styles.login_cont_inp}>
            <div className={styles.LogIn_cont_input}>
              <input
                type="text"
                name="emailOrUsername"
                placeholder={t("email_or_username")}
                value={emailOrUsername}
                onChange={handleInputChange}
                className={styles.LogIn_inp}
              />
              
            </div>
            {error && (
                <p className={styles.errorText}>{error}</p>
              )}
          </div>
          <div className={styles.login_button}>
            <Button text={t("reset_password")} />
          </div>
          <div className={styles.reset_null1}></div>
          <div className={styles.login_or_reset}>
            <div className={styles.login_line}></div>
            <p>{t("or")}</p>
            <div className={styles.login_line}></div>
          </div>
          <div className={styles.login_link}>
            <Link to="/signup" className="p_14Bold_black">
              {t("create_new_account")}
            </Link>
          </div>
          <div className={styles.reset_null}></div>
          <div className={styles.login_link}>
            <Link to="/login" className="p_14Bold_black">
              {t("back_to_login")}
            </Link>
          </div>
        </form>
      </div>
    </div>
    </FadeTransition>
  );
}

export default Reset;
