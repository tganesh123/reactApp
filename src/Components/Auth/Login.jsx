import React, { useState } from "react"

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const submitHandler = e => {
    e.preventDefault()

    handleLogin(email, password)

    setemail("")
    setpassword("")
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={e => {
            submitHandler(e)
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={e => {
              setemail(e.target.value)
            }}
            required
            type="email"
            placeholder="enter email"
            className="text-white outline-none bg-transparent py-3 px-5 rounded-full placeholder:text-gray-400 border-2 border-emerald-600 text-xl mb-5"
          />
          <input
            value={password}
            onChange={e => {
              setpassword(e.target.value)
            }}
            required
            type="password"
            placeholder="xyz"
            className="text-white outline-none bg-transparent py-3 px-5 rounded-full placeholder:text-gray-400 border-2 mb-5 border-emerald-600 text-xl"
          />
          <button className="mt-7 font-semibold placeholder:text-white w-full text-white outline-none border-none py-3 px-8 rounded-full border-2 bg-emerald-600 text-xl">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
