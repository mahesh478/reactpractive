import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./Expensitem.css";

const Expensitem = (props) => {
  const [title, setTitle] = useState(props.title);

  const newLocal = () => {
    setTitle("Updated!....");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={newLocal}>Change Title</button>
    </Card>
  );
};

export default Expensitem;
