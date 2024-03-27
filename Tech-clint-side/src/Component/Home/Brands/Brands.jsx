import { useEffect } from "react";
import { useState } from "react";
import Brand from "./Brand";

const Brands = () => {
    const [brandsData, setBrandData] = useState([])
    //const [displayData, setDisplayData] = useState([])
    const bNames = {}
    const display = []
    const arr = []
    useEffect(()=>{
        fetch('https://assignment-10-server-side-r8a1in9pj-habibur-rahmans-projects.vercel.app/brandProd')
        .then(res => res.json())
        .then(data => setBrandData(data))
    },[])

    //console.log(brandsData)
    brandsData.forEach(brands =>{
        //console.log(brands.brand_name)
            const name = brands.brand_name
            if(!bNames[name]){
                bNames[name] = true;
                arr.push(name);
                display.push(brands)
            }
            //console.log(arr)
            //console.log(display)
    })
   

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-4">
            {
                display.map(brand => <Brand
                key={brand._id} brand={brand}
                ></Brand>)
            }
        </div>
    );
};

export default Brands;