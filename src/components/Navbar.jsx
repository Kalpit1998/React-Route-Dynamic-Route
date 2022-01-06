import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      id="Navbar"
      style={{
        padding: "0% 3%",
        height: "12vh",
        backgroundColor: "cadetblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2 style={{fontSize: "1.5rem"}}>Masai Store</h2>
      </div>
      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: "1.5rem",
          fontWeight: "500",
        }}
      >
        <Link to={"/"} style={{textDecoration: "none"}}>Home</Link>
        <Link to={"/products"} style={{textDecoration: "none"}}>Products</Link>
      </div>
    </div>
  );
};
