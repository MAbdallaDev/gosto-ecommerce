import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import NavbarCom from './components/NavbarCom';
import Footer from './components/Footer';
import Home from './page/Home';
import Sidbar from './components/Sidbar';
import CartDetails from './page/CartDetails';
import { useSelector } from 'react-redux';
import ImgModel from './components/ImgModel';
import CartPage from './page/CartPage';
import About from './page/About';
import Contact from './page/Contact';
import Shop from './page/Shop';
function App() {
  const imgSrc = useSelector(state => state.imgModel);
  // console.log(imgSrc);
  return (
    <div className="App">
      <Router>
        <NavbarCom />
        <Sidbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Outlet />} >
            <Route path='' element={<CartPage />} />
            <Route path=':productId' element={<CartDetails />} />
          </Route>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/shop' element={<Shop />}/>

        </Routes>
        {
          imgSrc !== '' &&
          <>
            <ImgModel imgSrc={imgSrc} />
            <div className='img-overlay'></div>
          </>
        }
        <Footer />
      </Router>
    </div>
  );
}

export default App;
