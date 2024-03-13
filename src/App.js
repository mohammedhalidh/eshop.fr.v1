import logo from './logo.svg';
import './App.css';
import Register from './User/Register';
import Signin from './User/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <Signin/>
      <Register/> */}
      <BrowserRouter>
      {<Routes>
        <Route path="/Signup" element={<Register/>}></Route>
        <Route path="/Signin" element={<Signin/>}></Route>

      </Routes>}
      </BrowserRouter>
    </div>
  );
}

export default App;
