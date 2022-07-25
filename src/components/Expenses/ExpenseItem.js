import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title);
  const [amount, setAmonut] = useState(props.amount);
 const clickHandler = () =>{
   setTitle("Updated");
   setAmonut(amount + 10);
 }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={clickHandler}>change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;