import styled from "styled-components";


export const BtnCreate = styled.button`
  background: none;
  border: 1px solid rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 0.5rem;
  border-radius: 9999px;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  span {
    padding-left: 0.75rem;
    padding-right: 1.75rem;
  }

  img {
    width: 2rem;
  }
`