import React from 'react';
import PropTypes from 'prop-types';

function ProductItemImage({ imageUrl }) {
  return (
    <div className="bg-gray w-full h-48 flex items-center justify-center">
      <img src={imageUrl} className="h-36" alt="" />
    </div>
  );
}

ProductItemImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ProductItemImage;
