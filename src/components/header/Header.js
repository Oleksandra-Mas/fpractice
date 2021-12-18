import React from "react";
import HeaderList from "./HeaderList";
import Button from "./Button";
import Nav from "./Nav";

const navList = ["Home", "Destinations", "About", "Partner"];

export default function Header() {
  return (
    <div className="header">
      <Nav items={navList} />
      <Button text="Login" />
      <Button text="Register" styleType="bright" />
    </div>
  );
}
