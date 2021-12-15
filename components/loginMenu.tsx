import React, { useState, useEffect } from 'react'
import styles from '../styles/LoginScreen.module.css'
import Button from 'react-bootstrap/Button'
import Register from './registerMenu'

const LoginMenu = ({
  loginWithGoogle,
  loginWithFacebook,
  signInWithEmail,
  createUserWithEmail,
  toggleloginScreen,
}: any) => {
  const [registerBox, setregisterBox] = useState(true)
  const [password, setpassword] = useState('')
  const [email, setEmail] = useState('')
  const [showEmailError, setShowEmailError] = useState(false)
  const [showPasswordError, setshowPasswordError] = useState(false)
  const [submitButton, setSubmitButton] = useState(false)

  let user = {
    email,
    password,
  }

  useEffect(() => {
    activeSubmitButton()
  }, [email, password])

  // VALIDATIONS
  const checkValidityEmail = (email: string, number: number) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // console.log(re.test(String(email).toLowerCase()))
    if (!re.test(String(email).toLowerCase())) {
      setShowEmailError(true)
      setEmail('')
    } else {
      setShowEmailError(false)
      setEmail(email)
    }
  }

  const checkValidityPassword = (password: string) => {
    if (password.length! < 5) {
      setshowPasswordError(true)
      setpassword('')
    } else {
      setshowPasswordError(false)
      setpassword(password)
    }
  }

  // SUBMIT BUTTON ACTIVE WHEN FIELDS OK
  const activeSubmitButton = () => {
    if (password && email) {
      setSubmitButton(true)
    } else {
      setSubmitButton(false)
    }
  }

  return (
    <div className={styles.login_screen}>
      <div className={styles.login_box}>
        <p
          className={styles.closeX}
          onClick={async () => {
            toggleloginScreen()
          }}
        >
          ❌
        </p>
        <img src="images/logo.png" alt="" className={styles.logo} />

        {registerBox ? (
          <>
            <p>Ingresa con tu opcion Favorita</p>
            <Button
              className={styles.login_btn}
              onClick={async () => {
                await loginWithGoogle()
              }}
            >
              <img src="../images/google_logo.png" alt="google_logo" />
              <p>Login con Google</p>
            </Button>
            {/* <Button
              className={styles.login_btn}
              onClick={async () => {
                await loginWithFacebook()
              }}
            >
              <img src="../images/facebook_logo.png" alt="facebook_logo" />
              <p>Login con Facebook</p>
            </Button> */}
            <p>o ingresa con:</p>
            <input
              className={styles.input}
              type="email"
              placeholder="email"
              onChange={(e) => checkValidityEmail(e.target.value, 1)}
            />
            {showEmailError ? (
              <label className=" red_text">
                Ingresa formato de email valido
              </label>
            ) : (
              ''
            )}
            <input
              className={styles.input}
              type="password"
              placeholder="password"
              onChange={(e) => checkValidityPassword(e.target.value)}
            />
            {showPasswordError ? (
              <label className=" red_text">Password debil o incorrecto.</label>
            ) : (
              ''
            )}
            <Button
              className={[styles.login_btn, styles.green_background].join(' ')}
              onClick={() => signInWithEmail(user)}
              disabled={!submitButton}
            >
              <p>Ingresa con Mail & Password</p>
            </Button>
            <p>o registrate</p>
            <Button
              onClick={() => {
                setregisterBox(!registerBox)
              }}
              className={[styles.login_btn, styles.orange_background].join(' ')}
            >
              <p>Registrarme</p>
            </Button>
          </>
        ) : (
          <Register
            setregisterBox={setregisterBox}
            registerBox={registerBox}
            createUserWithEmail={createUserWithEmail}
          />
        )}
      </div>
    </div>
  )
}

export default LoginMenu
