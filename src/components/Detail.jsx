import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const Detail = () => {

  const {id} = useParams();
//   console.log(id)

  const [detail, setDetail] = useState({});
  

  useEffect(() => {
      async function temp () {
        //   let data = await fetch(`https://fakestoreapi.com/products/${id}`);
          let data = await fetch(`http://localhost:2500/products/${id}`);
          data = await data.json();
          // console.log(detail)
          setDetail(data);
          // console.log(data, id);
      }
      temp()
  }, [])

//   console.log(detail);
  return (
    <div style={{padding: "0 1%", backgroundColor: "aquamarine", height: "calc(100vh - 12vh)"}}>
      <h1 style={{margin:"0"}}>Detail of product {id.id}</h1>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <img src={detail.image} alt="h" style={{width: "20%", height: "70vh"}} />
        <div style={{border: "1px solid blue", width: "50%"}}>
          <h2>Title: </h2><span>{detail.title}</span>
          <h2>Description: </h2><span>{detail.description}</span>
          <h2>Price: </h2><span>{detail.price}$</span>
        </div>
      </div>
    </div>
  );
};