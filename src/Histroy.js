import React , {useContext} from 'react'
import {GlobalContext, GlobalProvider} from './Context/GlobalState'


 function Histroy() {
     const context=useContext(GlobalProvider);
     console.log(context);
    return (
        <div>
            <h3>
                Histroy
            </h3>
            <ul className="list">
                <li className="minus">
                    Cash<span>-$0.00</span><button className="delete-btn">X</button>
                </li>
            </ul>
            
        </div>
    );
}
export default Histroy;
