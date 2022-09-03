import '../styles/product.css';
import {Link} from 'react-router-dom';

function product() {
  return (
    <div className="product">
      <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="" />
      <div className='product-info'>
        <p className='product-name'>Product</p>
        <p className='product-description'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur culpa cupiditate modi assumenda quam laboriosam quas dignissimos dicta nobis delectus.
        </p>
        <p className='product-price'>$349.99</p>
        <Link className='product-button' to={`/product/${10}`}>View</Link>
      </div>
    </div>
  )
}

export default product