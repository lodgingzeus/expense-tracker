import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const handleClick = (e) => {
        e.preventDefault()
    }

  return (
    <div className='dark:bg-slate-400 flex flex-col h-screen justify-center items-center'>
        <form className='dark:bg-[#6a6d7048] flex h-64 w-64 flex-col items-center'>
            <h1 className='mt-4 mb-4 text-2xl'>Whalecum</h1>
            <input type="text" className='m-2 p-1 w-12/12 text-black bg-transparent border-b-2' placeholder='Email or Username'/>
            <input type="password" className='m-4 p-1 text-black bg-transparent border-b-2' placeholder='Password'/>
            <button onClick={handleClick} className="mt-2 dark:bg-slate-700 w-12">Login</button>
        </form>
            Don't have an account yet?
            <Link to="/signup">
                <button>Sign up</button> 
            </Link>
    </div>
  )
}

export default LoginPage