import styled, { css } from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    border-top: 1px solid var(--border);
    padding: 24px 0;
`

export const InfoBox = styled.div`

`

export const LeftBox = styled.div`
    display: flex;
    justify-content: row;
`

export const Title = styled.h3`
    word-break: break-all;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 4px;

    > a {
        outline-width: 0;
        color: var(--link);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const SubTitle = styled.h3`
    font-size: 13px;
    margin-bottom: 4px;
    font-weight: normal;
    color: var(--text-secondary);

    > a {
        outline-width: 0;
        color: var(--link);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const Description = styled.p`
    color: var(--text-secondary);

    padding-right: 24px;
    margin-bottom: 8px;
`

export const Topics = styled.div`
    height: 30px;
    overflow: hidden;

    display: inline-flex;
    font-size: 12px;
    margin: 4px 0;
`

export const Topic = styled.div`
    margin: 0 .125em .333em 0;
    display: inline-block;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 2em;
    padding: 0 10px;
    line-height: 22px;
    color: var(--topic-tag-text);
    background-color: var(--topic-tag-bg);
    white-space: nowrap;

    font-size: 12px;

    &:hover {
        background-color: var(--topic-tag-hover-bg);
    }
`

export const SecondaryBox = styled.div`
    display: flex;
    margin-top: 8px;
    font-size: 12px;

    gap: 15px;

    * {
        color: var(--text-secondary);
    }
`

type LanguagesProp = {
    language: string
}

export const Language = styled.span<LanguagesProp>`
    display: flex;
    justify-content: row;
    align-items: center;
    
    &::before {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 9999px;
        margin-right: 5px;
        ${({ language }) => css`
            background: var(--${language.toLowerCase()});
        `}
    }
`

export const Stars = styled.div``

export const Fork = styled.div``

export const License = styled.div``

export const Updated = styled.div``

export const Button = styled.button`
    padding: 3px 12px;
    font-size: 12px;
    line-height: 20px;

    color: var(--btn-text);
    background-color: var(--btn-bg);
    border-color: var(--btn-border);
    transition: .2s cubic-bezier(.3,0,.5,1);
    transition-property: color,background-color,border-color;

    user-select: none;
    border: 1px solid;
    border-radius: 6px;
    appearance: none;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;

    &:hover {
        background-color: var(--btn-hover-bg);
        border-color: var(--btn-border-hover);
    }
`