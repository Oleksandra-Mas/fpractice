import React from "react";
import "./Header.css";
// import HeaderList from "./HeaderList";
import Button from "../Button";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="header">
      <Nav />
      <Button text="Login" />
      <Button text="Register" styleType="bright" />
    </div>
  );
}
