// button.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./button.module.css";

function Button({ text, onClick, path }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className={styles.button_1} onClick={handleClick}>
      {t(text)}
    </div>
  );
}

export default Button;
