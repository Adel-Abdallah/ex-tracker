import React from "react";
import Header from "./component/Header";
import Balance from "./component/Balance";
import "./App.css";
import IncomeEspenses from "./component/IncomeExpenses";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/AddTransaction";

import {GlobalPrvider} from "./context/GlobleState"

function App() {
  return (
    <GlobalPrpvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeEspenses />
        <TransactionList />
        <AddTransaction/>
      </div>
    </GlobalPrpvider>
  );
}

export default App;
