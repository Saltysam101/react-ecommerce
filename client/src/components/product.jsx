import '../styles/product.css';
import {Link} from 'react-router-dom';

function product({imageUrl, name, price, description, productId}) {
  return (
    <div className="product">
      <img src={imageUrl} 
      alt={name} />
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p className='product-description'>
          {description}...
        </p>
        <p className='product-price'>${price}</p>
        <Link className='product-button' to={`/product/${productId}`}>View</Link>
      </div>
    </div>
  )
}

export default product