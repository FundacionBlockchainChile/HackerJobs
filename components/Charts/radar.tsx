import React from 'react'
import { Radar } from 'react-chartjs-2'
import styles from '../../styles/Chart.module.css'

const data = {
  labels: ['Otros', 'Perú', 'Colombia', 'Remoto', 'EEUU', 'Chile'],
  datasets: [
    {
      label: 'Postulaciones',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [60, 30, 50, 120, 60, 150],
    },
  ],
}

export const RadarGraph: Function = (): any => (
  <div className={styles.chart}>
    <h2>Postulaciones / País</h2>
    <Radar data={data} width={400} height={400} />
  </div>
)
