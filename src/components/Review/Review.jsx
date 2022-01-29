import styled from "styled-components";
import Slider from "@farbenmeer/react-spring-slider";
import img from "../../images/review.jpg";

const AboutTitlte = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 1.38;
  color: #000000;
`;
const Text = styled.p`
  font-weight: 300;
  font-size: 24px;
  line-height: 1.76;
  color: #000000; ;
`;
const Section = styled.section`
  margin-top: 25px;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const ReviewerName = styled.h3`
  font-weight: bold;
  font-size: 22px;
  line-height: 2.18;
`;

const Prof = styled.p`
  font-size: 18px;
  line-height: 2.6;
  color: rgba(0, 0, 0, 0.85);
`;
const ReviewContainer = styled.div`
  width: 50%;
  :first-child {
    padding-right: 25px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

// const BulletComponent = ({ onClick, isActive }) => (
//   <li
//     style={{
//       width: "25px",
//       height: "25px",
//       backgroundColor: "red",
//       margin: "0 2px",
//       opacity: isActive && "0.5",
//     }}
//     onClick={onClick}
//   />
// );

// const ArrowComponent = ({ onClick, direction }) => {
//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         padding: "1em",
//         backgroundColor: "white",
//       }}
//       onClick={onClick}
//     >
//       {direction}
//     </div>
//   );
// };

const Review = () => {
  // const onSlideChange = (index) => console.log(`changed to slide ${index}`);
  return (
    <Section>
      <AboutTitlte>Testimonials</AboutTitlte>
      <ContentWrapper>
        {/* <Slider
          activeIndex={2}
          
          hasBullets
          BulletComponent={BulletComponent}
          ArrowComponent={ArrowComponent}
          onSlideChange={onSlideChange}
        > */}
        <ReviewContainer>
          <Text>
            “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus
            ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet
            turpis nec”
          </Text>
          <ReviewerName>Edward Newgate</ReviewerName>
          <Prof>Founder Circle</Prof>
        </ReviewContainer>
        <ReviewContainer>
          <Image src={img} alt="" />
        </ReviewContainer>
        <ReviewContainer>
          <Text>
            “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus
            ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet
            turpis nec”
          </Text>
          <ReviewerName>Edward Newgate</ReviewerName>
          <Prof>Founder Circle</Prof>
        </ReviewContainer>
        <ReviewContainer>
          <Image src={img} alt="" />
        </ReviewContainer>
        {/* </Slider> */}
      </ContentWrapper>
    </Section>
  );
};

export default Review;
