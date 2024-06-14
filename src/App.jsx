import { useEffect } from 'react';
import './App.css'
import { ProductList } from './components/ProductList/ProductList';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
      tg.ready();
  }, [])

  return (
    <div className='App'>
      <ProductList/>
    </div>
  )
}

export default App
