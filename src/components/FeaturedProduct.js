import React from 'react';
import productimage1 from '../images/product1.png'
import productimage2 from '../images/product2.png'
import productimage3 from '../images/product3.png'
import productimage4 from '../images/product4.png'

const products = [
  {
    id: '795.000',
    name: 'Product',
    category: '',
    rating: 5,
    image: productimage1,
  },
  {
    id: '595.000',
    name: 'Product',
    category: '',
    rating: 5,
    image: productimage2,
  },
  {
    id: '595.000',
    name: 'Product',
    category: '',
    rating: 5,
    image: productimage3,
  },
  {
    id: '1.500.000',
    name: 'Product',
    category: '',
    rating: 5,
    image: productimage4,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto py-12 p-6">
      <h2 className="text-2xl md:text-4xl mb-10 text-center text-[#564E4E] font-medium mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
        {products.map(product => (
          <div key={product.id} className="flex flex-col gap-y-4 bg-white rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="md:w-full md:h-72 object-cover" />
            <div className="p-4 text-left">
              <h3 className="sm:text-lg text-sm mb-2 leading-9">{product.name}</h3>
              <p className="text-[#C4C4C4] sm:text-sm text-xs mb-2 leading-6">Category {product.category}</p>
              <div className="flex justify-start mb-2">
                {[...Array(product.rating)].map((_, index) => (
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L10.7193 4.60228L16 5.72949L12.4 9.70106L12.9443 15L8 12.8523L3.05573 15L3.6 9.70106L0 5.72949L5.28065 4.60228L8 0Z" fill="#FFCB45"/>
                  </svg>
                ))}
              </div>
              <p className="text-[#564E4E] sm:text-sm text-xs">IDR: {product.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
