import React from 'react'
import { Polar } from 'react-chartjs-2'
import styles from '../../styles/Chart.module.css'

const data = {
  datasets: [
    {
      data: [110, 100, 70, 30, 80, 20],
      backgroundColor: [
        'LightCoral',
        'LightSalmon',
        'red',
        'orange',
        'orangered',
        'coral',
      ],
      hoverBackgroundColor: 'white',
      label: '', // for legend
    },
  ],
  labels: [
    'Data Science / Analytics',
    'Programación',
    'SysAdmin / DevOps / QA',
    'Producto, Innovación y Agilidad',
    'Operaciones / Admin',
    'Ciberseguridad',
  ],
}

export const PolarGraph: Function = (): any => (
  <div className={styles.chart}>
    <h2>Postulaciones / Cargo</h2>
    <Polar data={data} width={400} height={400} />
  </div>
)
