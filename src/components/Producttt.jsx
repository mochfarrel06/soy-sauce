import React from 'react';

function ProductApp() {
  return (
    <section className="pt-32 pb-32 w-full h-max md:pt-36 lg:pt-40 xl:pt-44 overflow-hidden">
      <div className="lg:container">
        <div className="px-6 py-4 flex flex-col gap-20 lg:py-6">
          <div>
            <h3 className="font-semibold text-xl text-secondary tracking-wide lg:text-2xl">The products we sell</h3>
          </div>
          <div className="flex w-full flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4 xl:gap-10">
            <div className="max-w-full bg-white shadow-md rounded-md overflow-hidden sm:w-[48%] md:w-[48%] lg:w-[32%] xl:w-[31%]">
              <div className="">
                <div className="bg-gray w-full h-48 flex items-center justify-center">
                  <img src="./image/product1.png" className="h-36" alt="" />
                </div>
                <div className="p-4 flex items-center justify-center">
                  <a className="font-semibold text-base tracking-wide text-primary cursor-pointer lg:text-lg">Product title</a>
                </div>
              </div>
            </div>
            <div className="max-w-full bg-white shadow-md rounded-md overflow-hidden sm:w-[48%] md:w-[48%] lg:w-[32%] xl:w-[31%]">
              <div className="">
                <div className="bg-gray w-full h-48 flex items-center justify-center">
                  <img src="./image/product1.png" className="h-36" alt="" />
                </div>
                <div className="p-4 flex items-center justify-center">
                  <a className="font-semibold text-base tracking-wide text-primary cursor-pointer lg:text-lg">Product title</a>
                </div>
              </div>
            </div>
            <div className="max-w-full bg-white shadow-md rounded-md overflow-hidden sm:w-[48%] md:w-[48%] lg:w-[32%] xl:w-[31%]">
              <div className="">
                <div className="bg-gray w-full h-48 flex items-center justify-center">
                  <img src="./image/product1.png" className="h-36" alt="" />
                </div>
                <div className="p-4 flex items-center justify-center">
                  <a className="font-semibold text-base tracking-wide text-primary cursor-pointer lg:text-lg">Product title</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductApp;
