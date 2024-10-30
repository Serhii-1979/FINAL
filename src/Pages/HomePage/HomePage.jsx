import React, { useEffect, useState } from "react";

import Ok from '../../images/svg/Ok.svg'

import styles from './HomePage.module.css'
import HomeFile from './HomeFile';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      setIsVisible(true);
  }, []);

  return (
      <div className={`${styles.homepage} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.homepage_up}>
            <div><HomeFile /></div>
            <div><HomeFile /></div>
            <div><HomeFile /></div>
            <div><HomeFile /></div>
        </div>
        <div className={styles.homepage_down}>
            <div className={styles.down_img}>
                <img src={Ok} alt="" />
            </div>
            <p>You've seen all the updates</p>
            <p className='p_punkt'>You have viewed all new publications</p>
        </div>
      </div>
  );
}

export default HomePage;
