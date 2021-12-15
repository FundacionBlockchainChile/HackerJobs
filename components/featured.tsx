import React from 'react'
import featured from '../styles/Featured.module.css'
import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-bootstrap/Spinner'

const Featured = ({ products }: any) => {
  return (
    <div className={featured.featured}>
      {products.length !== 0 ? (
        <Carousel fade>
          {products.map(
            (
              product: {
                image: string | undefined
                title: string | undefined
                price: string | undefined
                description: string
              },
              idx: React.Key
            ) => (
              <Carousel.Item key={idx}>
                <div className={featured.item}>
                  <img
                    className="d-block w-20"
                    src={product.image}
                    alt={product.title}
                    style={{ height: '250px', maxWidth: '380px' }}
                  />
                  <div className={featured.card_item}>
                    <h5>{product.title}</h5>
                    <h4>$ {product.price}</h4>
                    <p className="hide_small">
                      {product.description.substring(0, 200)}...
                    </p>
                  </div>
                </div>
                {/* <Carousel.Caption></Carousel.Caption> */}
              </Carousel.Item>
            )
          )}
        </Carousel>
      ) : (
        <div>
          <Spinner animation="grow" variant="warning" className="m-2" />
          <Spinner animation="grow" variant="warning" className="m-2" />
          <Spinner animation="grow" variant="warning" className="m-2" />
        </div>
      )}
    </div>
  )
}

export default Featured
