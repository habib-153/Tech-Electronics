import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Brand = ({ brand }) => {
  const { _id,brand_name, brand_image } = brand;
  return (
    <Link to={`/product/${_id}`}>
      <div className="card h-[200px] shadow-xl image-full">
        <figure className="">
          <img className="w-full" src={brand_image} alt="img" />
        </figure>
        <div className="card-body items-center my-auto">
          <h2 className="card-title text-[#31b7f0]">{brand_name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
