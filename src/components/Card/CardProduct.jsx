import React from "react";

function CardProduct({name, imageUrl, id}) {
  return (
    <div
      className="max-w-full bg-white shadow-md rounded-md overflow-hidden sm:w-[48%] md:w-[48%] lg:w-[32%] xl:w-[31%]"
      id={id}
    >
      <div className="bg-gray w-full h-48 flex items-center justify-center">
        <img src={imageUrl} className="h-36" alt="" />
      </div>
      <div className="p-4 flex items-center justify-center">
        <a className="font-semibold text-base tracking-wide text-primary cursor-pointer lg:text-lg">
          {name}
        </a>
      </div>
    </div>
  );
}

export default CardProduct;
