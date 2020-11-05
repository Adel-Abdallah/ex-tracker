import React from "react";
import Header from "./component/Header";
import Balance from "./component/Balance";
import "./App.css";
import IncomeEspenses from "./component/IncomeExpenses";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/AddTransaction";

import {GlobalPrpvider} from 

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeEspenses />
        <TransactionList />
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
