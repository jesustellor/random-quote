import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { SocialIcon } from 'react-social-icons';

import './App.css';


export default function App() {
const [state, setState] = useState('');

const randomize = (arr) => {
  let theRandomNumber = Math.floor(Math.random() * 102) + 1;
  return arr[theRandomNumber];
}

const randomColor = () => {
  const colors = ["lightblue", "blueviolet", "lightgreen", "pink", "orange", "fuchsia", "darkcyan"];
  let newArr = colors.sort(() => Math.random() - 0.5);
   return newArr;
}


const getAllNotes = () => {
  axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  .then((response) => {
    let value = randomize(response.data.quotes);
    let color = randomColor();
    setState({
      quote: value.quote,
      author: value.author,
      color: color[0]
    })


  }).catch(error => console.error('there was error', error))
  
}

// const onMount = () => {
//   document.body.style.background = state.color;
// }

useEffect(() => {
  getAllNotes();
}, []);



  return (
    <div id='background'       style={{
      backgroundColor: state.color,
      width: '100vw',
      height: '100vh'
    }}>
      <div id="quote-box">
      <p id="text" className='quote' style={{color: state.color}}>{state.quote}</p>
      <p id="author" className='quote' style={{color: state.color}}>{state.author}</p>
      <section className='buttons'>
      <a href={`https://www.twitter.com/intent/tweet?text=${state.quote}%0A&text=${state.author}`} target="_blank" 
      id="tweet-quote" alt="share on twitter" className='twitter-share-button'
      rel='noopener noreferrer'><SocialIcon network="twitter" /></a>
      <button style={{background: state.color}} id="new-quote" onClick={getAllNotes}>New Quote</button>
      </section>
      </div>
    </div>
  );
};