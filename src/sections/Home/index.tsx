import React from "react";
import { Headline, Header } from "../components/styles";
import logo from "../../images/logo-unbounce.svg";

export const Home = () => {
  return (
    <div>
      <Header>
        <img src={logo} alt="Unbounce" />
        <p className="centerVertically"> UNBOUNCE PROTOTYPE TEST </p>
      </Header>
      <Headline>This is just a test.</Headline>
    </div>
  );
};
