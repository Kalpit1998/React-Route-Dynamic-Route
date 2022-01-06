import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function api() {
      try {
        let data = await fetch("http://localhost:2500/products");
        // let data = await fetch("https://fakestoreapi.com/products")
        data = await data.json();
        setProducts(data);
      } catch (e) {
        console.warn(e);
      }
    }
    api();
  }, []);
  // console.log(products)
  return (
    
    <div style={{ backgroundColor: "darkgray", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center", rowGap: "40px",
    columnGap: "1%"}}>
      
        {products.map((item, i) => {
          return (
          <Link to={`/detail/${item.id}`} key={i} style={{width: "15%", height: "50vh"}}>    
            <div className="item_box" >
              <img src={item.image} alt={item.title} style={{width: "100%", height: "35vh"}}/>
              <h3>{item.title}</h3>
            </div>
           </Link> 
          );
        })}
      
    </div>
  );
};
