import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";



const ExpenseItem = (props) => {
//    const [newTitle,setNewTitle] = useState("")
//    const [title, setTitle] = useState(props.title);
//    const changeHandler = (e) =>{
//     setNewTitle(e.target.value);
//    }
//    const clickHandler = () => {
//     setTitle(newTitle);
    
//    };


     
    return(
        <Card className="expense-item">
            <ExpenseDate
             date = {new Date(props.date)}
            //date = {props.date}
            />
            <div className="expense-item__description">
                <h1>{props.title}</h1>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <input type="text" value={newTitle}  onChange={changeHandler}></input>
            <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
       
};
export default ExpenseItem;