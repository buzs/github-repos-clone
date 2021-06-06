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
  color: var(--header-text);
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

  background-color: var(--search-header);
  border: 1px solid var(--search-header-border);
  color: var(--search-text);
  padding: 0 12px;
  border-radius: 5px;
  transition: 0.2s;
  &:focus {
    border: 1px solid var(--link);
    width: 80%;
  }
`;


export const Switch = styled.div`
  display: flex;

  input {
    height: 0;
    width: 0;
    visibility: hidden;
  
    &:checked + label span {
      left: calc(100%);
      transform: translateX(-100%);
    }
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 40px;
    height: 20px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;

    &:active {
      span {
        width: 20px;
      }
    }

    span {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 20px;
      height: 20px;
      border-radius: 45px;
      transition: 0.2s;
      background: #fff;
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }
  }
`