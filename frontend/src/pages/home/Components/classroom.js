import React, { useEffect, useState } from 'react'
import styles from "../Style/classroom.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import camera from "../Assets/camera-solid.svg"
export default function classroom(props) {
    return (

        <>
            {props.classroom.isLightOn ?

                <div className={styles.classRed}>
                    <div className={styles.classData}>
                        <p>{props.classroom.name}  </p>
                    </div>
                    <div className={styles.classData}>
                        <p>  Status : On</p>
                    </div>
                    <div className={styles.classData}>
                        <div className={styles.iconContainer}>
                           <FontAwesomeIcon icon={faCamera} size="2x" beat/>
                        </div>
                    </div>

                </div>
                :
                <div className={styles.classBlue}>
                    <div className={styles.classData}>
                        <p>{props.classroom.name}  </p>
                    </div>
                    <div className={styles.classData}>
                        <p  >Status : Off</p>
                    </div>
                    <div className={styles.classData}>
                        <a href={props.classroom.cam_url}>
                            <FontAwesomeIcon icon={faCamera} size="2x" />
                        </a>
                    </div>


                </div>
            }
        </>
    )
}
