import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
type NavbarProps = {
  className?: string;
};

const Logo = styled.h1`
  color: ${colors.primary};
`;

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={className}>
      <nav>
        <Logo>DISP.URL</Logo>
        <ul className="nav-items">
          <li className="nav-item">Pricing</li>
          <li className="nav-item">About</li>
        </ul>
      </nav>
    </div>
  );
};

export default styled(Navbar)`
  nav {
    height: 6rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-items {
      display: flex;
      list-style: none;
      .nav-item {
        margin-right: 2rem;
        color: white;
        font-weight: bold;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
