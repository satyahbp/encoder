import { useEffect, useState } from 'react';

import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

// custom imports
import { TITLE, MD5_BUTTON} from './Constants/Constants'

function App() {

  const [hash_button, change_hash_button] = useState(MD5_BUTTON);

  return (
    <div className="App">
      <Header title={TITLE}/>

      {/* body */}
      <Body 
        hash_button={hash_button} 
        change_hash_button_state={change_hash_button}
      />

    </div>
  );
}

export default App;
