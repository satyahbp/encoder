import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

// custom imports
import { 

  TITLE, 

  MD5_BUTTON, 
  SHA256_BUTTON, 
  BASE64_ENCODE_BUTTON, 
  BASE64_DECODE_BUTTON,

  MD5_LINK,
  SHA256_LINK,
  BASE64_ENCODE_LINK,
  BASE64_DECODE_LINK

} from './Constants/Constants'

function App() {

  return (
    <div className="App">
      <Router>
        <Header title={TITLE} />

        {/* body */}
        <Routes>
          <Route path='/' element={
            <Body
            hash_button={MD5_BUTTON}
            />
          } />

          <Route path={MD5_LINK} element={
            <Body hash_button={MD5_BUTTON}/>
          } />

          <Route path={SHA256_LINK} element={
            <Body hash_button={SHA256_BUTTON}/>
          } />

          <Route path={BASE64_ENCODE_LINK} element={
            <Body
            hash_button={BASE64_ENCODE_BUTTON}
            />
          } />

          <Route path={BASE64_DECODE_LINK} element={
            <Body
            hash_button={BASE64_DECODE_BUTTON}
            />
          } />
        </Routes>
        
      </Router>


    </div>
  );
}

export default App;
