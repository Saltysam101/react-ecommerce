import '../styles/cart.css';
import CartItem from '../components/cartItem';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';


const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
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
          <CartItem key={index} value={value} qtyChangeHandler={qtyChangeHandler}/>
        ))
        }
      </div>
      <div className="cart-right">
        <div className="cart-info">
          <p>Subtotal (0) items</p>
          <p>${}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart