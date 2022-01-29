import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const styleTypes = {
  light: {
    backgroundColor: "#e5e5e5",
    color: "#fb8f1d",
  },
  bright: {
    backgroundColor: "#fb8f1d",
    color: "#e5e5e5",
  },
};

const ButtonWrapper = styled.button`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  border: 1px solid #fb8f1d;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px 46px;
  color: ${({ styleType }) => styleTypes[styleType].color};
  background-color: ${({ styleType }) => styleTypes[styleType].backgroundColor};
  :not(:last-child) {
    margin-right: 10px;
  }
`;
const LinkButton = styled(NavLink)`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  border: 1px solid #fb8f1d;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px 46px;
  color: ${({ styletype }) => styleTypes[styletype].color};
  background-color: ${({ styletype }) => styleTypes[styletype].backgroundColor};
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export default function Button({ text, type, styleType, path }) {
  return (
    <>
      {type === "link" ? (
        <LinkButton to={path} styletype={styleType}>
          {text}{" "}
        </LinkButton>
      ) : (
        <ButtonWrapper type={type} styleType={styleType} className="button">
          {text}
        </ButtonWrapper>
      )}
    </>
  );
}

Button.defaultProps = {
  type: "button",
  styleType: "light",
};

Button.propTypes = {
  text: PropTypes.string,
};
