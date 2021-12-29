import styled from "styled-components";

export const UserCard = styled("div")`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 10px;
  border: 1px solid grey;
  box-shadow: 2px 2px 2px 2px gray;
  padding: 7px;
  > h5 {
    font-size: 24px;
    margin: 0;
    font-style: uppercase;
  }
  > p {
    margin: 5px 0;
  }
  > button {
    width: 130px;
    align-self: center;
  }
`;
