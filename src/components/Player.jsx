import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = ''
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

// Problem
// export default function Player() {
//   const [enteredPlayerName, setEnteredPlayerName] = useState('')
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (event) => {
//     setSubmitted(false)
//     setEnteredPlayerName(event.target.value)
//   }

//   const handleClick = () => {
//     setSubmitted(true)
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
//       <p>
//         <input type="text" value={enteredPlayerName} onChange={handleChange} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
