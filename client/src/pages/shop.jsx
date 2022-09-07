import '../styles/home.css';
import Product from '../components/product';
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productActions';

const Home = () => {


    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return ( 
        <div className='shop-page'>
            <h2 className='shop-title'>Products</h2>
            <div className='products'>
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => (
                    <Product
                    key={product._id}
                    productId={product._id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    imageUrl={product.imageUrl}/>
                ))}
            </div>
        </div>
    )
}

export default Home