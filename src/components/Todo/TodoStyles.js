import styled from "styled-components";

export const TodoWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px -1px 8px 1px #a5a5a5;
  margin-bottom: 16px;
  > h5 {
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    text-transform: uppercase;
    cursor: pointer;
  }
`;
