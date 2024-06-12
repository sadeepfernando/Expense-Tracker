import React from 'react';
import 'boxicons';
import { default as api } from '../store/apiSlice';



export default function List() {

  const{ data, isFetching, isError, isSuccess } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();



    const handleClick = async(e) =>{

      if(!e.target.dataset.id) return 0;

      await deleteTransaction({_id : e.target.dataset.id });
    }
    
    let Transactions;

    if(isFetching){
        Transactions = <div>Fetching</div>
    }else if(isSuccess){
        Transactions =  data.map((value, key) =><Transaction key={key} category={(value)} handler ={handleClick}></Transaction>) 
        
    }else if(isError){
        Transactions = <div>Error</div>
    }

  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 font-bold text-2xl'>Transaction History</h1>

      { Transactions }
      
    </div>
  )
}

function Transaction({category , handler}){
    if(!category) return null;

    return(
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight: `8px solid ${category.color ?? '#e5e5e5' }`}}>
          <button className='px-3' onClick={ handler }><box-icon data-id = {category._id ?? ''} name='trash' size='15px'></box-icon></button>
            <span className='block w-full'>{category.name ?? ''}</span>
        </div>
    )
}
