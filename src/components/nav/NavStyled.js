import styled from 'styled-components';

export const Nav = styled.div`
    &.Nav {
        background:${window.theme.colorDark2};
        .item {
            display:block;
            color:${window.theme.colorOnDark2};
            white-space:nowrap;
            &.active {
                color:${window.theme.colorOnDark1};
            }
            .fontIcon {
                padding-right:0.5rem;
            }
        }
    }
`;