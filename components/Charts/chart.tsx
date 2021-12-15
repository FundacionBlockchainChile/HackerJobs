import React from 'react'
import { Bar } from 'react-chartjs-2'
import styles from '../../styles/Chart.module.css'

const data = {
  labels: [
    'Data Science / Analytics',
    'Programación',
    'SysAdmin / DevOps / QA',
    'Producto, Innovación y Agilidad',
    'Operaciones / Admin',
    'Ciberseguridad',
  ],
  datasets: [
    {
      label: 'Ofertas publicadas',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

export const Grafico: Function = (): any => ({
  // displayName: 'BarExample',
  render() {
    return (
      <div className={styles.chart}>
        <h3>Ofertas laborales / Categoría</h3>
        <Bar
          data={data}
          width={600}
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    )
  },
})
