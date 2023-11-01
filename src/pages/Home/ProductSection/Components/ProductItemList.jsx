import React from "react";
import CardProduct from "../../../../components/Card/CardProduct";

function ProductItemList({products}) {
  return (
    <div className="flex w-full flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4 xl:gap-10">
      {products.map((product) => (
        <CardProduct key={product.id} id={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductItemList;
