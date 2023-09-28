import React from 'react';
import PropTypes from 'prop-types';

function ProductItemTitle({ name }) {
  return (
    <div className="p-4 flex items-center justify-center">
      <a className="font-semibold text-base tracking-wide text-primary cursor-pointer lg:text-lg">{name}</a>
    </div>
  );
}

ProductItemTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductItemTitle;
