import React from "react";
import Header from "./component/Header";
import Balance from "./component/Balance";
import "./App.css";
import IncomeEspenses from "./component/IncomeExpenses";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/AddTransaction";

import {GlobalProvider} from "./context/GlobleState"

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeEspenses />
        <TransactionList />
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
