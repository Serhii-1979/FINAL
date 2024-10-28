import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./button.module.css";

function Button({ text }) {
  const { t } = useTranslation();

  return <div className={styles.button_1}>{t(text)}</div>;
}

export default Button;
