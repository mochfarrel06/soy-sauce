import React from "react";
import ProductItemImage from "./ProductItemImage";
import ProductItemTitle from "./ProductItemTitle";

function ProductItem({name, imageUrl, id}) {
  return (
    <div
      className="max-w-full bg-white shadow-md rounded-md overflow-hidden sm:w-[48%] md:w-[48%] lg:w-[32%] xl:w-[31%]"
      id={id}
    >
      <ProductItemImage imageUrl={imageUrl} />
      <ProductItemTitle name={name} />
    </div>
  );
}

export default ProductItem;
