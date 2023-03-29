import { useState, useEffect } from "react";

// interface Props {
//   category: string;
// }

export default function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return (
    <>
      <h3>ProductList</h3>
    </>
  );
}
