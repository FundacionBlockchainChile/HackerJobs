import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { courses } from '../db/db'
import styles from '../styles/Courses.module.css'

const Cursos = () => {
  return (
    <div className={styles.curses}>
      <h1>Check our Courses</h1>
      <Row xs={1} md={3} className="g-4">
        {courses.map((curse, idx) => (
          <Col key={idx}>
            <div className={styles.curseCard}>
              <img src={curse.imageUrl} alt={curse.name} />
              <h4 className={styles.title}>{curse.name}</h4>
              <p>{curse.description.substring(0, 200)}...</p>
              <a href={curse.link} className={styles.btn}>
                Ir al curso
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cursos
