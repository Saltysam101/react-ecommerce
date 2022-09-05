import '../styles/cartItem.css';
import {Link} from 'react-router-dom';

const cartItem = () => {
  return (
    <div className='cartItem'>
        <div className="cart-item-img">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="" />
        </div>
        <Link to={`/product/${10}`} className="cart-item-name">
            Product
        </Link>
        <p className='cart-item-price'>$349.99</p>
        <select className='cart-item-select'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button className='cart-item-delete-btn'>Remove</button>
    </div>
  )
}

export default cartItem