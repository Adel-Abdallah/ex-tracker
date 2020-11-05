import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobleState";
const TransactionList = () => {
  const {transactions}=useContext(GlobalContext);

  console.log(context);
  return (
    <>
      <h3>History</h3>
      <ul  className='list'>

        {transactions.map(transaction =>())}
        
      </ul>
    </>
  );
};

export default TransactionList;
