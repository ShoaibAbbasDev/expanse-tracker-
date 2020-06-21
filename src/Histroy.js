import React , {useContext} from 'react'
import {GlobalContext} from './GlobalState'
import Transaction from './Transaction'


 function Histroy() {
     const {transactions}=useContext(GlobalContext);
     
    return (
        <div>
            <h3>
                Histroy
            </h3>
            <ul className="list">
                {transactions.map(transactions=>(<Transaction key={transactions.id} transactions={transactions} />))}
                
            </ul>
            
        </div>
    );
}
export default Histroy;
