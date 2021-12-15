import React from 'react'
import styles from '../styles/Menu.module.css'

const Menu = ({ showJobs, toggleJobsAndCourses, togglemenuIsOpen }: any) => {
  return (
    <div className={styles.menu}>
      {showJobs ? (
        <h4
          onClick={() => {
            toggleJobsAndCourses()
            togglemenuIsOpen()
          }}
        >
          Courses
        </h4>
      ) : (
        <h4
          onClick={() => {
            toggleJobsAndCourses()
            togglemenuIsOpen()
          }}
        >
          Jobs
        </h4>
      )}
    </div>
  )
}

export default Menu
