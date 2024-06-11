import React from 'react';
import { default as api } from '../store/apiSlice';



export default function Labels() {

    const{ data, isFetching, isError, isSuccess } = api.useGetCategoriesQuery();
    console.log(data);
  return (
    <>
    {obj.map((value, index) =>
        <LabelComponent key={index} data={value}></LabelComponent>
    )}
    
    </>
  )
}

function LabelComponent({data}){
    if(!data){
        return <></>
    }
    return(
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{background:data.color ??' #f9c74f'}}></div>
                    <h3 className='text-md'>{data.type ?? ''}</h3>
            </div>
            <h3 className='font-bold'>{data.percent ?? 0}%</h3>
        </div>
    )
}
