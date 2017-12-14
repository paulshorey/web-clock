import styled from 'styled-components';


export const Label = styled.label`
    font-size:2rem;
    line-height:100%;
    transform:rotate(90deg);
    position:absolute;
    left:0;
    top:0;
    color:${window.theme.colorOnDark1};
`;

export const Input = styled.input`
    width:2rem;
    height:2rem;
    position:absolute;
    left:0;
    top:0;

    /* the hack... */
    opacity:0;
    /* the nav sidebar element... */
    &:checked + div {
        display:block;
        max-width:750px;
    }
`;