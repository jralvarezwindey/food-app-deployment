import styled from 'styled-components';
import { colors } from '../GlobalStyle.styled';

export const DisplayParameters = styled.div`
  margin: 55px 10px;
  min-height: 1020px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 20px;
  color: ${colors.WHITE};
`

export const Filters = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 8px 16px 0px rgba(55,55,55,0.8);
`

export const FiltersTitle = styled.div`
  margin: 30px 0px 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 600;
`

export const Filter = styled.span`
  cursor: pointer;
  margin: 9px;
  padding: 6px 16px;
  height: 36px;
  border-radius: 80px;
  text-align: center;
  background-color: ${props => props.active ? colors.RED : colors.BLACK};
  transition: 100ms;

  &:hover {
    opacity: 0.8;
  }
`

export const DropdownButton = styled.div`
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px 0px rgba(55,55,55,0.8);
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  font-size: 28px;
  font-weight: 600;
  transition: 200ms;

  &:hover {
    opacity: 0.6;
  }
`

export const DropdownContent = styled.div`
  visibility: hidden;
  height: 0;
  opacity: 0;
  box-shadow: 0px 8px 16px 0px rgba(55,55,55,0.8);
  color: ${colors.WHITE};
  transition: visibility 200ms, opacity 200ms linear;
`

export const DropdownContentSortCriteria = styled.p`
    padding: 12px 16px;
    color: ${props => props.active ? colors.RED : colors.WHITE};
    font-size: 22px;
    font-weight: 600;

    &:hover {
      background-color: ${colors.WHITE};
      color: ${props => props.active ? colors.RED: colors.BLACK};
    }
`

export const OrderBy = styled.div`
  align-self: center;
  width: 195px;

  &:hover ${DropdownContent} {
    visibility: visible;
    height: auto;
    opacity: 1;
  }

  &:hover ${DropdownButton} {
    box-shadow: 0px 0px 0px 0px;
  }
`
