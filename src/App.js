import React from 'react';
import Header from './Header'
import Balance from './Balance'
import IncomeExpances from './IncomeExpances'
import Histroy from './Histroy'
import AddTransaction from './AddTransaction'
import {GlobalProvider} from './GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
   <div className="App">
       <Header />
      <Balance /> 
      <IncomeExpances />
      <Histroy />
      <AddTransaction />
     </div>
     </GlobalProvider>

    
   
  )
}

export default App;

