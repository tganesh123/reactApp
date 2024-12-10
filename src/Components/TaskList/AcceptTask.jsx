import React from "react"

const AcceptTask = ({data}) => {
  
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-blue-500 p-5 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h2 className='bg-red-950 text-sm px-3 py-1 rounded'>{data.category}</h2>
        <h4 className='text-sm'><data value="" className="date">{data.date}</data></h4>
      </div>
      <h2 className='mt-3 text-xl font-semibold'> {data.title}</h2>
      <p className='text-sm mt-2'>
        {data.description}
      </p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm '>
          mark as completed
        </button>
        <button className='bg-red-500 py-1 px-2 text-sm'>mark as failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
