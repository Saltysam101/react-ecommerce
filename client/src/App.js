import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Shop from './pages/shop';
import ProductPage from './pages/productPage'
import Cart from './pages/cart';
import Nav from './components/nav';


function App() {
    return ( 
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/product/:id' element={<ProductPage />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
    
    );
}

export default App;