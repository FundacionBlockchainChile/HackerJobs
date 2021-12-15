import React, { useState, useEffect } from 'react'
import navbar from '../styles/Navbar.module.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Menu from './menu'
import LoginMenu from './loginMenu'
import Hamburger from 'hamburger-react'

const Navbar = ({
  toggleJobsAndCourses,
  showJobs,
  loginWithFacebook,
  loginWithGoogle,
  logout,
  signInWithEmail,
  createUserWithEmail,
}: any) => {
  const [logged, setlogged] = useState(false)
  const [name, setname] = useState<string | null>('')
  const [photoURL, setphotoURL] = useState<string | null | undefined>('')
  const [logginScreen, setLogginScreen] = useState(false)
  const [menuIsOpen, setmenuIsOpen] = useState(false) // menu

  const toggleloginScreen = () => setLogginScreen(!logginScreen)
  const togglemenuIsOpen = () => setmenuIsOpen(!menuIsOpen)

  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setlogged(true)
        setname(user.displayName)
        if (user.photoURL === null) {
          setphotoURL('images/profile_pic.png')
        } else {
          setphotoURL(user.photoURL)
        }
        setLogginScreen(false)
        console.log('user', user)
      } else {
        // User is signed out
        setlogged(false)
        setname('')
        setphotoURL('')
      }
    })
  }, [auth])

  return (
    <div className={navbar.navbar}>
      {logginScreen ? (
        <LoginMenu
          loginWithFacebook={loginWithFacebook}
          loginWithGoogle={loginWithGoogle}
          toggleloginScreen={toggleloginScreen}
          signInWithEmail={signInWithEmail}
          createUserWithEmail={createUserWithEmail}
        />
      ) : (
        ''
      )}

      {menuIsOpen ? (
        <Menu
          showJobs={showJobs}
          toggleJobsAndCourses={toggleJobsAndCourses}
          togglemenuIsOpen={togglemenuIsOpen}
        />
      ) : (
        <></>
      )}

      <div className={navbar.brand}>
        <img src="images/logo.png" alt="" className={navbar.logo} />
        {logged ? (
          <div className={navbar.welcome}>
            <h6>Hacker Jobs</h6>
            <p>Bienvenido {name}</p>
          </div>
        ) : (
          <div className={navbar.welcome}>
            <h6>Hacker Jobs</h6>
            <p className="hide_small">Awesome Team</p>
          </div>
        )}
      </div>
      {/* <ul className="hide_small">
        <li>Tienda</li>
        <li>Empresa</li>
        <li>Sobre Nosotros</li>
        <li>Contacto</li>
      </ul> */}
      {/* <div className={navbar.search_box}>
        <input type="text" placeholder="🔍 Buscar" />
        {!showProducts ? <p>Productos</p> : <p>Tiendas</p>}
      </div> */}
      <div className={navbar.session}>
        <div>
          {logged ? (
            <div>
              <p
                onClick={async () => {
                  await logout()
                }}
              >
                Logout
              </p>
              <img
                className={navbar.session}
                src={photoURL!}
                alt="profile_pic"
              />
            </div>
          ) : (
            <div>
              <p
                onClick={async () => {
                  toggleloginScreen()
                }}
              >
                {!logginScreen ? 'Login' : 'Cerrar Login'}
              </p>
            </div>
          )}
        </div>
        {/* <div className={navbar.cart}>
          <p className="hide_small">Mi Carro</p>
          <p>🛒</p>
        </div> */}
        <div className={navbar.menu_icon}>
          <Hamburger
            color="red"
            rounded
            size={30}
            toggled={menuIsOpen}
            toggle={setmenuIsOpen}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
