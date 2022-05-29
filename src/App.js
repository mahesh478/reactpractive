import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpanse/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 234.23,
    date: new Date(2022, 3, 26),
  },
  {
    id: "e2",
    title: "water Pumps",
    amount: 234.23,
    date: new Date(2021, 3, 26),
  },
  {
    id: "e3",
    title: "Ttaps",
    amount: 2334.23,
    date: new Date(2020, 3, 26),
  },
  {
    id: "e4",
    title: "Blubs",
    amount: 234.23,
    date: new Date(2020, 6, 26),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpensehandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
