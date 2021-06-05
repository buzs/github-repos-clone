import { Github } from '@styled-icons/boxicons-logos';
import styled, { css } from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0 8px;
    border-top: 1px solid var(--border);
    max-width: 1280px;
    margin: 40px auto 8px;

    svg {
        max-width: 30px;
    }
    
    @media (max-width: 692px) {
        margin: 0px auto;
        padding-bottom:40px;
        gap: 10px;
        flex-direction: column;
    }
`

export const GitIcon = styled(Github)`
    fill: var(--logo);
    opacity: 0.3;
    width: 30px;
    flex-shrink: 0;
    margin: 0 60px;
    cursor: pointer;

    @media (max-width: 692px) {
        display: none;
    }

    &:hover {
        opacity: 0.7;
    }
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    width: 100%;
    > li {
        margin: 0 10px;
        color: var(--link);
        font-size: 12px;
        cursor: pointer;
        &:hover {
        text-decoration: underline;
        }
    }

    @media (max-width: 692px) {
        justify-content: center;
    }
`