import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  // control display of Expense Form (show/hide)
  const [isEditing, setIsEditing] = useState(false);

  //get data from ExpenseForm user's input
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //copy & add id property for input data
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    // console.log(expenseData);

    //push data to its parent component
    props.onAddExpense(expenseData);

    //close the form
    stopEditingHandler();
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
