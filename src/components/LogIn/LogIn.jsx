import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeTransition from "../../components/FadeTransition";
import ICH from "../../images/svg/ICH2.svg";
import Button from "../../components/button/button";
import styles from "./LogIn.module.css";
import { validateField } from "../../utils/validation";

function LogIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value, t),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      emailOrUsername: validateField(
        "emailOrUsername",
        formValues.emailOrUsername,
        t
      ),
      password: validateField("password", formValues.password, t),
    };
    setErrors(newErrors);

    if (!newErrors.emailOrUsername && !newErrors.password) {
      console.log("Форма валидна. Переход на HomePage...");
      navigate("/home"); // перенаправление
    }
  };

  return (
    <FadeTransition>
      <div>
        <div className={styles.LogIn_cont}>
          <div>
            <img src={ICH} alt="logo" />
          </div>
          <form className={styles.Login_form} onSubmit={handleSubmit}>
            <div className={styles.login_cont_inp}>
              <div className={styles.LogIn_cont_input}>
                <input
                  type="text"
                  name="emailOrUsername"
                  placeholder={t("email_or_username")}
                  value={formValues.emailOrUsername}
                  onChange={handleInputChange}
                  className={styles.LogIn_inp}
                />
              </div>
              {errors.emailOrUsername && (
                <p className={styles.errorText}>{errors.emailOrUsername}</p>
              )}
              <div className={styles.LogIn_cont_input}>
                <input
                  type="password"
                  name="password"
                  placeholder={t("password")}
                  value={formValues.password}
                  onChange={handleInputChange}
                  className={styles.LogIn_inp}
                />
              </div>
              {errors.password && (
                <p className={styles.errorText}>{errors.password}</p>
              )}
            </div>
            <div className={styles.login_button}>
              <Button text={t("login")} onClick={handleSubmit} />
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
        <div className={styles.login_bottom}>
          <p className="p_14Small">{t("no_account")}</p>
          <Link to="/signup" className="p_14Blue">
            {t("signup")}
          </Link>
        </div>
      </div>
    </FadeTransition>
  );
}

export default LogIn;
