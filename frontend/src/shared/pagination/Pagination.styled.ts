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
  }
`
