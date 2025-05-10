import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('abc@gmail.com');

    let message;
    if (email.length < 10) {
        message = "Ale masz krotki adres!";
    } else if (email.length < 15) {
        message = "Adres jest okej!";
    } else{
        message = "Za dlugi adres!";
}

    function handleButtonclick(){
        alert("Twoj adres email to: " + email);
    }

    function handleChange(event){
      setEmail(event.target.value);
    }

  return (
    <div>
      <h1> system do zapisow zajec</h1>
      <h2> twoj email to: {email}</h2>
      <div>{message} </div>
      <input type="text" onChange={handleChange} />
        <button type = "button" onClick={handleButtonclick} > Wyswietl moj email w alercie</button>
    </div>
  );
}
export default App;
