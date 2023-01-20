import styled from 'styled-components';

export const ContactItem = styled.li`
  margin-top: 10px;
`;

export const Btn = styled.button`
  margin-left: 10px;
  border: 1px solid gray;
  border-radius: 8px;
  background-color: white;
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: blue;
    border-color: white;
    color: white;
    opacity: 0.5;
  }
`;
