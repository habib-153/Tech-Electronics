import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = e => {
    e.preventDefault()

        const form = e.target;
        const product_name = form.product_name.value;
        const product_image = form.product_image.value;
        const price = form.price.value;
        const brand_name = form.brand_name.value;
        const brand_image = form.brand_image.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const description = form.description.value;

        const newProd = {product_name, product_image, price, brand_name, brand_image, rating, type, description}

        console.log(newProd);

        fetch('https://assignment-10-server-side-r8a1in9pj-habibur-rahmans-projects.vercel.app/brandProd',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProd)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Product added successfully',
                    icon:'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Close'
                })
            }
        })
  };  
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content max-w-3xl">
          <form
            onSubmit={handleAddProduct}
            className="card card-body w-full shadow-2xl bg-base-100"
          >
            <h2 className="text-center text-2xl font-bold">Add New Product</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Product Name</span>
                  </label>
                  <input
                    type="text"
                    name="product_name"
                    placeholder="Enter Product Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Product Image</span>
                  </label>
                  <input
                    type="url"
                    name="product_image"
                    placeholder="Enter Product Image URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter Coffee Price"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="">
              <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Brand Name</span>
                  </label>
                  <input
                    type="text"
                    name="brand_name"
                    placeholder="Enter Product Brand Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Brand Image</span>
                  </label>
                  <input
                    type="url"
                    name="brand_image"
                    placeholder="Enter Brand Image URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Rating</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    placeholder="Enter Product Rating"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 space-y-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Type</span>
                </label>
                <input
                  type="text"
                  name="type"
                  placeholder="Enter Product Type"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Write a short description on the product"
                  className="input input-bordered"
                  required
                />
              </div>
              <button className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-blue-700 text-[#FFF] ">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
