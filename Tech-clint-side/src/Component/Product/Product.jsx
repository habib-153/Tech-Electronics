import img1 from "./premium.avif";
import img2 from "./Sony-Ps5.jpeg";
import img3 from "./photo-1.avif";
import img4 from "./img1.jpg";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ProdCard from "./prodCard/ProdCard";

const Product = () => {
  const product = useLoaderData();
  const { product_name, brand_name } = product;
  const bname = brand_name;
  console.log(product_name, brand_name);
  const [allProds, setAllProds] = useState([]);
  const arr = [];
  const display = [];
  useEffect(() => {
    fetch("https://assignment-10-server-side-r8a1in9pj-habibur-rahmans-projects.vercel.app/brandProd")
      .then((res) => res.json())
      .then((data) => setAllProds(data));
  }, []);
  allProds.forEach((allProd) => {
    //console.log(allProd.brand_name)

    //console.log(allProd)
    const name = allProd.brand_name;
    if (bname == name) {
      arr.push(name);
      display.push(allProd);
    }
    //console.log(arr);
    //console.log(display);
  });
  return (
    <div>
      <div className="carousel mt-6 max-h-[500px] w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <h2 className="mt-8 mb-6 text-center font-bold text-3xl">Products of {bname}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          display.map(prod => <ProdCard
          key={prod._id} prod={prod}
          ></ProdCard>)
        }
      </div>
    </div>
  );
};

export default Product;
