import React, { useState } from "react"
import { setLocalStorage } from "../../utils/localStorage"

const Header = props => {
  //   const [username, setUsername] = useState("")
  //   if (!data) {
  //     setUsername("Admin")
  //   } else {
  //     setUsername(data.first_name)
  //   }
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "")
    props.changeUser("")
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        {props.data.first_name} 🖐
      </h1>
      <button
        onClick={() => {
          logOutUser()
        }}
        className='bg-red-400 text-white px-5 py-2 rounded-smtext-lg font-medi'
      >
        Log out
      </button>
    </div>
  )
}

export default Header
