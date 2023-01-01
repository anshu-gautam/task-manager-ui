import React, { Fragment } from 'react';
import ProductCard from '../shared/ProductCard';

const products = [
  {
    imgUrl: 'https://picsum.photos/200/200',
    title: 'boAt Wave Call Smart Watch',
    description:
      'Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69” HD',
  },
  {
    imgUrl: 'https://picsum.photos/200/200',
    title: 'boAt Wave Call Smart Watch',
    description:
      'Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69” HD',
  },
  {
    imgUrl: 'https://picsum.photos/200/200',
    title: 'boAt Wave Call Smart Watch',
    description:
      'Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69” HD',
  },
  {
    imgUrl: 'https://picsum.photos/200/200',
    title: 'boAt Wave Call Smart Watch',
    description:
      'Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69” HD',
  },
  {
    imgUrl: 'https://picsum.photos/200/200',
    title: 'boAt Wave Call Smart Watch',
    description:
      'Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69” HD',
  },
  {
    imgUrl: 'https://picsum.photos/200/200',
    title: 'boAt Wave Call Smart Watch',
    description:
      'Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69” HD',
  },
];


function Products() {
  return (
    <Fragment>
      <h2 className='px-10 my-3 text-3xl font-bold'>your tasks</h2>
      <div className='grid grid-cols-4 gap-5 px-10 cursor-auto'>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imgUrl={product.imgUrl}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default Products;
