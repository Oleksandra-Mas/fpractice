import React from "react";
import HeaderList from "./HeaderList";
import Button from "./Button";

export default function Header() {
  return (
    <div className="header">
      <Button text="Login" />
      <Button text="Register" styleType="bright" />
    </div>
  );
}
