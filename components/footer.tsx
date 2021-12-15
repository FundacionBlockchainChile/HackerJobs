import React from 'react'
import styles from '../styles/Footer.module.css'

const footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <a
          href="https://startup-052-site.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Marca registrada ®{' '}
            <span className="red_text bold">Hacker Team</span>
          </p>
        </a>
      </footer>
    </div>
  )
}

export default footer
