import React from 'react'
import './ExpenseItem.css'
import Months from './Months'

const ExpenseItem = ({ expense: { name, amount, date, id }, deleteExpense }) => {
  const dateToUse = new Date(date)
  const newDate = `${dateToUse.getDate()} ${Months[dateToUse.getMonth() - 1]} ${dateToUse.getFullYear()}`

  const handleClick = () => {
    deleteExpense(id)
  }

  return (
    
    <div className='text-cyan-600 text-xl drop-shadow-lg'>
      <div className="rounded-bl-3xl rounded-xl oveflow- min-w-[50vw] rounded-br-3xl flex bg-[#F5F5F5] p-6 flex-row justify-between align-items-center m-2">
        <div>{name}</div>
        <div>Rs. {amount}</div>
        <div>{newDate}</div> 
        <div className='icons'>
          <div>
          <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duration-300 ease-in-out cursor-pointer hover:scale-105 text-red-500 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem