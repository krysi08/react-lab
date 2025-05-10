import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('abc@gmail.com');

    function handleChange(event){
      setEmail(event.target.value);
    }
  return (
    <div className="App">
      <h1> system do zapisow zajec</h1>
      <h2> twoj email to: {email}</h2>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
export default App;
