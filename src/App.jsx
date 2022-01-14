import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Basket from './pages/Basket'
import SingleProduct from './pages/SingleProduct'
import Electronics from './pages/categories/Electronics'
import Jewelery from './pages/categories/Jewelery'
import MenClothing from './pages/categories/MenClothing'
import WomenClothing from './pages/categories/WomenClothing'
import './styles/index.css'


function App() {

  return (
    <div className="App">

      <Header />

      <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<SingleProduct />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:id' element={<Electronics />} />
        <Route path='/categories/:id' element={<Jewelery />} />
        <Route path='/categories/:id' element={<MenClothing />} />
        <Route path='/categories/:id' element={<WomenClothing />} />
        <Route path='/basket' element={<Basket />} />

      </Routes>

    </div>
  )
}

export default App