import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PopularFruits() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/product/allproducts/1');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="w-full bg-white p-4 rounded-sm border border-gray-200">
            <strong className="text-gray-700 font-medium">Popular Fruits</strong>
            <div className="mt-4 flex flex-col gap-3">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="flex items-start hover:no-underline"
                    >
                        <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
                            <img
                                className="w-full h-full object-cover rounded-sm"
                                src={product.imageUrl}
                                alt={product.name}
                            />
                        </div>
                        <div className="ml-4 flex-1">
                            <p className="text-sm text-gray-800">{product.name}</p>
                            <span
                                className={classNames(
                                    product.product_stock === 0
                                        ? 'text-red-500'
                                        : product.product_stock > 100
                                        ? 'text-green-500'
                                        : 'text-orange-500',
                                    'text-xs font-medium'
                                )}
                            >
                                {product.product_stock === 0 ? 'Out of Stock' : `${product.product_stock} Kg in Stock`}
                            </span>
                        </div>
                        <div className="text-xs text-gray-400 pl-1.5">{`Rs ${product.price}`}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PopularFruits;
