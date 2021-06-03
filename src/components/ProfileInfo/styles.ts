import styled, { css } from 'styled-components';

export const Container = styled.div`
    max-width: 320px;
    margin-left: 18px;
`

export const AvatarBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
    @media (min-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const Avatar = styled.img`
    width: 16%;
    border-radius: 50%;
    @media (min-width: 768px) {
        width: 100%;
        /* margin-top: -34px; */
    }
`;

export const AvatarInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;

    > strong {
        font-size: 26px;
    }

    > span {
        font-size: 20px;
        color: var(--gray);
    }

    > p {
        font-size: 16px;
        margin-top: 20px;
    }

    @media (min-width: 768px) {
        margin-left: 0;
        margin-top: 16px;
    }
`