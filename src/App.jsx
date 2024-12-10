import React, { useContext, useEffect, useState } from "react"
import Login from "./Components/Auth/Login"
import Employee from "./Components/dashboard/Employee"
import TaskListNum from "./Components/other/TaskListNum"
import TaskList from "./Components/TaskList/TaskList"
import AdminDash from "./Components/dashboard/AdminDash"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState("")
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == "admin@1.com" && password == "123") {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (userData) {
      const employee = userData.find(
        e => email == e.email && password == e.password
      )
      if (employee) {
        setUser("employee")
        setloggedInUserData(employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        )
      }
    } else {
      alert("invalid credentials")
    }
  }
  const data = useContext(AuthContext)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDash changeUser={setUser} />
      ) : user == "employee" ? (
        <Employee changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App
