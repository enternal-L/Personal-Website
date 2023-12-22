import video from '../videos/Compilation.mp4';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
    return (
        <>
            <div className = 'hero-container'>
                <video src = {video} autoPlay loop muted></video>
                <h1>Marvin Jirapongsuwan</h1>
                <p>Computer Science Undergraduate</p>
                <div className = 'hero-btns'>
                    <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize= 'btn--large'>Contact Me</Button>
                </div>
            </div>
        </>
    );
}

export default HeroSection