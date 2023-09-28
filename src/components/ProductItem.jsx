import React from 'react';
import ProductItemImage from './ProductItemImage';
import ProductItemTitle from './ProductItemTitle';
import PropTypes from 'prop-types';

function ProductItem({ name, imageUrl, id }) {
  return (
    <div className="max-w-full bg-white shadow-md rounded-md overflow-hidden sm:w-[48%] md:w-[48%] lg:w-[32%] xl:w-[31%]" id={id}>
      <div className="">
        <ProductItemImage imageUrl={imageUrl} />
        <ProductItemTitle name={name} />
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductItem;
