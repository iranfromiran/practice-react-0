import React from 'react';
import './App.css';

function App() {
  const initArr=["thing 1","thing 2"].map(value=>{return <p>{value}</p>});
  const [Thing,setThing]=React.useState(initArr);
  function handleClick(){
    setThing(
      (prevThing)=>{
        return [...prevThing,`Thing ${prevThing.length+1}`].map(value=>{return <p>{value}</p>})}
        )
      
      };

  return (
    <div className="App">
      <div className="btn-div">
        <button onClick={handleClick}>Add Thing</button>
      </div>
      <div className="things">
        {Thing}
      </div>
    </div>
  );
}

export default App;
