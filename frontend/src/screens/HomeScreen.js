import React, { useEffect } from 'react'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
// import data from '../data';

export default function HomeScreen() {
    // const [products, setproducts] = useState([]);
    // const [loading, setloading] = useState(false);
    // const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;


    useEffect(() => {
      dispatch(listProducts({}));
      
    }, [dispatch]);
    return (
      <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
      </div>
        
       
    )
}
