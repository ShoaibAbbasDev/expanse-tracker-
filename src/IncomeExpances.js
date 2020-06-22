import React,{useContext} from 'react'
import {GlobalContext} from './GlobalState'


function IncomeExpances(){
    const {transactions}=useContext(GlobalContext);
    const amounts=transactions.map(transactions=>(transactions.amount));
    console.log(amounts);
    //const total=amounts.reduce((acc,item)=>(acc +=item),0).toFixed(2);
    const income=amounts
    .filter(item=>item>0)
    .reduce((acc,item)=>(acc +=item),0).toFixed(2);
    const expanse=(amounts.filter(item=>item<0).reduce((acc,item)=>(acc +=item),0)* -1).toFixed(2);

    return(
        
        <div className="inc-exp-container">
            <div className="income-part">
                <h4>Income</h4>
    <p className="money-plus">{income}</p>
            </div>
            <div className="expanse-part">
                <h4>Expanse</h4>
    <p className="money-minus">{expanse}</p>
            </div>
        
        </div>


    );
}
export default IncomeExpances;