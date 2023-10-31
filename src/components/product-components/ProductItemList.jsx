import React from "react";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";

function ProductItemList({products}) {
  return (
    <div className="flex w-full flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4 xl:gap-10">
      {products.map((product) => (
        <ProductItem key={product.id} id={product.id} {...product} />
      ))}
    </div>
  );
}

ProductItemList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductItemList;
