import React from "react";

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount }>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className='delete-btn'>x</button>
    </li>
  );
};

export default Transaction;
