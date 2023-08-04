// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Card = styled.div`
  background-color: #383a4e;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 40px;
  justify-content: center;
  box-shadow: #434451;

  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
`

export const Para = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
`

export const CustomInput = styled.input`
  margin-top: 20px;
  width: 280px;
  height: 35px;
  outline: none;
`
