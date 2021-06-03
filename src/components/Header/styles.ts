import styled, { css } from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github'

export const Container = styled.div`
    height: 64px;
    padding: 11px 16px;
    background-color: var(--header);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const GitIcon = styled(Github)`
  fill: var(--logo);
  height: 38px;
  width: 38px;
  flex-shrink: 0;
  margin-right: 10px;
  cursor: pointer;
`;

export const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    @media (max-width: 692px) {
      display: none;
    }
`

export const NavLink = styled.strong`
  color: var(--primary);
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
  padding: 0 12px;
  &:hover {
    opacity: 0.7;
  }
`;

export const SearchBar = styled.input`
  max-width: 400px;
  min-width: 242px;
  width: 20%;
  height: 30px;
  background-color: var(--search);
  color: var(--primary);
  padding: 0 12px;
  border-radius: 5px;
  transition: 0.2s;
  &:focus {
    border: 1px solid var(--link);
    width: 80%;
  }
`;