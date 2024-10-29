import React from "react";
import styles from "./HomeFile.module.css";

import HomeImg from "../../images/png/HomeImg.jpg.jpg";
import Ava from "../../images/png/ava.jpg";
import Heart from '../../images/svg/Heart.svg'
import MessageImg from '../../images/svg/message-img.svg';

function HomeFile() {
  return (
    <div className={styles.container}>
      <div className={styles.cont_up}>
        <button className={styles.cont_up_ava}>
          <img src={Ava} alt="avatar" />
        </button>
        <div className={styles.cont_up_text}>
            <p className="p_12Bold">sashaa</p>
            <p className="p_punkt">•</p>
            <p className="p_12SmallGrey">2 wek</p>
            <p className="p_punkt">•</p>
            <button className="buttonAva">follow</button>
        </div>
      </div>

      <div className={styles.cont_medium}>
        <img src={HomeImg} alt="img" />
      </div>

      <div className={styles.cont_down}>
        <div className={styles.down_button}>
            <button><img src={Heart} alt="" /></button>
            <button><img src={MessageImg} alt="" /></button>
        </div>
        <div className={styles.down_like}>
            <p className="p_12Bold">101 824 likes</p>
        </div>
        <div className={styles.down_description}>
            <p className="p_12Bold">Sashaa  𝘐𝘵’𝘴 𝒈𝒐𝒍𝒅𝒆𝒏, 𝘗𝘰𝘯𝘺𝘣𝘰𝘺!</p>
            <p className="p_12_400">heyyyy | M... <span className="p_12SmallGrey">more</span></p>
        </div>
        <div>
            <p className="p_12SmallGrey">View all comments (732)</p>
        </div>
      </div>
    </div>
  );
}

export default HomeFile;
