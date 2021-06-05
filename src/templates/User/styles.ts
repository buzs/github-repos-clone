import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1280px;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const LeftBox = styled.div`
    margin-right: var(--horizontalPadding);
    z-index: 3;

    @media (min-width: 768px) {
        width: 25%;
    }
`

export const Content = styled.div`
    width: 100%;
    @media (min-width: 768px) {
        width: 75%;
        padding: 50px 24px;
    }
`