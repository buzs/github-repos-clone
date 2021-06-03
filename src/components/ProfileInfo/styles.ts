import styled, { css } from 'styled-components';

export const Container = styled.div`
    /* max-width: 320px; */
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
    border: 1px solid var(--border-primary);

    overflow: hidden;
    line-height: 1;
    vertical-align: middle;

    flex-shrink: 0;
    box-shadow: 0 0 0 1px var(--avatar-border);
    @media (min-width: 768px) {
        width: 100%;
        /* margin-top: -34px; */
    }
`;

export const AvatarInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    width: 100%;

    > strong {
        font-size: 26px;
    }

    > p {
        font-size: 16px;
        margin-top: 20px;
    }

    > h1 {
        display: flex;
        flex-direction: column;
        line-height: 1;
        font-weight: 600;
    }

    @media (min-width: 768px) {
        margin-left: 0;
        margin-top: 16px;
    }
`

export const AvatarFullname = styled.span`
    font-size: 26px;
    line-height: 1.25;
`

export const AvatarNickname = styled.span`
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: var(--gray);
`

export const AvatarDescription = styled.span`
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;

    margin-top: 16px;

    color: var(--gray);
`

export const FollowButton = styled.button`
    display: block;
    width: 100%;
    text-align: center;

    color: var(--btn-text);
    background-color: var(--btn-bg);
    border-color: var(--btn-border);
    transition: .2s cubic-bezier(.3,0,.5,1);
    transition-property: color,background-color,border-color;

    user-select: none;
    border: 1px solid;
    border-radius: 6px;

    position: relative;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        background-color: var(--btn-hover-bg);
        border-color: var(--btn-hover-border);
        transition-duration: .1s;
    }
`

export const AvatarValue = styled.a`
    white-space: nowrap;
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 18px;

    > strong {
        font-weight: 600;
        color: var(--text-primary);
    }

    &:hover {
        color: var(--link);
        > strong {
            color: var(--link);
        }
    }
`

export const AvatarValues = styled.div`
    margin:16px 0;
    display: flex;
    gap: 10px;
`

export const AvatarBio = styled.div`
    overflow: hidden;
    font-size: 17px;
    margin-bottom: 16px;
    word-wrap: break-word;
`

export const AvatarDetails = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
`

export const AvatarDetail = styled.li`
    padding-left: 22px;
    font-size: 18px;
    padding-top: 4px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    vertical-align: top;

    width: 100%;
    max-width: 100%;

    svg {
        margin-right: 6px;
    }

    > a {
        white-space: nowrap;
        text-decoration: none;

        > strong {
            font-weight: 600;
        }

        &:hover {
            text-decoration: underline;
            color: var(--link);     
        }
    }
`

export const AvatarOrgs = styled.div`
    width: 100%;
    border-top: 1px solid var(--border);
    padding-top: 16px;

    > h2 {
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 8px;
    }
`