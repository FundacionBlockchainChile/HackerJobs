import React, { useState, useEffect } from 'react'
import styles from '../styles/LoginScreen.module.css'
import Button from 'react-bootstrap/Button'

const RegisterMenu = ({
  setregisterBox,
  registerBox,
  createUserWithEmail,
}: any) => {
  const [password, setpassword] = useState('')
  const [passwordTwo, setpasswordTwo] = useState('')
  const [email, setEmail] = useState('')
  const [showEmailError, setShowEmailError] = useState(false)
  const [showPasswordError, setshowPasswordError] = useState(false)
  const [showDifrentPasswordError, setshowDifrentPasswordError] =
    useState(false)
  const [submitButton, setSubmitButton] = useState(false)

  useEffect(() => {
    activeSubmitButton()
  }, [email, password, passwordTwo])

  // VALIDATIONS
  const checkValidityEmail = (email: string) => {
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

  const checkValidityPasswordTwo = (passwordTwo: string) => {
    if (password !== passwordTwo) {
      setshowDifrentPasswordError(true)
      setpasswordTwo('')
    } else {
      setshowDifrentPasswordError(false)
      setpasswordTwo(passwordTwo)
    }
  }

  // SUBMIT BUTTON ACTIVE WHEN FIELDS OK
  const activeSubmitButton = () => {
    if (password && email && passwordTwo) {
      setSubmitButton(true)
    } else {
      setSubmitButton(false)
    }
  }

  return (
    <>
      <h5>Porfavor Ingresa tus Datos</h5>
      {/* <label>Nombre</label>
            <input className={styles.input} type="text" placeholder="Nombre" /> */}
      <label>Email</label>
      <input
        className={styles.input}
        type="email"
        placeholder="email"
        onChange={(e) => checkValidityEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        className={styles.input}
        type="password"
        placeholder="password"
        onChange={(e) => checkValidityPassword(e.target.value)}
      />

      <label>Confirma tu Password</label>
      <input
        className={styles.input}
        type="password"
        placeholder="password"
        onChange={(e) => checkValidityPasswordTwo(e.target.value)}
      />
      {showEmailError ? (
        <label className=" red_text">Ingresa formato de email valido</label>
      ) : (
        ''
      )}
      {showPasswordError ? (
        <label className=" red_text">Password debil o incorrecto.</label>
      ) : (
        ''
      )}
      {showDifrentPasswordError ? (
        <label className=" red_text">Diferentes passwords</label>
      ) : (
        ''
      )}

      <Button
        onClick={() => createUserWithEmail(email, password)}
        className={[
          styles.login_btn,
          styles.green_background,
          styles.margin_top,
        ].join(' ')}
        disabled={!submitButton}
      >
        <p>Registrarme</p>
      </Button>
      <Button
        onClick={() => {
          setregisterBox(!registerBox)
        }}
        className={[styles.login_btn].join(' ')}
      >
        <p>Volver</p>
      </Button>
    </>
  )
}

export default RegisterMenu
