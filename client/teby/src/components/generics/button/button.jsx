import ButtonStyle from './button.style';

const Button = ({label, children}) => {
    const handleClick = () => {
        alert('My click');
    };
    return (
        <ButtonStyle onClick={handleClick}>{label || children}</ButtonStyle>
    );
}

export default Button;