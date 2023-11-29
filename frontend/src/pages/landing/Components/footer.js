import React from "react";
import styles from "../Style/footer.module.css"
const Footer = () => (
    <section id="contact">
  <div className={styles.footer}>
    <div className={styles.footerGrid}>

      <div className={styles.fGridElement}>
        <h4 className={styles.fHeading}>GreenLight</h4>
        <hr className={styles.fHrStyle}></hr>
        <p className={styles.fPara}>Our team believes in creating efficient and creative technological solutions to promote and implement efficient and judicious use of resources</p>
      </div>

      <div className={styles.fGridElement}>
        <h4 className={styles.fHeading}>Quick Links</h4>
        <hr className={styles.fHrStyle}></hr>
      
        <div className={styles.fLink}>
          <a  href=""> Info</a>
        </div>

        <div className={styles.fLink}>
          <a  href=""> GitHub Repository</a>
        </div>

        <div className={styles.fLink}>
          <a  href=""> Power Loss Data</a>
        </div>
      </div>

      <div className={styles.fGridElement}>
        <h4 className={styles.fHeading}>Contact Us</h4>
        <hr className={styles.fHrStyle}></hr>
        <div className={styles.fContact}>
            <div className={styles.pNo}>
                Ph No. : 271-9876
            </div>
            <div className={styles.pNo}>
              <p>+91 123456789 | Chandravo</p>
              <p>+91 987654321 | Tijil</p>
              <p>+91 143276598 | Lovedeep</p>
              <p>+91 143276598 | Devanshi</p>
          </div>
        </div>
        <div className={styles.fContact}>
            <div className={styles.pNo}>
                Email : 
            </div>
            <div className={styles.pNo}>
              <br></br>
              <p>chandravo@thapar.edu| Chandravo</p>
              <p>tijil@thapar.edu | Tijil</p>
              <p>+91 143276598 | Lovedeep</p>
              <p>+91 143276598 | Devanshi</p>
          </div>
        </div>
      </div>

    </div>
    <center><div className={styles.finisher}>
        Made With ReactJS & Django Rest Framework
      </div></center>
  </div>
  </section>
);

export default Footer;