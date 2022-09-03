import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Shop from './components/shop';
import Product from './components/product'
import Cart from './components/cart';
import Nav from './components/nav';


function App() {
    return ( 
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/product/:id' element={<Product />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
    
    );
}

export default App;