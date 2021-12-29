import styled from "styled-components";

export const UserDetailWrapeer = styled("div")`
  max-width: 1000px;
  margin: 0 auto;

  > a {
    text-decoration: none;
    cursor: pointer;
    font-size: 22px;
  }
  > h4 {
    font-size: 28px;
    text-align: center;
  }
  > h5 {
    text-align: center;
    font-size: 20px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: space-around;
    > p {
      margin: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  > p {
    font-size: 26px;
    text-align: center;
    > p {
      font-size: 18px;
      color: gray;
    }
  }
`;
