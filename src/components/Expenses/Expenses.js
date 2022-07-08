import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  // transfer state from ExpenseFilter to its parent components
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  //create list of expense that match with the year filter's value
  const filteredExpenses = props.list.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  //modified content of expense base on their length of result

  // console.log(props.list);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
