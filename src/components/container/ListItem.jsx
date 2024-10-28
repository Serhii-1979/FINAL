import React from 'react';
import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
import styles from './container.module.css';

function ListItem({ icon, textKey, path }) {
    const { t } = useTranslation();
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate(path);
    // };

    return (
        <button className={styles.container_li}>
            <div className={styles.container_li_img}>
                <img src={icon} alt="icon" />
            </div>
            <div className={styles.container_li_text}>
                <p>{t(textKey)}</p>
            </div>
        </button>
    );
}

export default ListItem;
