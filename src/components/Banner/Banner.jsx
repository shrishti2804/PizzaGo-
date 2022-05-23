import styled from "styled-components";

const BannerStyled = styled.div`
  height: 350px;
  background-image: url("https://i.ibb.co/z5n15G2/tasty-pepperoni-pizza-black-concrete-background-79782-102.jpg");
  background-position: center;
  background-size: cover;
  filter: brightness(75%);
`;

export const Banner = () => {
  return <BannerStyled/>
};
