import React, {useState} from 'react';

const AddTransaction = () => {
  const [text,setTtext]= useState('');
  const [amount,setAmount]= useState(0);
    return (
        <>
        <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"value={} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    
    </>
      );
}
 
export default AddTransaction;