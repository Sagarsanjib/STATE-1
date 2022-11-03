import './App.css';
import Details from './Components/Detail';
import { useState } from 'react';
import {useRef} from 'react';


function App() {
  const[initialstate, setInitialState] = useState(true);
  const ref = useRef();

  const backgroundChange = _ =>{
    if(initialstate === true){
      setInitialState(false);
    }else{
      setInitialState(true);
    }
    
  }

  return (
    <div className={initialstate === true ? "App" : "App change" } ref={ref}>
      <div className='active' >
        <h1>Overreacted</h1>
        <button onClick={backgroundChange}  className={initialstate === true ? " " : "buttonchange"} >Toogle</button>

      </div>

      <Details />

    </div>
  );
}

export default App;