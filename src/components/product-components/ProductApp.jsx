import React from 'react';
import ProductItemList from './ProductItemList';
import { getProducts } from '../../utils/data';

class ProductApp extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi state
    this.state = {
      products: getProducts(),
    };
  }

  render() {
    return (
      <section className="pt-32 pb-32 w-full h-max md:pt-36 lg:pt-40 xl:pt-44 overflow-hidden">
        <div className="lg:container">
          <div className="px-6 py-4 flex flex-col gap-20 lg:py-6">
            <div>
              <h3 className="font-semibold text-xl text-secondary tracking-wide lg:text-2xl">The products we sell</h3>
            </div>
            <div className="flex w-full flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4 xl:gap-10">
              <ProductItemList products={this.state.products} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductApp;
