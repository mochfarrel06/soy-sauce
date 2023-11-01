import React from "react";

function ProductItemTitle({name}) {
  return (
    <div className="p-4 flex items-center justify-center">
      <a className="font-semibold text-base tracking-wide text-primary cursor-pointer lg:text-lg">
        {name}
      </a>
    </div>
  );
}

export default ProductItemTitle;
