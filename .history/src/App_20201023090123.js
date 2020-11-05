import React from "react";
import Header from "./component/Header";
import Balance from "./component/Balance";
import "./App.css";
import IncomeEspenses from "./component/IncomeExpenses";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/AddTransaction";

function App() {
  return (
    <div>
      <div className='container'>
        <Header />
        <Balance />
        <IncomeEspenses />
        <TransactionList />
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
