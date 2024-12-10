import React, { useContext, useState } from "react"
import TaskList from "../TaskList/TaskList"
import { AuthContext } from "../../context/AuthProvider"

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [assign, setassign] = useState("")
  const [description, settaskDescription] = useState("")
  const [date, settaskDate] = useState("")
  const [category, settaskCategory] = useState("")
  const [title, settitle] = useState("")
  const [newTask, setNewTask] = useState({})
  const submitHandler = e => {
    e.preventDefault()
    setNewTask({
      title,
      description,
      date,
      category,

      status_active: false,
      new_task: true,
      failed: false,
      completed: true,
    })
    const data = userData
    data.forEach(function (elem) {
      if (assign == elem.first_name) {
        elem.tasks.push(newTask)
        elem.task_stats.new_task = elem.task_stats.new_task + 1
      }
    })
    setUserData(data)
    console.log(data)

    settitle("")
    setassign("")
    settaskDate("")
    settaskCategory("")
    settaskDescription("")
  }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form
        onSubmit={e => {
          submitHandler(e)
        }}
        className='flex flex-wrap w-full items-start justify-between'
      >
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>task title</h3>
            <input
              value={title}
              onChange={e => {
                settitle(e.target.value)
              }}
              className='text-sm py-1 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='make a design'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={date}
              onChange={e => {
                settaskDate(e.target.value)
              }}
              className='text-sm py-1 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='date'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              value={assign}
              onChange={e => {
                setassign(e.target.value)
              }}
              className='text-sm py-1 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='employee name'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>category</h3>
            <input
              value={category}
              onChange={e => {
                settaskCategory(e.target.value)
              }}
              className='text-sm py-1 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='employee name'
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5 '>description</h3>
          <textarea
            value={description}
            onChange={e => {
              settaskDescription(e.target.value)
            }}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
            name=''
            id=''
          ></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
            create task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
