import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import './App.scss'
import Context from './Context'
import reducer from './reducer'
// import CurrencyContext from './CurrencyContext';

function App() {

  // App is the closest common ancestor of TopMenuLink and MainContent
  // so it will keep all the values that both those components need
  // for example the title:
  const [title, setTitle] = useState('Home')

  const [context, dispatch] = useReducer(reducer, {
    user: null,
    theme: 'light',
    language: 'en',
    currency: 'USD',
    exchangeRate: null,
    authHash: null,
    shoppingCart: [],
    country: {
      code: 'aa',
      name: 'AAA',
      city: {
        name: 'BBB',
        mayor: {
          name: 'Bob'
        }
      }
    }
  })

  // useEffect(() => {
  //   localStorage.setItem('currency', currency);
  // }, [currency])

  return (
    <Context.Provider value={ {
        context,
        dispatch
    } }>

        <div className="app">
            <Header setTitle={ setTitle } />

            <MainContent title={ title } />

            <Footer />
        </div>

    </Context.Provider>
  )
}

export default App
