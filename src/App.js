import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Category from './component/Category';
import Product from './component/Product';
import AllProducts from './component/AllProducts';
import Register from './component/Register';
import Log from './component/Log';
import Out from './component/Out';







function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/category' element={<Category/>}></Route>
        <Route exact path='/product/:catname' element={<Product/>}></Route>
        <Route exact path='/all' element={<AllProducts/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/login' element={<Log/>}></Route>
        <Route exact path='/logout' element={<Out/>}></Route>

         
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
