import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import bell from "../../assets/icons/notifications.svg";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import styles from "./Header.module.scss";

const Header = () => {
  const [userMenuIsActive, setUserMenuIsActive] = useState(false);
  const [mobMenuIsOpen, setMobMenuIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.hamburger}>
            <Hamburger
              size={21}
              toggled={mobMenuIsOpen}
              toggle={setMobMenuIsOpen}
            />
          </div>

          <div className={styles.navigation}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="xeppt logo" />
            </Link>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navItem} ${styles.activeLink}`
                  : styles.navItem
              }
            >
              <h2>Home</h2>
            </NavLink>
            <NavLink
              to="/card"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navItem} ${styles.activeLink}`
                  : styles.navItem
              }
            >
              <h2>Card</h2>
            </NavLink>
            <NavLink
              to="/statement"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navItem} ${styles.activeLink}`
                  : styles.navItem
              }
            >
              <h2>Statements</h2>
            </NavLink>
          </div>

          <div className={styles.menu}>
            <h3>FR</h3>
            <div className={styles.lightBg}>
              <img src={bell} alt="notifications" />
            </div>
            <div className={`${styles.lightBg} ${styles.initials}`}>
              <p>PM</p>
            </div>
            <div className={styles.username}>
              <h3>PETER MORGAN</h3>
              <img
                src={arrowDown}
                alt="extend info"
                onClick={() => setUserMenuIsActive(!userMenuIsActive)}
              />
              {userMenuIsActive && (
                <div className={styles.userMenu}>
                  <p>PETER MORGAN</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {mobMenuIsOpen && (
        <div className={styles.mobMenu}>
          <div className={styles.mobNav}>
            <Link to="/" onClick={() => setMobMenuIsOpen(false)}>
              <h2>Home</h2>
            </Link>
            <Link to="/card" onClick={() => setMobMenuIsOpen(false)}>
              <h2>Card</h2>
            </Link>
            <Link to="/statement" onClick={() => setMobMenuIsOpen(false)}>
              <h2>Statements</h2>
            </Link>
          </div>

          <h3>PETER MORGAN</h3>
        </div>
      )}
    </header>
  );
};

export default Header;
