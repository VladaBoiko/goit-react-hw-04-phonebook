import styled from 'styled-components';

export const Item = styled.li`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(87, 89, 11);
  border-bottom: 1px solid #000;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  background-color: #fa1b1b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #0f3305;
  }
`;
