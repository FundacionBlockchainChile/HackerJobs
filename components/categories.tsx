import React from 'react'
import styles from '../styles/Categories.module.css'

const Categories = () => {
  return (
    <div className={styles.categories}>
      <ul>
        <li>Tecnologia</li>
        <li>Hogar</li>
        <li>Deporte</li>
        <li>Mujer</li>
        <li>Hombre</li>
        <li>NIños y Bebes</li>
      </ul>
    </div>
  )
}

export default Categories
