import '../styles/home.css';
import Product from './product';

function home() {
    return ( 
        <div className='shop-page'>
            <h2 className='shop-title'>Products</h2>
            <div className='products'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default home