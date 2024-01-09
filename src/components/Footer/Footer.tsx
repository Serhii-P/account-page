import globeImg from "../../assets/images/globe.png";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={globeImg} alt="" />
    </div>
  );
};

export default Footer;
