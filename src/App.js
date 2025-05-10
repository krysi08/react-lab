import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [email, setEmail] = useState('abc@gmail.com');
    const [authenticalUsername, setAuthenticalUsername] = useState(null);

    let message;
//     if (email.length < 10) {
//         message = "Ale masz krotki adres!";
//     } else if (email.length < 15) {
//         message = "Adres jest okej!";
//     } else{
//         message = "Za dlugi adres!";
// }

    function handleButtonclick(){
        alert("Witaj: " + email + "!" + " " + "Wyloguj");

    }

    function handleChange(event){
      setEmail(event.target.value);
    }

  return (
    <div>
      <h1> Witaj w systemie do zapisow na zajecia!</h1>
        {!authenticalUsername && (
        <div>
    Zaloguj sie mailem:
      <input type="text" onChange={handleChange} />
        <button type = "button" onClick={() => setAuthenticalUsername(email)}> Wchodze</button>
    </div>
        )}
        {authenticalUsername && <div>
        <div>
            <h4>Jestem zalogowany jako: {authenticalUsername}</h4>
            <a onClick={() => setAuthenticalUsername(null)}> Wyloguj</a>
        </div>
        </div>}
    </div>
  );
}
export default App;
