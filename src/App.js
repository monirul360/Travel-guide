import logo from './logo.svg';
import './App.css';
import Header from './Page/Share/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
