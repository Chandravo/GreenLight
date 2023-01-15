import styles from "../Style/about.module.css"
import myimg from "../Assets/about1.jpg"
function About() {
    return (
        <section id="about">
      <div className={styles.container}>
         <h1 className={styles.heading}>About Us</h1> 
         <hr
          style={{
            background: 'rgb(93, 226, 93)',
            color: 'rgb(93, 226, 93)',
            borderColor: 'rgb(93, 226, 93)',
            height: '0.1px',
            width: '80%',
          }}
        />
        <div className={styles.text}>
        Our Team believes in the efficient and judicious use of resources,hence we developed the idea to bring GreenLight into existence. GreenLight simplifies the problem of electricty loss that is caused by leaving the lights on in an unused room.
        <br/><br/>
        GreenLight uses a CNN-based detection model that recogizes whether or not a room is empty and has the light turned on using human body recognition.<br></br><br></br>Our system simplifies the problem of both pinpoiting the exact room and electrcity loss.It displays the status of each and every room as well the camera feed to cross check the data displayed on the website.  
        </div>
        <div>
            <img src={myimg} alt="an image" className={styles.myimg}/>
        </div>
      </div>
      </section>
    );
  }
  
  export default About