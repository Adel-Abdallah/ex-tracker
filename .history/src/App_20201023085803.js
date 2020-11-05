import React from "react";
import Header from "./component/Header";
import Balance from "./component/Balance";
import "./App.css";
import IncomeEspenses from "./component/IncomeExpenses";
import TransactionList from './../.history/src/component/TransactionList_20201023085601';


function App() {
  return (
    <div>
      <div className='container'>
        <Header />
        <Balance />
        <IncomeEspenses />
        <TransactionList
      </div>
    </div>
  );
}

export default App;
