import "./App.css";
import Expenses from "./components/Expenses";
import Expensitem from "./components/ExpensItem";

function App() {
  const expenses = [
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
      date: new Date(2022, 3, 26),
    },
    {
      id: "e3",
      title: "Ttaps",
      amount: 234.23,
      date: new Date(2022, 3, 26),
    },
    {
      id: "e4",
      title: "Blubs",
      amount: 234.23,
      date: new Date(2022, 3, 26),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
