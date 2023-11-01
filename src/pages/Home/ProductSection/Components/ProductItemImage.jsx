import React from "react";

function ProductItemImage({imageUrl}) {
  return (
    <div className="bg-gray w-full h-48 flex items-center justify-center">
      <img src={imageUrl} className="h-36" alt="" />
    </div>
  );
}

export default ProductItemImage;
