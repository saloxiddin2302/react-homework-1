import React, { Component } from "react";
// import navLogo from "../../assets/image/nav-logo.svg";
import style from "./footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <footer id={style.footer}>
        <div className="container">
          <div className={style.footerStart}>
            <div className={style.footerFirst}>
              <p className={style.footerHead}>Quality cleaning for your home</p>
              <p className={style.footerText}>
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </p>
              <div className={style.footerCubick}>
                <div className={style.footerCub}></div>
                <div className={style.footerCub}></div>
                <div className={style.footerCub}></div>
                <div className={style.footerCub}></div>
                <div className={style.footerCub}></div>
              </div>
            </div>

            <div className={style.footerSecond}>
              <p className={style.secondHead}>Contact us</p>
              <p className={style.secondText}>
                1827 Nickel Road, Los Angeles, CA, 90017, United States
              </p>
              <p className={style.secondNomber}>(414) 567 - 2109</p>
              <p className={style.secondSocial}>contact@cleaning.com</p>
            </div>

            <div className={style.footerThird}>
              <p className={style.footerHour}>Hours</p>
              <p className={style.footerDay}>Monday to Friday</p>
              <p className={style.footerData}>6:00 AM - 9:00 PM</p>
              <p className={style.footerDay2}>Saturday & Sunday</p>
              <p className={style.footerData2}>8:00 AM - 8:00 PM</p>
            </div>

            <div className={style.footerFourth}>
              <p className={style.footerEnd}>Get a free estimate</p>
              <p className={style.footerEndNum}>(414) 567 - 2109</p>
              <p className={style.footerEndText}>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <button className={style.footerBtn}>Get a free quote</button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}