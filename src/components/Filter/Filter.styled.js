import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const InputFilter = styled.input`
  font-size: 10px;
  margin-top: 4px;
  border: 1px solid lightgray;
  :hover,
  :focus {
    border: 1px solid blue;
    box-shadow: 0.5px 0.5px 1px 0 blue;
  }
`;
