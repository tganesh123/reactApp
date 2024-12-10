import React from "react"
import AcceptTask from "./AcceptTask"
import NewTask from "./NewTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"

const TaskList = ({ data }) => {
  console.log(data)

  const taskEntries = Object.entries(data.tasks)

  return (
    <div
      id='taskList'
      className='flex overflow-x-auto items-center justify-start flex-nowrap gap-5 h-[55%] py-5 mt-10'
    >
      {data.tasks.map((elem,key) => {
        if (elem.status_active) {
          return <AcceptTask key={key} data = {elem} />
        }
        if (elem.new_task) {
          return <NewTask key={key} data = {elem} />
        }
        if (elem.completed) {
          return <CompleteTask key={key} data = {elem} />
        }
        if (elem.failed) {
          return <FailedTask key={key} data = {elem} />
        }
     
      })}
    </div>
  )
}

export default TaskList
