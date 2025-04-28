import React from 'react';
import Product from './Product.jsx';

const ProductList = () => {
    const products = [
        {
            name: 'Chair 1',
            price: 2999,
            imageUrl: 'https://i.pinimg.com/736x/f2/d2/e8/f2d2e894ac65780d350def9b5c3ceaa9.jpg'
        },
        {
            name: 'Chair 2',
            price: 4999,
            imageUrl: 'https://i.pinimg.com/736x/02/d5/c6/02d5c6b007ead09d0dd6061dfa76f980.jpg'
        },
        {
            name: 'Chair 3',
            price: 3999,
            imageUrl: 'https://i.pinimg.com/736x/06/94/3b/06943bed65c9873abff949cce91751b5.jpg'
        }
    ];

    return (
        <div>
            {products.map((product, index) => (
                <Product
                    key={index}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                />
            ))}
        </div>
    );
};

export default ProductList;