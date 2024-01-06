import video from '../videos/Compilation.mp4';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function HeroSection() {
    const [TypeEffect] = useTypewriter({
        words: ['Computer Science Undergraduate'],
        cursor: true,
        typeSpeed: 85
    })

    return (
        <>
            <div className = 'hero-container' id='top'>
                <video className = 'lazy' src = {video} autoPlay loop muted playsInline></video>
                <h1>Marvin Jirapongsuwan</h1>
                <p><span>{TypeEffect}</span><Cursor cursorColor='white' /></p>
                <div className = 'hero-btns'>
                    <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize= 'btn--large' download = {false} onClick={() => {
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
                    }}>Contact Me</Button>
                </div>
            </div>
        </>
    );
}

export default HeroSection