import React from "react";

const Transaction = (prop) => {
  return (
    <li className='minus'>
      {transaction.text} <span>-$400</span>
      <button className='delete-btn'>x</button>
    </li>
  );
};

export default Transaction;
