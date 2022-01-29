import styled from "styled-components";
import Button from "../Button";

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

const AboutSecondary = () => {
  return (
    <div>
      <AboutTitlte>Guides by Thousand Sunny </AboutTitlte>
      <Text>
        Packed with tips and advice from our on-the-ground experts, our city
        guides app (iOS and Android) is the ultimate resource before and during
        a trip.
      </Text>
      <Button text="Download" styleType="bright" />
    </div>
  );
};
export default AboutSecondary;
