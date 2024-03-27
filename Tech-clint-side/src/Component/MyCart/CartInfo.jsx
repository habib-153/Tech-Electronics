/* eslint-disable react/prop-types */

const CartInfo = ({ cart }) => {
  const { _id, product_name, brand_name, product_image, price } = cart;
  const handleDelete = () =>{
   
    //console.log(_id)

  }
  return (
      <div className="flex justify-between items-center gap-3 bg-base-100 shadow-lg p-4 rounded-xl">
        <figure className="w-[180px] h-[150px]">
          <img className="w-full h-full rounded-lg" src={product_image} />
        </figure>
        <div className="px-2 py-5">
          <h2 className="font-bold mt-3 text-xl text-[#201f1fe1]">
            {product_name}
          </h2>
          <p className="font-semibold text-[#201f1fa5] text-lg">{brand_name}</p>
          <p className="font-semibold text-[#201f1ffa]">$ {price}</p>
        </div>
        <button onClick={handleDelete} className="btn bg-gradient-to-r from-[#cb1212e2] to-[#f90505] hover:to-[#9a0e0e] text-[#FFF]">
            Delete
        </button>
      </div>
  );
};

export default CartInfo;
