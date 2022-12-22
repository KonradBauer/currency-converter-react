import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 2px;
  background-color: teal;
  color: whitesmoke;
  padding: 5px;
  transition: 0.5s;
  margin: 2px;

  &:hover {
    cursor: pointer;
    border: none;
    border-radius: 2px;
    background-color: hsl(180, 100%, 35%);
    color: whitesmoke;
    padding: 5px;
    transform: scale(1.05);
  }
  &:active {
    border: none;
    border-radius: 2px;
    background-color: hsl(180, 100%, 40%);
    color: whitesmoke;
    padding: 5px;
    transform: scale(1.05);
  }
`;
