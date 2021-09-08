import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {incNumber,decNumber,multNumber,divNumber} from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const multState = useSelector((state) => state.multTheNumber);
  const dispatch = useDispatch();
  return(
    <>
         <div className="container">
           <h1>Increment/Decrement counter</h1>
           <h4>using React and Redux</h4>

           <div className="quantity">
             <a className="quantity__minus" title="Decrement"
                       onClick={() => dispatch(decNumber())}><span>-</span></a>
             <input name="quantity" type="text" className="quantity__input" value={myState} />
             <a className="quantity__plus" title="Increment"
                    onClick={() => dispatch(incNumber(5))}><span>+</span></a>
           </div>
         </div>

         <div className="container my-5">
           <h1>Multiplication/Divide counter</h1>
           <h4>using React and Redux</h4>

           <div className="quantity">
             <a className="quantity__minus" title="Decrement"
                       onClick={() => dispatch(divNumber())}><span>/</span></a>
             <input name="quantity" type="text" className="quantity__input" value={multState} />
             <a className="quantity__plus" title="Increment"
                    onClick={() => dispatch(multNumber(5))}><span>*</span></a>
           </div>
         </div>
    </>
  )
}
export default App;
