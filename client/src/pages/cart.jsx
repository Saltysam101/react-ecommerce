import '../styles/cart.css';
import CartItem from '../components/cartItem';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';


const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;

  const qtyChangeHandler =(id, qty) => {
    dispatch(addToCart(id, qty));
  }
  
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  const getCartCount = () => {
    return Object.values(cartItems).reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const getCartSubTotal = () => {
    return Object.values(cartItems).reduce((price, item) => (item.price * item.qty) + price, 0)
  }


  return (
    <div className='cart-page'>
      <div className="cart-left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to={'/'}>Go back</Link>
          </div>
        ): Object.values(cartItems).map((value, index) => (
          <CartItem key={value.product} item={value} qtyChangeHandler={qtyChangeHandler} removeItemFromCart={removeItemFromCart}/>
        ))
        }
      </div>
      <div className="cart-right">
        <div className="cart-info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart