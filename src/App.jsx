import { useEffect } from 'react';
import './App.css'
import {Route, Routes} from 'react-router-dom';
import { ProductList } from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import {Header} from "./components/Header/Header";
import { useTelegram } from './hooks/useTelegram';

function App() {
  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
      tg.ready();
  }, [])

  return (
    <div className='App'>
      <Header />
      <Form/>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  )
}

export default App
