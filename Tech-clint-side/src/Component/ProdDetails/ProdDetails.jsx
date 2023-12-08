import {  useLoaderData, } from "react-router-dom";

import { saveCard } from "../Utility/LocalStorage";
import toast from "react-hot-toast";

const ProdDetails = () => {
  const products = useLoaderData();
  const { _id, product_name, brand_name, description, product_image,
    price, type } = products;
    
    const handleAddToCart = () => {
        saveCard(_id);
        toast.success("Product added successfully")
    }

  return (
    <div className="card p-4 flex flex-col  justify-between items-center max-w-3xl mx-auto  card-side">
      <div className="flex flex-col md:flex-row items-center">
        <figure className="md:w-[40%] h-[300px] rounded">
          <img className="w-full h-full" src={product_image} alt="Movie" />
        </figure>
        <div className="card-body md:w-[60%] space-y-2 p-6">
          <h2 className="card-title">{product_name}</h2>
          <p className="font-semibold ">{brand_name}</p>
          <div className="flex gap-2 font-semibold text-[14px] text-[#11111190]">
            <p className="">Type: {type}</p>
            <p>{price} $</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-actions w-full lg:w-fit">
        <div className="w-full text-center">
            <button onClick={handleAddToCart} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-blue-700 text-[#FFF]">
              Add To Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProdDetails;
