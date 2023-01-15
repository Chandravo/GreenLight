import React, { useState, useContext } from "react";
import styles from "./Style/login.module.css"
import myimg from "./Assets/9814.jpg"
import axios from "axios";
import AuthContext from "../../store/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { api_url } from "../../config";

const url = api_url + "login/";
// const url = api_url + "auth/login/";

function Login() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    if (email && password) {
      setLoading(true);

      try {
        axios.post(url, {
          email: email.trim(),
          password: password.trim(),
        })
          .then((response) => {
            if (!response.data.error) {
              console.log(response.data)
              authCtx.login(response.data.key)
              navigate('/home', { replace: true })

              setPassword("");
              setEmail("");

              setLoading(false)
            }
          })
          .catch((error) => {
            setLoading(false)
            alert("Incorrect Credentials");
          });
      } catch (error) {
        setLoading(false)

        alert("An error occurred");
      }
    } else {
      alert("Please fill in all the data");
    }
  };
  return (
    <div className={styles.flexCont}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <h1 className={styles.heading}>Login Now!</h1>
          <form
            action=""
            onSubmit={submitForm}
            className={styles.formContainer}
          >
            <div className={styles.inputBoxContainer}>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email "
                className={styles.inputBox}
              />
            </div>
            <br />
            <div className={styles.inputBoxContainer}>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={styles.inputBox}
              />
            </div>
            <div className={styles.btnContainer} >
              {
                !loading &&
                <button type="submit" className={styles.btn}>
                  <div className={styles.btntext}>Submit</div>
                </button>
              }

              {
                loading &&
                <button type="submit" className={styles.btn} disabled>
                  <FontAwesomeIcon icon={faSpinner} className={styles.btntext} />
                </button>
              }
            </div>
          </form>
        </div>
        <div className={styles.loginImg}>
          <img src={myimg} className={styles.myimg} />
        </div>
      </div>
    </div>
  );
}

export default Login;