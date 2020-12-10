import styled from "styled-components";

export const Headline = styled.h2`
  grid-column: 1 / span 2;
  color: black;
  margin: auto;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 400;
  font-size: 4em;
  text-align: center;
  padding-bottom: 30px;
  width: 70%;
  @media (max-width: 700px) {
    grid-column: 1 / 4;
    font-size: 1.5em;
  }
`;

export const Header = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: space-between;
  padding: 1vw;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 300;
  @media (max-width: 700px) {
    grid-column: 1 / 4;
    display: block;
    margin: auto;
    padding-top: 20px;
  }
`;
