
import './App.css';
import Creditcard from './components/Creditcard';
import { useState } from 'react';

function App() {
  const [creditcard, setcreditcard] = useState("");
  return (
    <div className="App">
      <Creditcard length={4} creditcardhandler={(value) => setcreditcard(value)}/>
    </div>
  );
}

export default App;
