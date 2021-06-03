import styled, { css } from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 8px;
    border-top: 1px solid var(--border);
    max-width: 1280px;
    margin: 40px auto 8px;
    
    @media (min-width: 698px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const Link = styled.a`
    color: aliceblue;
`

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
`