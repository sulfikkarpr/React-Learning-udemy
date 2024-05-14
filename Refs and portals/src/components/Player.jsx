import { useRef, useState } from "react";

export default function Player() {

  const [enteredName, setEnteredName] = useState('');
  const playerName = useRef();

  const handleChange = () => {

    setEnteredName(playerName.current.value);

  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleChange} >Set Name</button>
      </p>
    </section>
  );
}
