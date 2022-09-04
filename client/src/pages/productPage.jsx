import '../styles/productPage.css';

function productPage() {
  return (
    <div className='product-page'>
      <div className="left">
        <div className="left-img">
          <img 
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
          alt="" />
        </div>
        <div className="left-info">
          <p className='name'>Product</p>
          <p className='price'>$349.99</p>
          <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis ducimus modi sit fugit consequatur?</p>
        </div>
      </div>
      <div className="right">
        <div className="right-info">
          <p>
            Price: <span>$349.99</span>
          </p>
          <p>
            Qty 
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type='button'>Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default productPage