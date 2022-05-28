import React, { useState } from "react";
import Expensitem from "./ExpensItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../filter/ExpensesFilter";
function Expenses(props) {
  const [filterdYear, setFilteredYear] = useState("2020");
  const filterCahnge = (slectedValue) => {
    setFilteredYear(slectedValue);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterdYear} onChangeFilter={filterCahnge} />
        {filteredExpenses.length === 0 ? (
          <p>no records found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <Expensitem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
