import "./Button.css";
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium' , 'btn--large'];

let  source = ''
let blank = ''

export const Button = ({children, type, onClick, buttonStyle, buttonSize, download}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    
    if(download){
        source = 'http://localhost:5173/Resume.pdf'
        blank = '_blank'
    }

    return(
        <Link className = "btn-mobile" to = {source} target = {blank}>
            <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type}>
                {children}
            </button>
        </Link>
    )
};