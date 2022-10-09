import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
export const ErMessage = styled(ErrorMessage)`
  font-size: 15px;
  font-weight: bold;
  color: rgb(201, 49, 42);
`;
export const Input = styled(Field)`
  display: block;
  background-color: #fffab7;
  margin-top: 15px;
  margin-bottom: 40px;
  min-width: 250px;
  padding: 10px 20px;
  border-top: 1px solid rgb(152, 154, 27);
  border-left: 1px solid rgb(152, 154, 27);
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  color: rgb(50, 50, 29);
  font-size: 18px;
`;
export const Forma = styled(Form)`
  background-color: rgb(206, 208, 70);
  border: 1px solid rgb(152, 154, 27);
  padding: 50px;
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(87, 89, 11);
  margin-bottom: 50px;
`;
// export const Input = styled(Field)`
//   background-color: red;
// `;
export const Label = styled.label`
  /* background-color: red; */
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  background-color: #135600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #0f3305;
  }
`;
