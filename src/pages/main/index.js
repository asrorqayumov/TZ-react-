import "./style.css";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
  }, []);

  return (
    <div className="main_section">
      <div className="main_button_wrapper">
        <Link to={"/admin"} className="btn_primary">
         
          Adminga o'tish
        </Link>
      </div>
      <div className="navigation_container">
        <Link to={"/"} className="navigation_text">
          {"Bosh sahifa > modellari"}
        </Link>
      </div>
      <div className="models_container">
        <h2>Modellari</h2>
        <div className="models_wrapper">
          {/* {categorys?.categorys.map((item) => {
            return <CarCard key={item._id} categoryHandler={categoryHandler} model={item} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Main;
