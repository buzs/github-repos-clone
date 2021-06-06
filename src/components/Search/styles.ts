import { Github } from '@styled-icons/boxicons-logos';
import styled, { css } from 'styled-components';

export const Container = styled.footer`
    display: flex;
    padding: 20px 0;
    
    @media (max-width: 692px) {
        padding: 20px 15px;
    }
`

export const Input = styled.input`
    width: 100%;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: var(--black);
    vertical-align: middle;
    background: var(--search);
    border: 1px solid var(--search-border);
    border-radius: 6px;
`

export const Select = styled.select`

`