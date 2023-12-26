import video from '../videos/Compilation.mp4';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function HeroSection() {

    document.addEventListener("DOMContentLoaded", function() {
        var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
      
        if ("IntersectionObserver" in window) {
          var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
              if (video.isIntersecting) {
                for (var source in video.target.children) {
                  var videoSource = video.target.children[source];
                  if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                    videoSource.src = videoSource.dataset.src;
                  }
                }
      
                video.target.load();
                video.target.classList.remove("lazy");
                lazyVideoObserver.unobserve(video.target);
              }
            });
          });
      
          lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
          });
        }
    });

    const [TypeEffect] = useTypewriter({
        words: ['Computer Science Undergraduate'],
        cursor: true,
        typeSpeed: 85
    })

    return (
        <>
            <div className = 'hero-container' id='top'>
                <video className = 'lazy' src = {video} autoPlay loop muted></video>
                <h1>Marvin Jirapongsuwan</h1>
                <p><span>{TypeEffect}</span><Cursor cursorColor='white' /></p>
                <div className = 'hero-btns'>
                    <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize= 'btn--large' onClick={() => {
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
                    }}>Contact Me</Button>
                </div>
            </div>
        </>
    );
}

export default HeroSection