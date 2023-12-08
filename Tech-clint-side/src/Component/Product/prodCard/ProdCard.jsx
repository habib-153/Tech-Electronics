/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProdCard = ({ prod }) => {
  const { _id, product_name, brand_name, product_image, price, type, rating } =
    prod;

  return (
    <div className="card p-4 flex flex-col lg:flex-row justify-between items-center  card-side bg-base-100 shadow-xl">
      <div className="grid grid-cols-2">
        <figure className="w-full lg:w-[200px]  h-[200px] rounded">
          <img src={product_image} alt="Movie" />
        </figure>
        <div className="card-body space-y-2 p-6">
          <h2 className="card-title">{product_name}</h2>
          <p className="font-semibold ">{brand_name}</p>
          <div className="flex gap-2 font-semibold text-[14px] text-[#11111190]">
            <p className="">Type: {type}</p>
            <p>{price} $</p>
          </div>
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              aria-checked
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
      <div className="card-actions w-full lg:w-fit">
        <div className="flex flex-row lg:flex-col w-full item-center justify-between ">
            <Link to={`/prodDetails/${_id}`}>
            <button className="btn rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-blue-700 text-[#FFF]">
            Details
          </button>
            </Link>
          
          <Link to={`/updateProduct/${_id}`}>
            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-blue-700 text-[#FFF]">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
