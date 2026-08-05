import './App.css'
import SmoothScroll from './components/animations/SmoothScroll';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Us from './components/pages/Us';
import Contact from './components/pages/Contact';
import ServiceDetailContainer from './components/pages/ServiceDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/animations/ScrollToTop'
import AnswerPage from './components/pages/AnswerPage';
import Services from './components/pages/Services';
function App() {

  return (
    <BrowserRouter basename="/repo-estudioIntegralContableSM/">
      <ScrollToTop/>
      <SmoothScroll>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios/' element={<Services />} />
          <Route path='/nosotros' element={<Us />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/servicio/:id' element={<ServiceDetailContainer />} />
          <Route path='/respuesta/:id' element={<AnswerPage />} />
          <Route path='*' element={<AnswerPage namePage='404' />} />
        </Routes>
      </Layout>
      </SmoothScroll>
    </BrowserRouter>
  )
}

export default App
