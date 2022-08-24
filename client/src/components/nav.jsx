import {Link} from 'react-router-dom';

function nav (){
  return (
    <nav className="navbar">
        <div className="logo">
            <h2>MERN Store</h2>
        </div>
        <div className="nav-links-container">
            <ul>
                <li>
                    <Link to='/'>Store</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default nav;
