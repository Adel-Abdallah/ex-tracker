import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import "./App.css";
import IncomeEspenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

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
