import NewExpenseForm from './NewExpenseForm'
import './NewExpense.css'

const NewExpense = () =>{
  const SaveExpenseDataHandler = (expenseDataEntered) =>{
    const expenseData ={
      ...expenseDataEntered,
      id: Math.random().toString(),
    };
    console.log(expenseData)
  }
  return <div className="new-expense">
    <NewExpenseForm  onSaveExpenseData={SaveExpenseDataHandler}/>
    </div>

}

export default NewExpense;