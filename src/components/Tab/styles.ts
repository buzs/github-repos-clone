import styled from 'styled-components';

export const Container = styled.li`
    background: var(--primary);
    display: flex;
    margin-bottom: 15px;
    width: 100%;
    border-bottom: 1px solid var(--tertiary);
    padding: 0 15px;

    .content {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 8px 12px;
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
    &.mobile {
        margin-top: var(--verticalPadding);
        
        .content {
            margin: 0 auto;
        }

        @media (min-width: 768px) {
            display: none;
        }
    }

    &.desktop {
        display: none;
        
        @media (min-width: 768px) {
            display: unset;
            .wrapper {
                display: flex;
                margin: 0 auto;
                max-width: 1280px;
            }
            .offset {
                width: 25%;
                margin-right: var(--horizontalPadding);
            }
        }
    }
`