import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import Player from './components/Player';

const TRACK_URL = './track.wav'

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const interValRef = useRef<number | null>(null);
  const [timer, setTimer] = useState(0);

  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  //const h1Ref = useRef<HTMLHeadingElement>(null);
  // <div> reference type
  // const divRef = React.useRef<HTMLDivElement>(null);

  // <button> reference type
  // const buttonRef = React.useRef<HTMLButtonElement>(null);

  // <br /> reference type
  // const brRef = React.useRef<HTMLBRElement>(null);

  // <a> reference type
  // const linkRef = React.useRef<HTMLLinkElement>(null);

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  }

  useEffect(() => {
    inputRef?.current?.focus();
  }, [])

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000);

    return () => stopTimer();
  }, [])


  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      HookTimer = {timer}

      <button onClick={() => stopTimer()}>Stop Timer</button>
      <Player src={TRACK_URL} ref={audioPlayer} />
      <Controls audioPlayer={audioPlayer} />
    </div>
  );
}

export default App;
