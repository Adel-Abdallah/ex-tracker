import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobleState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(transaction => (
         <T
        ))}
      </ul>
    </>
  );
};

export default TransactionList;