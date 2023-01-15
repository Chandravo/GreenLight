import styles from "../Style/heading.module.css"
import Navbar from "./navbar";
function Heading() {
    return (
      <div className={styles.container}>
        <Navbar/>
        <div className={styles.headingcontainer}>
        <div className={styles.heading}>
          GreenLight
        </div>
        <div className={styles.subheading}>
          Saving Electricity By Using <br/> A CNN-based Detection Model.
          </div>
        </div>
      </div>
    );
  }
  
  export default Heading;