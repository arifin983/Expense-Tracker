import React from "react";
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";


const Expenses = (props) => {
    return(
        <Card className="expenses">
         
         {
            props.item.map(
              expense => (
                <ExpenseItem
                      key= {expense.id }
                      title = {expense.title}
                      amount = { expense.amount}
                      // amount = { expense.price}
                      date = {expense.date}
                      //gender = "male"

                />

              )
            )
         }
            
        {/* <ExpenseItem
            date = { props.item[1].date}
            title = {props.item[1].title}
            amount = {props.item[1].amount}
            gender = "male"

        />
        <ExpenseItem
          date = {   props.item[2].date}
          title = {  props.item[2].title}
          amount = { props.item[2].amount}
          gender = "male"

        />
        <ExpenseItem
          date = {  props.item[3].date}
          title = { props.item[3].title}
          amount = {props.item[3].amount}
          gender = "male"

        />
   */}
        </Card>
    );

};
export default Expenses;