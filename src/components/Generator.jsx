import { useState, useEffect } from 'react';
import { AdvicePhrase } from './AdvicePhrase';
// import { RepositoryItem } from "./RepositoryItem";

import separator from '../assets/pattern-divider-desktop.svg';
import dice from '../assets/icon-dice.svg';

import '../styles/generator.scss';

const advice = {
  id: String,

}

export function Generator() {
  const [text, setText] = useState([])

  const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    // console.log(data)
    setText(data)
  }

  useEffect(() => {
    fetchAdvice('https://api.adviceslip.com/advice')  
  }, [])

  return (
    
    <section className="container">

      {/* <AdvicePhrase advice={text}/> */}

      <div className="advice">
        <h4>Advice #{[text.slip?.id]}</h4>
      </div>

      <div className="advice-phrase">
        <p>{[text.slip?.advice]}</p>
      </div>

      <div className="separator">
        <img src={separator} alt="separador"/>
      </div>

      <div className="dice">
        <button onClick={fetchAdvice}>
          <img src={dice} alt="dados" className="icon-dice"/>
        </button>
        
      </div>

      {/* <button>adasda</button> */}

      <footer className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Brenovisk</a>.
      </footer>

    </section>
  );
}