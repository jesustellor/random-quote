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
      <p id="text">{state.quote}</p>
      <p id="author">{state.author}</p>
      <button id="new-quote" onClick={getAllNotes}>New Quote</button>
      <a href={`https://www.twitter.com/intent/tweet?text=${state.quote}%0A&text=${state.author}`} target="_blank" 
      id="tweet-quote" alt="share on twitter" className='twitter-share-button'
      rel='noopener noreferrer'>Twitter</a>
    </div>
  );
};