import { useEffect } from 'react';
import './App.css'
import {Route, Routes} from 'react-router-dom';
import { ProductList } from './components/ProductList/ProductList';
import { Form } from './components/Form/Form';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(()=>{
    tg.ready();
  },[]);

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
