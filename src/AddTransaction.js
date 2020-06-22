import React, {useState, useContext} from 'react'
import {GlobalContext} from './GlobalState'

 function AddTransaction() {

    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);
    const handleAddition = (event) =>{
        event.preventDefault();

        const newTransaction={
            id:  Math.floor(Math.random() * 10000000),
            text,
            amount: + amount
        }
        addTransaction(newTransaction);

      }
   

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleAddition}>
                
                    <label htmlFor="text">*Description</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="*Description "/>

                
                    <label className="div-amount" htmlFor="amount">*Aomount<br></br>(negative  - expanse , positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="*Amount" />
               
                <button className="btn"  >Add Transaction</button>
              
            </form>

            </div>
        
    )
}
export default AddTransaction;
