import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import './App.scss'
import CurrencyContext from './CurrencyContext';

function App() {

  // App is the closest common ancestor of TopMenuLink and MainContent
  // so it will keep all the values that both those components need
  // for example the title:
  const [title, setTitle] = useState('Home')
  const [currency, setCurrency] = useState('EUR');

  // useEffect(() => {
  //   localStorage.setItem('currency', currency);
  // }, [currency])

  return (
    <CurrencyContext.Provider value={ {
        currency,
        setCurrency
    } }>

      <div className="app">
          <Header setTitle={ setTitle } />

          <MainContent title={ title } />

          <Footer />
      </div>

    </CurrencyContext.Provider>
  )
}

export default App
