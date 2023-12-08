import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../Utility/LocalStorage";
import CartInfo from "./CartInfo";

const MyCart = () => {
  const products = useLoaderData();

  const [carts, setCarts] = useState([])
  
  useEffect(() => {
    const storedProductIds = getStoredCart();
    if (products.length > 0) {
     const added = [];
      for (const id of storedProductIds) {
        const product = products?.find((product) => product._id == id);
        if (product) {
          added.push(product);
        }
        
      }
      console.log(added);
      setCarts(added);

    }
  }, [products]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
      {
        carts.map(cart => <CartInfo
        key={cart._id} cart={cart}
        ></CartInfo>)
      }
    </div>
  );
};

export default MyCart;
