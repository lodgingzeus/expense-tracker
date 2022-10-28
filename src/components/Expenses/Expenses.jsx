import React from 'react'
import ExpenseItem from './ExpenseItem/ExpenseItem'

const Expenses = ({ expenses, deleteExpense }) => {
  return expenses.map(expense => (
    <ExpenseItem key = {expense.id} expense = {expense} deleteExpense = {deleteExpense}/>
  )) 
}

export default Expenses