import React from 'react'

export default function List() {
  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 font-bold text-2xl'>Transaction History</h1>
      
    </div>
  )
}

function Transaction({category}){
    if(!category) return null;

    return(
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r">
            <span className='block w-full'>Savings</span>
        </div>
    )
}
