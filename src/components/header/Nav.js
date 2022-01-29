import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  .link {
    display: block;
    font-family: Inter;
    font-size: 16px;
    line-height: 1.1875;
    color: #b8becd;

    ::first-letter {
      text-transform: uppercase;
    }
    :hover {
      color: #202336;
      font-weight: 500;
    }
  }
`;

const NavListItem = styled.li`
  margin-right: 34px;
`;

export default function Nav() {
  return (
    <NavList>
      {Object.keys(routes).map((key) => {
        const { path, name, mainNav } = routes[key];
        if (mainNav) {
          return (
            <NavListItem key={name}>
              <NavLink className="link" to={path}>
                {name}
              </NavLink>
            </NavListItem>
          );
        } else {
          return null;
        }
      })}
    </NavList>
  );
}
