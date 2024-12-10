import React from "react"
import Header from "../other/Header"
import TaskListNum from "../other/TaskListNum"
import TaskList from "../TaskList/TaskList"

const Employee = props => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNum data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default Employee
