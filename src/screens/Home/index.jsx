import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>HomePage</div>
      <button className="bg-slate-700 text-white px-2 py-3 rounded-md">
        <Link to={"/student"}>Go to Student Page</Link>
      </button>
    </>
  );
};

export default Home;
