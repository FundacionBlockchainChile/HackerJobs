import react, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Courses from '../components/courses'
import Gifs from '../components/gifs'
import Footer from '../components/footer'
import Landing from '../components/landing'

import Jobs from '../components/jobs'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import {
  loginWithFacebook,
  loginWithGoogle,
  signInWithEmail,
  logout,
  createUserWithEmail,
} from '../firebase/clientApp'

import { Button } from 'react-bootstrap'

import { writeSomething } from '../firebase/database'

const Home: NextPage = () => {
  const [landing, setlanding] = useState(true)
  const [showJobs, setshowJobs] = useState(true)
  const [showTiendas, setshowTiendas] = useState(true)
  const [profile, setprofile] = useState({} as {})

  const toggleJobsAndCourses = () => setshowJobs(!showJobs)

  return (
    <div className={styles.container}>
      <Head>
        <title>Hacker App</title>
        <meta name="description" content="Hackaton Awesome Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {landing ? (
        <Landing setlanding={setlanding} landing={landing} />
      ) : (
        <>
          <Navbar
            toggleJobsAndCourses={toggleJobsAndCourses}
            showJobs={showJobs}
            loginWithFacebook={() => loginWithFacebook()}
            loginWithGoogle={() => loginWithGoogle()}
            logout={() => logout()}
            signInWithEmail={signInWithEmail}
            createUserWithEmail={(email: string, password: string) =>
              createUserWithEmail(email, password)
            }
          />

          {showJobs ? (
            <Jobs toggleJobsAndCourses={toggleJobsAndCourses} />
          ) : (
            <Courses />
          )}

          <Footer />
        </>
      )}

      {/* <Gifs />
      <Button onClick={() => writeSomething()}>Write Something</Button> */}
    </div>
  )
}

export default Home
