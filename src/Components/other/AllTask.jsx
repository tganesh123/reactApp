import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rouded  mt-5'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee name</h2>
        <h2 className='text-lg font-medium w-1/5'>New task</h2>
        <h2 className='text-lg font-medium w-1/5'>Active task</h2>
        <h2 className='text-lg font-medium w-1/5'>Completed</h2>
        <h2 className='text-lg font-medium w-1/5'>Failed</h2>
      </div>
      <div className='h-[80%]'>
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className='border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'
            >
              <h2 className=' text-lg font-medium w-1/5'>{elem.first_name}</h2>
              <h2 className='text-lg font-medium text-[#1b7e6f] w-1/5'>
                {elem.task_stats.new_task}
              </h2>
              <h2 className='text-lg font-medium text-[#6c59f9] w-1/5'>
                Active {elem.task_stats.active}
              </h2>
              <h2 className='text-lg font-medium text-[#3cea5c] w-1/5'>
                {elem.task_stats.completed}
              </h2>
              <h2 className='text-lg font-medium text-[#df3d3d] w-1/5 '>
                {elem.task_stats.failed}
              </h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllTask
