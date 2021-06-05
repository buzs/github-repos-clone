import styled, { css } from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github'

export const Container = styled.div`
    height: 64px;
    padding: 11px 32px;
    background-color: var(--header);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;

    @media (max-width: 692px) {
      justify-content: center;
      margin-bottom: 5px;
    }
`

export const GitIcon = styled(Github)`
  fill: var(--logo);
  height: 42px;
  width: 42px;
  flex-shrink: 0;
  margin-right: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 692px) {
    margin: 0;
  }
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
  color: var(--black);
  font-weight: 600;
  white-space: nowrap;
  font-size: 16px;
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
  width: 25%;
  height: 30px;
  font-size: 15px;
  margin-right: 10px;

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