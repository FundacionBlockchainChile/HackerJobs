import React from 'react'
import styles from '../styles/Landing.module.css'

const Landing = ({ setlanding, landing }: any) => {
  return (
    <div className={styles.landing}>
      <h1>Welcome to HackerJobs</h1>
      <p className={styles.text}>Find best jobs on TI industry...</p>
      <p className={styles.text}>...and work from anywhere.</p>
      <p onClick={() => setlanding(!landing)} className={styles.btn}>
        Dive In
      </p>
    </div>
  )
}

export default Landing
