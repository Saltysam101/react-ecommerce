import '../styles/productPage.css';
import {useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getProductDetails } from '../redux/actions/productActions';
import {addToCart} from '../redux/actions/cartActions';

const ProductPage =() => {

  let {id} = useParams();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if(product && id !== product._id) {
      dispatch(getProductDetails(id))
    }
  }, [dispatch, product, id])

  const addToCartHandler = () => {
    
    dispatch(addToCart(product._id, qty));
    navigate("/cart");
  }
  


  return (
    <div className='product-page'>

      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
        <>
        <div className="left">
        <div className="left-img">
          <img 
          src={product.imageUrl} 
          alt={product.name} />
        </div>
        <div className="left-info">
          <p className='name'>{product.name}</p>
          <p className='price'>${product.price}</p>
          <p className='description'>{product.description}</p>
        </div>
      </div>
      <div className="right">
        <div className="right-info">
          <p>
            Price: <span>${product.price}</span>
          </p>
          <p>
            Qty 
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type='button' onClick={addToCartHandler}>Add To Cart</button>
          </p>
        </div>
      </div>
        </>
      )}
    </div>
  )
}

export default ProductPage