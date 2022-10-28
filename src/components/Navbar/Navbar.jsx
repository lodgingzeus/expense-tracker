import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#0F172A] flex sticky top-0 z-50 w-screen justify-end'>
      <Link to="/">
      <button className='bg-[#2563EB] m-2 rounded-full p-1 w-24 h-10 hover:bg-[#0C4A6E]'>Home</button>
      </Link>
        <Link to="/login">
          <button className='bg-[#2563EB] m-2 rounded-full p-1 w-24 h-10 hover:bg-[#0C4A6E]'>Log in</button>
        </Link>
        <Link to="/signup">
          <button className='bg-[#DC2626] m-2 rounded-full w-24 h-10'>Sign up</button>
        </Link>
    </div>
  )
}

export default Navbar