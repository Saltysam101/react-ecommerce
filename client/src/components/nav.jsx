import {NavLink} from 'react-router-dom';
import '../styles/nav.css';

function nav (){

    let activeStyle = {
        fontWeight: "bold",
    }

  return (
    <nav className="navbar">
        <div className="logo">
            <h2>MERN Store</h2>
        </div>
        <div className="nav-links-container">
            <ul>
                <li>
                    <NavLink 
                    className="link"
                    style={({isActive}) => isActive ? activeStyle : undefined}    
                    to='/'>Store</NavLink>
                </li>
                <li>
                    <NavLink 
                    className="link"
                    style={({isActive}) => isActive ? activeStyle : undefined}
                     to='/cart'>Cart</NavLink>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default nav;
