import styled, { css } from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
    color: var(--text-secondary)
`

export const Topics = styled.div`
    height: 30px;
    display: inline-flex;
`

export const Topic = styled.div``

export const SecondaryBox = styled.div`
    display: flex;
`

export const Stars = styled.div``

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
        background-color: var(--btn-bg-hover);
        border-color: var(--btn-border-hover);
    }
`