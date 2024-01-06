import "./Button.css";
import { Link } from 'react-router-dom';
import Resume from '../files/Resume.pdf';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium' , 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, download}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link className = "btn-mobile" to = {download ? Resume : ''} target = {download ? '_blank' : ''}>
            <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type}>
                {children}
            </button>
        </Link>
    )
};