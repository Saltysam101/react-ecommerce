import '../styles/cartItem.css';
import {Link} from 'react-router-dom';


const CartItem = ({value, qtyChangeHandler}) => {

  return (
    <div className='cartItem'>
        <div className="cart-item-img">
            <img src={value.imageUrl} alt={value.name} />
        </div>
        <Link to={`/product/${value.product}`} className="cart-item-name">
            {value.name}
        </Link>
        <p className='cart-item-price'>${value.price}</p>
        <select 
        className='cart-item-select'
        value={value.qty}
        onChange={(e) => qtyChangeHandler(value.product, e.target.value)}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button className='cart-item-delete-btn'>Remove</button>
    </div>
  )
}

export default CartItem