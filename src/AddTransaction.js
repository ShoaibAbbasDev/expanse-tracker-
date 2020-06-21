import React, {useState, useContext} from 'react'
import {GlobalContext} from './GlobalState'

 function AddTransaction() {

    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);
    const onSubmit = e =>{
        //e.prenventDefault();

        const newTransaction={
            id:  Math.floor(Math.random() * 10000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Text "/>

                </div>
                <div className="form-control">
                    <label htmlFor="amount">Aomount<br></br>(negative  - expanse , positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount" />
                </div>
                <button className="btn" onClick={() => window.location.reload(false)} >Add Transaction</button>
            </form>

            
        </div>
    )
}
export default AddTransaction;
