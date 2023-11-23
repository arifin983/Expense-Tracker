require("./config");
const expenseSchemaModel = require("./database");
const express = require("express")
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());


app.post("/addExpense",async(req,resp)=>{
    let data = new expenseSchemaModel(req.body)
    let result = await data.save()
    resp.send(result)

});
app.get("/getExpense",async (req, resp) => {
    let expenses = await expenseSchemaModel.find();
    if (expenses.length > 0) {
      resp.send(expenses);
    } else {
      resp.send({ result: "No expenses found" });
    }
  });
app.listen(5500);

