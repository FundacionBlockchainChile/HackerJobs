import React from 'react'
import filters from '../styles/Filters.module.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { CardGroup, Card, Row, Col } from 'react-bootstrap'

const Filters = () => {
  return (
    <div className={filters.filters}>
      <h4>Filtros</h4>
      <ul>
        <li>
          <p>Hombre</p>
          <p>❌</p>{' '}
        </li>
        <li>
          <p>Calzado</p>
          <p>❌</p>{' '}
        </li>
        <li>
          <p>Deportivo</p>
          <p>❌</p>{' '}
        </li>
      </ul>
      <Row xs={1} md={1}>
        <Col>
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              size="sm"
              className={filters.dropdown}
            >
              Marca
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown_basic">
              <Dropdown.Item href="#/action-1">Apple</Dropdown.Item>
              <Dropdown.Item href="#/action-2">HP</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Dell</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              size="sm"
              className={filters.dropdown}
            >
              Precio
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">0 - 1(M)</Dropdown.Item>
              <Dropdown.Item href="#/action-2">1(M) - 2(M)</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2(M) - 3(M)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              size="sm"
              className={filters.dropdown}
            >
              Categoria
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Ropa Mujer</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Ropa Hombre</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tecnologia</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Computacion</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              size="sm"
              className={filters.dropdown}
            >
              Genero
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Mujer</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Hombre</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Niños</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </div>
  )
}

export default Filters
