import { useState, useEffect } from 'react';
import axios from 'axios';

const ShoppingCart = () => {
    const [products, setProducts] = useState([]);
    const [cartIds, setCartIds] = useState([]);
    const [showSuccess, setShowSuccess] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setShowSuccess('');
        }, 1500);
    }, [showSuccess])

    const onAddToCart = async (productId) => {
        setShowSuccess(productId);
        setCartIds([...cartIds, productId]);
        try {
            const response = await axios.post('/cart', { productId });
            alert('Received server response!');
            setCartIds(response.data);
        } catch (e) {
            alert('An error occurred!');
            setCartIds(cartIds.filter(x => x !== productId));
        }
    }

    useEffect(() => {
        const loadProducts = async () => {
            const response = await axios.get('/products');
            setProducts(response.data);
        }

        const loadCartIds = async () => {
            const response = await axios.get('/cart');
            setCartIds(response.data);
        }

        loadProducts();
        loadCartIds();
    }, []);

    return (
        <>
        <h3>You have {cartIds.length} items in your cart</h3>
        {products.map(product => (
            <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                {showSuccess === product.id ? <button>Success!</button> : <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>}
            </div>
        ))}
        </>
    )
}

export default ShoppingCart;