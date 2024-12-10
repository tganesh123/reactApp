import React from "react"

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-emerald-500 p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-950 text-sm px-3 py-1 rounded">{data.category}</h2>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-3 text-xl font-semibold"> {data.title}</h2>
      <p className="text-sm mt-2">
       {data.description}
      </p>
      <div className="mt-2">
        <button className="w-full bg-yellow-400">failed</button>
      </div>
    </div>
  )
}

export default FailedTask
