import styled from '@emotion/styled';

const ButtonStyle = styled.button(({theme: {
        button
    }}) => ({
    color: button.color,
    backgroundColor: button.backgroundColor,
    paddingLeft: button.paddingLeft,
    paddingRight: button.paddingRight,
    paddingTop: button.paddingTop,
    paddingBottom: button.paddingBottom
}))

// const Button = styled.button`
//     color: ${props => props.theme.button.color};
//     background-color: ${props => props.theme.button.backgroundColor};
// `;

export default ButtonStyle;
