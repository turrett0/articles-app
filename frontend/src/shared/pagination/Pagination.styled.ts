import styled from 'styled-components'

export const SPaginationItem = styled.button<{ active: boolean }>`
  transition: background-color 0.3s;
  background-color: ${(props) => (props.active ? props.theme.secondaryColor : props.theme.unselectedColor)};
  color: ${(props) => (props.active ? 'white' : 'black')};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
    color: white;
  }
`

export const SPaginationBreadCrumbs = styled.p`
  transition: background-color 0.3s;

  background-color: ${({ theme }) => theme.unselectedColor};
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
    background-color: ${({ theme }) => theme.secondaryColor};
    color: white;
  }
`
