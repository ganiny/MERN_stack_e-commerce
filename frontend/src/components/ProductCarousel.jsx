/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

function ProductCarousel({ products = [], title = "Featured" }) {
  const items = Array.isArray(products) ? products : [];
  return (
    <div className="mb-[140px] flex flex-col">
      <div className="-mt-6 mb-[60px] flex flex-col items-center gap-10 md:flex-row md:justify-between lg:mb-10">
        <p className="font-inter text-4xl font-semibold text-black">{title}</p>
      </div>
      <div
        data-hs-carousel='{"slidesQty": {"xs": 1, "sm": 2, "md": 3, "lg": 4}}'
        className="relative"
      >
        <div className="hs-carousel w-full overflow-hidden bg-white">
          <div className="relative min-h-[320px]">
            <div className="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap gap-4 transition-transform duration-700">
              {items.map((product) => (
                <div key={product._id} className="hs-carousel-slide !w-[270px]">
                  <ProductCard
                    id={product._id}
                    mainImage={product.mainImage}
                    title={product.title}
                    price={product.price}
                    reviews={product.reviews || []}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hs-carousel-pagination absolute -bottom-8 end-0 start-0 flex justify-center space-x-2" />
      </div>
    </div>
  );
}

export default ProductCarousel;
