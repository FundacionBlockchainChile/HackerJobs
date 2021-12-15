import React from 'react'
import { Bar, Bubble } from 'react-chartjs-2'
import styles from '../../styles/Chart.module.css'

const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'USD (Dólares, Años, Ofertas)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 500, y: 1, r: 3 },
        { x: 1200, y: 2, r: 3 },
        { x: 2000, y: 3, r: 5 },
        { x: 3000, y: 4, r: 10 },
        { x: 4500, y: 5, r: 5 },
      ],
    },
  ],
}

export const Burbujas: Function = (): any => ({
  displayName: 'BubbleExample',
  render() {
    return (
      <div className={styles.chart}>
        <h3>Salario promedio / Años de experiencia</h3>
        <Bubble data={data} width={400} height={200} />
      </div>
    )
  },
})
