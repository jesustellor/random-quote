import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';

export default function App() {
const [state, setState] = useState('');

const randomize = (arr) => {
  let theRandomNumber = Math.floor(Math.random() * 102) + 1;
  return arr[theRandomNumber];
}

const getAllNotes = () => {
  axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  .then((response) => {
    console.log(randomize(response.data.quotes));
    let value = randomize(response.data.quotes);
    setState({
      quote: value.quote,
      author: value.author
    })


  }).catch(error => console.error('there was error', error))
  
}
useEffect(() => {
  getAllNotes();
}, []);

  return (
    <div className="quote-box">
      <p>{state.quote} <button onClick={getAllNotes}>Get Data</button>  {state.author}</p>
    </div>
  );
};