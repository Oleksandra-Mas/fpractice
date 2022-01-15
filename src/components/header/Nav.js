import PropTypes from "prop-types";
import styled from "styled-components";

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1875;
  color: #b8becd;
`;

const NavListItem = styled.li`
  margin-right: 34px;
  :hover {
    color: #202336;
    font-weight: 500;
  }
`;

export default function Nav({ items }) {
  return (
    <NavList>
      {items.map((item) => (
        <NavListItem key={item}>{item}</NavListItem>
      ))}
    </NavList>
  );
}
