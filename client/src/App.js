import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/home';
import Cart from './components/cart';
import Nav from './components/nav';


function App() {
    return ( 
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
    
    );
}

export default App;