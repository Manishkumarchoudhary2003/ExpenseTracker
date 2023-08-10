import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  // This is the Dummy expenses.
  {
    id: "e1",
    title: "Papers",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 9, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "PLastic",
    amount: 50.89,
    date: new Date(2020, 1, 27),
  },
  {
    id: "e6",
    title: "Fruits",
    amount: 500.12,
    date: new Date(2022, 3, 5),
  },
  {
    id: "e7",
    title: "Vegetables",
    amount: 200.1,
    date: new Date(2022, 9, 20),
  },
  {
    id: "e8",
    title: "Cold Drink",
    amount: 100.1,
    date: new Date(2022, 1, 25),
  },
  {
    id: "e9",
    title: "Refrigerator",
    amount: 800.1,
    date: new Date(2023, 5, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // const deleteExpenseHandler = (expenseId) => {
  //   setExpenses((prevExpenses) => {
  //     prevExpenses.filter((expense) => expense.id !== expenseId);
  //   });
  // };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler} /> */}
    </div>
  );
};

export default App;
