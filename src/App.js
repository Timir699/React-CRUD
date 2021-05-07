import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Form from './Components/Form'
import AddData from './Components/AddData'
function App() {
  const [show, setShow] = useState(false)
  const [chng, setChng] = useState(false)

  return (
    <div className="App">
      <button onClick = { () => setShow(!show) }>Click here for Form</button>
      { show && <Form />}
      <br />
      <button onClick = { () => setChng(!chng) }>Click Here fo Add</button>
      { chng && <AddData /> }
    </div>
  );
}

export default App;
