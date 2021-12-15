import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import styles from '../../styles/Chart.module.css'

const data = {
  labels: ['Chile', 'Peru', 'Colombia', 'EEUU', 'Remoto', 'Otros'],
  datasets: [
    {
      data: [300, 50, 100, 250, 1550, 35],
      backgroundColor: [
        'red',
        'orange',
        'yellow',
        'darkblue',
        'cyan',
        'green',
      ],
      hoverBackgroundColor: 
        'white',
    },
  ],
}

export const Donut: Function = (): any => (
  <div className={styles.chart}>
    <h2>Ofertas laborales / País</h2>
    <Doughnut data={data} width={400} height={400} />
  </div>
)
