import React from "react"

const TaskListNum = ({ data }) => {
  return (
    <div className="flex mt-10  justify-between gap-5 screen">
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className="text-2xl font-semibold">{data.task_stats.new_task}</h2>
        <h3 className="text-xl font-medium">new Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className="text-2xl font-semibold">{data.task_stats.completed}</h2>
        <h3 className="text-xl font-medium">completed</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className="text-2xl font-semibold">{data.task_stats.failed}</h2>
        <h3 className="text-xl font-medium">failed</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className="text-2xl font-semibold">{data.task_stats.active}</h2>
        <h3 className="text-xl font-medium">active</h3>
      </div>
    </div>
  )
}

export default TaskListNum
