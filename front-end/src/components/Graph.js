import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Labels from './Labels';

Chart.register(ArcElement);

//customize the doughnut chart
const config = {
  data : {
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderRadius : 20,
      spacing : 5
    }]
  },
  options :{
    cutout :115
  }
}

const Graph = () => {
  return (
    <div className='flex jutify-content max-w-xs mx-auto'>
      <div className='item'>
        <div className='chart relative'>

          <Doughnut {...config}></Doughnut>
          <h3 className='mb-4 font-bold title'>Total
            <span className='block text-3xl text-emerald-400'>${0}</span></h3>
            
        </div>
        <div className='flex flex-col py-10 gap-4'>
          {/* labels */}
          <Labels></Labels>
        </div>
      </div>
      
    </div>
  )
}

export default Graph
