import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  // const deleteExpenseHandler = (expenseId) => {
  //   props.onDeleteExpense(expenseId);
  // };

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          // onDeleteExpense={deleteExpenseHandler}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
