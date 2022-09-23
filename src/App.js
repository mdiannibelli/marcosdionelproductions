import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase/firebase';
import { products } from './mocks/mockData';

function App() {

// importar los productos a firebase dinamicamente
/* useEffect(() => {
  const productsCollection = collection(db, "products")
  products.map((item) => addDoc(productsCollection, item))
},[]) */


  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
