import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Banner } from './components/banner';
import { Header } from './components/header';
import { BrowserRouter, Router } from 'react-router-dom';
import { RouteElements } from './components/routing/route-elements';
import LoginForm from './components/login/login-form';
import { Footer } from './components/footer';
import { createContext, useState } from 'react';
import { Test } from './components/test';

export const categoryContext = createContext();
export const loginUserContext = createContext();
export const loginUserFlagContext = createContext();
export const cartContext = createContext();
export const searchContext=createContext();
export const favContext=createContext();

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loggedinUser, setLoggedinUser] = useState();
  const [loggedinUserFlag, setLoggedinUserFlag] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [searchvalue,setSearchValue]=useState('')

  return (
    <div className=''>
    {/* <Test/> */}
    <loginUserFlagContext.Provider value={{loggedinUserFlag,setLoggedinUserFlag }}>
    <loginUserContext.Provider value={{loggedinUser,setLoggedinUser }}>
    <favContext.Provider value={{favItems,setFavItems}}>
      <searchContext.Provider value={{searchvalue,setSearchValue}}>
    <cartContext.Provider value={{cartItems,setCartItems}}>
      <categoryContext.Provider value={{selectedCategory,setSelectedCategory}}>
        <BrowserRouter>
        <>
          <Header></Header>
          <RouteElements></RouteElements>
        <Footer></Footer>
        </>
        </BrowserRouter>
        {/* <Banner></Banner> */}
      </categoryContext.Provider>
      </cartContext.Provider>
      </searchContext.Provider>
      </favContext.Provider>
      </loginUserContext.Provider>
      </loginUserFlagContext.Provider>
    </div>
  );
}

export default App;
