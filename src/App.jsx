import { useEffect } from 'react';
import './App.css'
import {Route, Routes} from 'react-router-dom';
import { ProductList } from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import Header from "./components/Header/Header";
import { useTelegram } from './hooks/useTelegram';

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
      tg.ready();
  }, [])

  return (
    <div className='App'>
      {/* <Header /> */}
      <Form/>
      {/* <Routes>
        <Route index element={<ProductList />} />
        <Route path={'#/form'} element={<Form />} />
      </Routes> */}
    </div>
  )
}

export default App
