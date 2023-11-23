import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// let DUMMY_EXPENSE = [
//   {
//     id:"e1",
//     title:"School Fee",
//     amount:300,
//     date:new Date(2023,6,7)
//   },
//   {
//     id:"e2",
//     title:"Books",
//     amount:250,
//     date:new Date(2021,11,27)
//   },
//   {
//     id:"e3",
//     title:"Desktop System PC",
//     amount:54000,
//     date:new Date(2022,7,5)
//   },
//   {
//     id:"e4",
//     title:"Food",
//     amount:150,
//     date:new Date(2023,3,5)
//   }
// ];

const App = () => {
  const [expenses, setExpenses] = useState([]);
  //const [item, getExpenses] = useState({});
  const addExpenseHandler = async (expense) => {
    let result = await fetch("http://localhost:5500/addExpense", {
      method: "post",
      body: JSON.stringify(expense),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    //setExpenses([result])
    apiHandler();
    //const updatedExpense = [expense, ...expenses];
    //setExpenses(updatedExpense);
    // getExpenses(expense)
    //console.log(expense)
    //console.log(expenses)
    //console.log(item)
  };
  useEffect(() => {
    apiHandler();
  }, []);

  const apiHandler = async () => {
    let result = await fetch("http://localhost:5500/getExpense");
    result = await result.json();
    setExpenses(result);
  };

  return (
    <div>
      {/* <h1>
          
          Let's get started!
        </h1> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};
export default App;
