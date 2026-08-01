import './App.css'
import SmoothScroll from './components/animations/SmoothScroll';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Us from './components/pages/Us';
import Contact from './components/pages/Contact';
import ServiceDetailContainer from './components/pages/ServiceDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/pages/CartContainer';
import ScrollToTop from './components/animations/ScrollToTop'
import AnswerPage from './components/pages/AnswerPage';
import Checkout from './components/pages/Checkout';
import ContainerService from './components/sections/services/ContainerServices';
function App() {

  return (
    <BrowserRouter basename="/repo-estudioIntegralContableSM/">
      <ScrollToTop/>
      <SmoothScroll>
      <CartProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios/:categoria?' element={<ContainerService />} />
          <Route path='/nosotros' element={<Us />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/servicio/:id' element={<ServiceDetailContainer />} />
          <Route path='/carrito' element={<CartContainer />} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/respuesta/:id' element={<AnswerPage />} />
          <Route path='*' element={<AnswerPage namePage='404' />} />
        </Routes>
      </Layout>
       </CartProvider>
      </SmoothScroll>
    </BrowserRouter>
  )
}

export default App
