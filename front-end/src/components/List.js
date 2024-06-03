import React from 'react';
import 'boxicons';


const obj =[
  {
      name:'Savings',
      color:'rgb(255, 99, 132)',
  },
  {
     name:'Investements',
      color:'rgb(255, 99, 132)',
  },
  {
      name:'Expenses',
      color:'rgb(255, 99, 132)',
  },
]


export default function List() {
  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 font-bold text-2xl'>Transaction History</h1>

      { obj.map((value, key) =><Transaction key={key} category={(value)}></Transaction>) }
      
    </div>
  )
}

function Transaction({category}){
    if(!category) return null;

    return(
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight: `8px solid ${category.color ?? '#e5e5e5' }`}}>
          <button className='px-3'><box-icon name='trash' size='15px'></box-icon></button>
            <span className='block w-full'>{category.name ?? ''}</span>
        </div>
    )
}