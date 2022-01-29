import styled from "styled-components";
import Button from "../Button";
import { NavLink, Outlet } from "react-router-dom";
import { routes } from "../../routes";

const AboutTitlte = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 1.38;
  color: #000000;
`;
const Text = styled.p`
  font-weight: 300;
  font-size: 17px;
  line-height: 1.76;
  color: #7d7987;
`;

export const About = () => {
  return (
    <div>
      <AboutTitlte>A new way to explore the world </AboutTitlte>
      <Text>
        For decades travellers have reached for Lonely Planet books when looking
        to plan and execute their perfect trip, but now, they can also let
        Lonely Planet Experiences lead the way
      </Text>
      <Button text="Learn more" type="link" styleType="bright" path="guide" />
      <Outlet />
    </div>
  );
};
