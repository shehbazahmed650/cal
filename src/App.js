//  import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [valueNum, setValueNum] = (useState(''));

  function assignValue(value) {

    setValueNum((preValue) => preValue + value);

  }
  function assignOperator(oper) {
      setValueNum((preValue) => preValue + oper);
  }
  function equalTo() {
    setValueNum((eval))
  }

  return (
    <div className='container bg-primary'>
      <h1 className='text-center'> Digital Calculator </h1>
      <div className='inputBox'>
        <input type='text' value={valueNum} readOnly placeholder="00" />
      </div>
      <br />
      <div className='btn1 my-0 '>
        <Button className="bg-secondary" value="7" onClick={() => assignValue("7")} />
        <Button className="bg-secondary" value="8" onClick={() => assignValue("8")} />
        <Button className="bg-secondary" value="9" onClick={() => assignValue("9")} />
        <Button className="bg-secondary" value="+" onClick={() => assignOperator("+")} />

      </div>
      <div className='btn2 my-0'>
        <Button className="bg-secondary" value="6" onClick={() => assignValue("6")} />
        <Button className="bg-secondary" value="5" onClick={() => assignValue("5")} />
        <Button className="bg-secondary" value="4" onClick={() => assignValue("4")} />
        <Button className="bg-secondary" value="-" onClick={() => assignOperator('-')} />
      </div>
      <div className='btn3 my-0'>
        <Button className="bg-secondary" value="3" onClick={() => assignValue("3")} />
        <Button className="bg-secondary" value="2" onClick={() => assignValue("2")} />
        <Button className="bg-secondary" value="1" onClick={() => assignValue("1")} />
        <Button className="bg-secondary" value="*" onClick={() => assignOperator('*')} />
      </div>
      <div className='btn4 my-0'>
        <Button className="bg-secondary" value="0" onClick={() => assignValue("0")} />
        <Button className="bg-secondary" value="/" onClick={() => assignOperator('/')} />
        <Button className="bg-secondary equal" value="=" onClick={() => equalTo('=')} />
      </div>
    </div>
  )
}
export default App;
