import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  onAdd,
}: {
  products: {
    productName: string;
    description: string;
    price: number;
  }[];
  onAdd: (product: any) => void;
}) {
  return (
    <>
      {products.map((product, i) => (
        <ProductCard
          key={i}
          name={product.productName}
          description={product.description}
          price={product.price}
          onAdd={() => onAdd(product)}
        />
      ))}
    </>
  );
}
