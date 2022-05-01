import logo from './logo.svg';
import './App.css';
import Header from './Page/Share/Header/Header';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Header></Header>}></Route>
      </Routes>
    </div>
  );
}

export default App;
