import styled from 'styled-components';

/*
	notes:
	* Built version (as in "npm run build") can't handle "%" height on a container layout element. So, use "vh" instead of "%" wherever possible
*/
export const Top = styled.div`
	&.Top {
        background:${window.theme.colorDark1};
        color:${window.theme.colorOnDark1};
        height:${window.theme.headerHeight};
        font-size:2rem;
        > * {
            padding:${window.theme.perimeterPadding};
        }
        .logo {
            line-height:100%;
            &.right {
                float:right;
            }
            .fontIcon {
                font-size: 78%;
                vertical-align: top;
            }
        }
    }
`;