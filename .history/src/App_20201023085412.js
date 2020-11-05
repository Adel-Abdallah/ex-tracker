import React from "react";
import Header from "./component/Header";
import Balance from "./component/Balance";
import "./App.css";
import IncomeEspenses from "./component/IncomeExpenses";

function App() {
  return (
    <div>
      <div className='container'>
        <Header />
        <Balance />
        <IncomeEspenses />
      </div>
    </div>
  );
}

export default App;
