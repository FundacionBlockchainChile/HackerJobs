import React, { useEffect, useState } from 'react'
import { CardGroup, Card, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import styles from '../styles/Jobs.module.css'
import Accordion from 'react-bootstrap/Accordion'
import { Grafico } from '../components/Charts/chart'
import { Burbujas } from '../components/Charts/bubble'
import { Donut } from '../components/Charts/donut'
import { PolarGraph } from '../components/Charts/polar'
import { RadarGraph } from '../components/Charts/radar'

const Jobs = ({ toggleJobsAndCourses }: any) => {
  const [jobs, setJobs] = useState([] as any)
  const [query, setquery] = useState('TI' as string)
  const [switcher, setswitcher] = useState(true)

  useEffect(() => {
    getjobs()
  }, [])

  const url = `https://www.getonbrd.com/api/v0/search/jobs?query=${query}&expand=[%22company%22]`

  const getjobs = async () => {
    setJobs([])
    let response = await axios.get(url)
    await setJobs(response.data)
  }

  const toggleGrahsAndJobs = () => {
    setswitcher(!switcher)
  }

  const onEnter = (e: any) => {
    if (e.key === 'Enter') {
      getjobs()
    }
  }

  return (
    <>
      <div className={styles.jobs_section}>
        <h1>Trabajos Disponibles</h1>

        <div className={styles.searchBox}>
          <input
            className={styles.input}
            onChange={(e) => {
              setquery(e.target.value)
            }}
            onKeyDown={onEnter}
            type="text"
            placeholder="Search by concept, ex: 'Ti'"
          />
          <p onClick={() => getjobs()}>Buscar</p>
        </div>

        <div className={styles.switcher}>
          <p onClick={() => toggleGrahsAndJobs()}>
            {!switcher ? 'Ver Empleos' : 'Ver Graficos'}
          </p>
        </div>

        {jobs.length !== 0 ? (
          <>
            {switcher ? (
              <>
                <Row xs={1} md={1} className="g-4 mt-1">
                  {jobs.data.map((job: any, idx: React.Key) => (
                    <Col key={idx}>
                      <div className={styles.card}>
                        <h6 className={styles.title}>{job.attributes.title}</h6>
                        <div className={styles.info}>
                          <p>{job.attributes.category_name}</p>
                          <p className={styles.red}>|</p>
                          <p>{job.attributes.country}</p>
                          <p className={styles.red}>|</p>
                          <p>{job.attributes.remote_modality}</p>
                        </div>
                        <Accordion
                          defaultActiveKey="0"
                          className={styles.accordion}
                        >
                          <Accordion.Item
                            eventKey="1"
                            className={styles.accordionItem}
                          >
                            <Accordion.Header>Ver Funciones</Accordion.Header>
                            <Accordion.Body>
                              <p className={styles.funciones}>
                                {job.attributes.functions
                                  .replace(/<em>/g, '')
                                  .replace(/<br>/g, '')
                                  .replace(/<p>/g, '')
                                  .replace(/<\/p>/g, '')
                                  .replace(/<li>/g, '')
                                  .replace(/<\/li>/g, '')
                                  .replace(/<ul>/g, '')
                                  .replace(/<\/ul>/g, '')
                                  .replace(/<div>/g, '')
                                  .replace(/<\/div>/g, '')
                                  .replace(/<strong>/g, '')
                                  .replace(/<\/strong>/g, '')}
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                        <div className={styles.priceAndBtnBox}>
                          {job.attributes.max_salary !== null ? (
                            <p>
                              Salary: {job.attributes.min_salary} -{' '}
                              {job.attributes.max_salary}
                            </p>
                          ) : (
                            <p>Salary: Not Specified</p>
                          )}
                          <p
                            onClick={() => toggleJobsAndCourses()}
                            className={styles.btn}
                          >
                            Capacitate
                          </p>
                          <a href={job.links.public_url} className={styles.btn}>
                            Ir al empleo
                          </a>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </>
            ) : (
              <>
                <Grafico />
                <Burbujas />
                <Donut />
                <PolarGraph />
                <RadarGraph />
              </>
            )}
          </>
        ) : (
          <div>
            <Spinner animation="grow" variant="danger" className="m-2" />
            <Spinner animation="grow" variant="danger" className="m-2" />
            <Spinner animation="grow" variant="danger" className="m-2" />
          </div>
        )}
      </div>
    </>
  )
}

export default Jobs
