import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { gifs } from '../db/db'
import styles from '../styles/Gifs.module.css'

const Gifs = () => {
  return (
    <div className={styles.stores}>
      <h1>Hackers</h1>
      <Row xs={1} md={3} className="g-4">
        {gifs.map((gif, idx) => (
          <Col key={idx}>
            <div className={styles.storeCard}>
              <img src={gif.url} alt={gif.name} />
              <h4 className={styles.title}>{gif.name}</h4>
              {/* <p>{gif.description.substring(0, 200)}...</p> */}
              {/* <Button className={styles.btn}>Ir a la tienda</Button> */}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Gifs
