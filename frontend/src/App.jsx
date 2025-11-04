import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Products from './Pages/Products'
import WishList from './Pages/WishList'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}  ></Route>
    <Route path='/cart' element={<Cart/>}  ></Route>
    <Route path='/login' element={<Login/>} ></Route>
    <Route path='/products' element={<Products/>} ></Route>
    <Route path='/wishlist' element={<WishList/>} ></Route>
  
    
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
