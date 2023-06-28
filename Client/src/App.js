import './App.css';
import {Route,BrowserRouter,Routes, Navigate} from 'react-router-dom'
import Product from './Pages/Product';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import { useContext } from 'react';
import { AuthContext } from './Context/UserContext';



function App() {

  const {currentUser}=useContext(AuthContext)
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:category' element={<ProductList/>}/>
        <Route path='/allproducts' element={<ProductList/>}/>
        <Route path='/product/:id' element={<Product/>}/>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={ currentUser ? <Navigate to={'/'}/> : <Login/>}/>
        <Route path='/register' element={currentUser ? <Navigate to={'/'}/> : <Register/>}/>


      </Routes>
   </BrowserRouter>
  );
}

export default App;
