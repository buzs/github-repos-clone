import styled, { css } from 'styled-components';

import { TabProps } from '.'

const modeModifiers = {
    mobile: () => css`
        margin-top: var(--verticalPadding);
        justify-content: center;
        
        .content {
            margin: 0 auto;
        }

        @media (min-width: 768px) {
            display: none;
        }
    `,

    desktop: () => css`
        display: none;
        
        @media (min-width: 768px) {
            position: absolute;
            z-index: 3;
            display: block;
            .main {
                /* left: 50%; */
                /* transform: translate(-50%, 0%); */
                display: flex;
                padding: 0;
                max-width: 1280px;
                margin: 0 auto;
            }

            nav {
                margin: 0;
                padding: 0 24px;
            }
            
            .offset {
                width: 25%;
                margin-left: 18px;
            }
        }
    `
}

export const Container = styled.div<TabProps>`
    background: var(--primary);
    display: flex;
    margin-bottom: 15px;
    width: 100%;
    border-bottom: 1px solid var(--border);
    padding: 0 15px;

    nav {
        margin: auto;
        display: flex;
        flex-direction: row;
    }

    .content {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 15px 12px;
        justify-content: center;
        border-bottom: 2px solid transparent;
        cursor: pointer;

        &:hover {
            border-bottom: 2px solid rgba(255,255,255,0.4);
        }

        &.active {
            border-bottom: 2px solid var(--orange);
        }
        
        .label {
            font-size: 14px;
            font-weight: 600;
            padding: 0 7px;
            display: flex;
            gap: 10px;
            color: var(--tertiary);
            font-weight: 500;
            font-size: 0.95rem;

            svg {
                width: 18px;
                @media (max-width: 768px) {
                    display: none;
                }
                fill: var(--tertiary);
            }
        }

        .number {
            font-size: 12px;
            background: var(--ticker);
            padding: 2px 6px;
            border-radius: 24px;
        }
    }
    .line {
        display: flex;
        width: 200vw;
        border-bottom: 1px solid var(--border);
        margin-left: -50vw;
    }
    
    ${({ mode }) => css`
        ${!!mode && modeModifiers[mode]()}
    `}
`