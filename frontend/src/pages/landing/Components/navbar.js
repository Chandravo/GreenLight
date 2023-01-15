import React from "react";
import styles from "../Style/navbar.module.css"
function Navbar() {
    return (
        <nav>
        <div className={styles.navbarContainer}>
          <div className={styles.navMenu}>
            {/* <div>
              <a className={styles.navLinks} href="Home">
                Home
              </a>
            </div> */}
            <div>
              <a className={styles.navLinks} href="/login">
                Login
              </a>
            </div>
            <div>
              <a className={styles.navLinks} href="#about">
                About Us
              </a>
            </div>
            <div>
              <a className={styles.navLinks} href="#contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;