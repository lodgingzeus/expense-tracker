import { useState } from 'react'
import Expenses from '../Expenses/Expenses'
import Navbar from '../Navbar/Navbar'

const HomePage = () => {

  const [ expenses, setExpense ] = useState([])
  const [newExpense, setNewExpense] = useState(
    {
      name: '',
      amount: '',
      date: ''
    }
  )

  const handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setNewExpense(values => ({
        ...values, [name]: value, id: Math.floor(Math.random() * 9999999) 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, amount, date } = newExpense
    if(name === '' || amount === '' || date === '') return

    setExpense(expense => {
      return [...expense, newExpense]
    })
    // remove input field values on submit
    setNewExpense({
      name: '',
      amount: '',
      date: ''
    })
  }

  const deleteExpense = (id) => {
    let tempExpenses = [...expenses]
    const newExpenses = tempExpenses.filter(expense => expense.id !== id)
    setExpense(newExpenses)
  }

  return (
      <div className='relative flex flex-col justify-items-center items-center scroll-smooth'>
            <Navbar />
        <h1 className='block text-lg text-[#a685bc] font-bold'>All your expenses in one place</h1>
        <form onSubmit={handleSubmit} className = "flex justify-items-stretch m-2 items-center divide-dashed">
          <input onChange={handleChange} className='dark:bg-slate-700 p-2 rounded-md disabled:opacity-25 enabled:hover:border-white m-2' type="text" value={newExpense.name} name='name' placeholder='Expense Name'/>
          <input onChange={handleChange} className='m-2 p-2 dark:bg-slate-700 rounded-md' type="number" value={newExpense.amount} name='amount' placeholder='Amount INR' />
          <input onChange={handleChange} className='m-2 p-2 dark:bg-slate-700 rounded-md' type="date" value={newExpense.date} name='date' placeholder='date' />
          <button className='w-24 h-10 rounded-full bg-sky-500 hover:bg-sky-700' type='submit'>Add</button>
        </form>
        <h1 className='text-green-600 font-bold'>This Month's expenses</h1>
        <Expenses expenses = {expenses} deleteExpense = {deleteExpense}/>
      </div>
  )
}

export default HomePage