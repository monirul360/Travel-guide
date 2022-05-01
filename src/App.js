import './App.css';
import Header from './Page/Share/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import Blog from './Page/Blog/Blog';
import About from './Page/About/About';
import Login from './Page/Login/Login';
import Checkout from './Page/Checkout/Checkout';
import Error from './Page/Error/Error';
import Signup from './Page/Signup/Signup';
import Footer from './Page/Share/Footer/footer';
import Private from './Page/Private/Private';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout'
          element={
            <Private>
              <Checkout></Checkout>
            </Private>
          }
        ></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
