import styled from 'styled-components';

export const Nav = styled.div`
    background:${window.theme.colorDark2};
    .item {
        display:block;
        color:${window.theme.colorOnDark2};
        &.active {
            color:${window.theme.colorOnDark1};
        }
    }
`;