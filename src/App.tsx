import React, {useState} from 'react';

import './App.css';

function App() {
  //  представим что эти данные приходят с сервера
  let [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'},
    {message: 'message4'},
    {message: 'message5'}
  ])

  return (
      <div className={'App'}>
        <div>
          <input/>
          <button> + </button>
        </div>
        {message.map((element,index) => {
          return(
              <div key={index}>{element.message}</div>
          )
        })}
      </div>
  );
}

export default App;
