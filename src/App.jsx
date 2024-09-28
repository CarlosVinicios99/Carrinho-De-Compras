import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Catalog from './components/Catalog'
import Cart from './components/Cart'
import ThankYouPage from './components/ThankYouPage'

import { ToastContainer, toast } from 'react-toastify'

import "react-toastify/dist/ReactToastify.css"


function App() {

  const [cartItems, setCartItems] = useState([])

  const handleAddCart = (product, quantity) => {

    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id)

      if(itemExists){
        toast.success(`Quantidade do item ${product.name} atualizada!`)
        return prevItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item)
      }
      else{
        toast.success(`${product.name} Adicionado com sucesso!`)
        return [...prevItems, {...product, quantity}]
      }

    })

  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Catálogo</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Catalog onAddToCart={handleAddCart}/>}></Route>
          <Route path="/cart" element={<Cart cartItems={cartItems}/>}></Route>
          <Route path="/thank-you" element={<ThankYouPage/>}></Route>

        </Routes>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </BrowserRouter>
  )
}

export default App
