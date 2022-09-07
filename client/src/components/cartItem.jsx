import '../styles/cartItem.css';
import {Link} from 'react-router-dom';


const CartItem = ({item, qtyChangeHandler, removeItemFromCart}) => {



  


  return (
    <div className='cartItem'>
        <div className="cart-item-img">
            <img src={item.imageUrl} alt={item.name} />
        </div>
        <Link to={`/product/${item.product}`} className="cart-item-name">
            {item.name}
        </Link>
        <p className='cart-item-price'>${item.price}</p>
        <select 
        className='cart-item-select'
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button 
        className='cart-item-delete-btn'
        onClick={() => removeItemFromCart(item.product)}
        >Remove</button>
    </div>
  )
}

export default CartItem