import './App.css';
import {FaClipboard} from "react-icons/fa"
import UseForm from './UseForm';
import React from 'react';
import { useState } from 'react';
import GetRandomChar from './GetRandomChar';
import GetSpetialChar from './GetSpetialChar';

function App() {
  const[values, setValues] = UseForm({
    length: 9,
    capital:true,
    small:true,
    number:false,
    symbol:false,
  })
  const [result, setResult]=useState("");
  const fieldsArray = [
    {
    field :values.capital,
    getChar: ()=>GetRandomChar(65, 90),
    },
    {
      field :values.small,
      getChar:()=>GetRandomChar(97, 122),
    },
    {
      field :values.number,
      getChar:()=>GetRandomChar(48, 57),
    },
    {
      field :values.symbol,
      getChar:()=>GetSpetialChar(),
    }
];

  const handleOnSubmit = (e)=>{
    e.preventDefault();
    let generatedPassword = '';
    const checkFields = fieldsArray.filter(({field})=> field); 
    for(let i =0; i<values.lenght;i++){
      const index = Math.floor(Math.random()*checkFields.length);
      const letter = checkFields[index].getChar();
      if(letter){
        generatedPassword += letter;
      }
    }
    if(generatedPassword){
      setResult(generatedPassword);
    }
  }

  return (
    <section>
      <div className="conteiner">
        <form  id="pg-form" onSubmit={handleOnSubmit}>
          <div className="result">
            <input type="text" id="result" placeholder='Min 9 Char' readOnly value={result}/>
            <div className='clipboard'>
              <FaClipboard></FaClipboard>
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="lenght">Lenght</label>
              <input type="number" id="lenght" min={9} name="lenght" value={values.lenght} onChange={setValues} />
            </div>
            <div className="field">
              <label htmlFor="capital">Capital</label>
              <input type="checkbox" id="capital" name="capital" checked={values.capital} onChange={setValues}/>
            </div>
            <div className="field">
              <label htmlFor="small">Small</label>
              <input type="checkbox" id="small" name="small" checked={values.small} onChange={setValues}/>
            </div>
            <div className="field">
              <label htmlFor="number">Number</label>
              <input type="checkbox" id="number" name="number"checked={values.number}onChange={setValues}/>
            </div>
            <div className="field">
              <label htmlFor="symbol">Symbol</label>
              <input type="checkbox" id="symbol" name="symbol" checked={values.symbol} onChange={setValues}/>
            </div>
            <button type='submit'>Generate Password</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default App;
