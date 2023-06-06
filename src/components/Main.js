import React from "react";
import googleLogo from "../images/google-logo-1.png";
import "../styles/Main.css";
import Button from "./Button";
import Input from "./Input";

function Main() {
  return (
    <div className="main">
      <img className="logo" src={googleLogo} alt="Google Logo" />
      <Input input1="Pesquise aqui" input2={1997} input3 />
      <div className="main-btn">
        <Button texto1="pesquisa Google" texto2={25} texto3 />
        <Button texto1="Estou com sorte" texto2={30} texto3={false} />
      </div>
      <div className="espaco">
      </div>
    </div>
  );
}

export default Main;
