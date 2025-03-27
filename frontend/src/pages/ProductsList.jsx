
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

function ProductsListPage() {
  
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  const products = useSelector((state) => state.products.products.products) ?? [];

  return (
    <section className="mx-5 mb-36 mt-20 flex h-full flex-col md:mx-[135px]">
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product) => (
          <ProductCard 
          key={product?._id}
          id={product?._id}
          mainImage={product?.mainImage}
          title={product?.title}
          price={product?.price}
          reviews={product?.reviews}
           />
        ))}
      </div>
    </section>
  );
}
export default ProductsListPage;
