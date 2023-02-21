import styled from 'styled-components'

export const SPaginationItem = styled.button<{ active: boolean }>`
  transition: background-color 0.3s;
  background-color: ${(props) => (props.active ? 'steelblue' : 'whitesmoke')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: steelblue;
    color:white;
  }
`

export const SPaginationBreadCrumbs = styled.p`
  transition: background-color 0.3s;

  background-color: whitesmoke;
  width: 35px;
  height: 35px;
  border-radius: 10%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin: 0;
  cursor: pointer;

  &:hover {
    background-color: steelblue;
    color:white
  }
`
