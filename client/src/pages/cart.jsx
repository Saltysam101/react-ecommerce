import '../styles/cart.css';
import CartItem from '../components/cartItem';
function cart() {
  return (
    <div className='cart-page'>
      <div className="cart-left">
        <h2>Shopping Cart</h2>
        <CartItem />
      </div>
      <div className="cart-right">
        <div className="cart-info">
          <p>Subtotal (0) items</p>
          <p>$349.99</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default cart