import React from "react";
import styled from "styled-components";

import { Title } from "../../styles/title";

const NavBarStyled = styled.div`
  background-color: #FF8C00;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.5);
`;

const AuthLogo = styled(Title)`
  font-size: 20px;
  color: black;
  text-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;

export const NavBar = ({ login, loggedIn, isLoading, logout }) => {
  return (
    <NavBarStyled>
      <Logo>PizzaGo! 🍕</Logo>
      <UserStatus>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <AuthLogo>
            {loggedIn ? (
              <>
                Hello, {loggedIn.displayName} | 
                <LoginButton onClick={logout}> Log Out</LoginButton>
              </>
            ) : (
              <LoginButton onClick={login}>Log In / Sign Up</LoginButton>
            )}
          </AuthLogo>
        )}
      </UserStatus>
    </NavBarStyled>
  );
};
