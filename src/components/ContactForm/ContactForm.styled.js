import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 8px;
  border: 1px solid black;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
export const InputForm = styled.input`
  border: 1px solid lightgray;
  :hover,
  :focus {
    border: 1px solid blue;
    box-shadow: 0.5px 0.5px 1px 0 blue;
  }
`;

export const BtnForm = styled.button`
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
