import React from 'react';
import Header from './Header'
import Balance from './Balance'
import IncomeExpances from './IncomeExpances'
import Histroy from './Histroy'
import AddTransaction from './AddTransaction'

import './App.css';

function App() {
  return (
  
 
     <div className="container">
      <Balance /> 
      <IncomeExpances />
      <Histroy />
      <AddTransaction />
     </div>
    
   
  )
}

export default App;

