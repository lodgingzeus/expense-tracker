import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const handleClick = (e) => {
        e.preventDefault()
    }

  return (
    <section className='h-screen w-screen'>
        <div className='dark:bg-[#111827] flex flex-col items-center justify-center px-12 py-16 mx-auto h-screen w-screen md:h-screen lg:py-0'>
            <form className='dark:bg-[#1F2937] flex space-y-4 md:space-y-6 sm:p-12 flex-col items-center rounded-xl'>
                <h1 className='mt-4 mb-4 text-xl font-bold decoration-8'>Sign in to your account</h1>
                    <div className='w-full'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">You email</label>
                        <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Email or Username'/>
                    </div>
                    <div className='w-full'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your Password</label>
                        <input type="password" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Password'/>
                    </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-start'>
                        <div className='flex items-center h-6'>
                            <input type="checkbox" required="" className='w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800' aria-describedby="remember"></input>
                        </div>
                        <div>
                            <label for="remember" className='text-gray-500 ml-1'>Remember me</label>
                        </div>
                    </div>
                    <Link to="/">
                        <div className='ml-8 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'>Forgot Password?</div>
                    </Link>
                </div>
                <button onClick={handleClick} className="mt-2 dark:bg-[#2563EB] hover:bg-blue-700 w-full py-2.5 px-5 font-medium rounded-lg text-center">Login</button>
                <div className='text-sm font-light text-gray-500 dark:text-gray-400'>
                    Don't have an account yet?
                    <Link to="/signup">
                        <button className='ml-2 font-bold text-blue-500'>Sign up</button> 
                    </Link>
                </div>
            </form>  
    </div>
    </section>
  )
}

export default LoginPage