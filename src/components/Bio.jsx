import './Bio.css'
import './ImageSlider.css'
import './ImageSlider'
import ImageSlider from './ImageSlider';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { useState, useEffect } from 'react';

function Bio(){

    const [myStyle, addStyle] = useState(false);

    useEffect(() => {
        
        const myDiv = document.querySelector(".bio-desc");

        const observer = new IntersectionObserver(
            entries => {
            entries.forEach((entry) => {
              entry.isIntersecting ? addStyle(true) : addStyle(false)
            },
            );
        })

        observer.observe(myDiv);

      }, []);
    
    
    const slides = [
        ["http://localhost:5173/marvin1.jpg", '80%'],
        ["http://localhost:5173/marvin5.JPG", '20%'],
        ["http://localhost:5173/marvin2.JPG", '0'],
        ["http://localhost:5173/marvin4.jpg", '15%'],
    ]

    // [link, object-pos]

    const [TypeEffect] = useTypewriter({
        words: ['Developer','Student', 'Brother', 'Dank Memer'],
        loop: 0,
        cursor: true,
        cursorBlinking: true,
        delaySpeed: 3000


    })
    
    
    return(
        <>
            <div className = {'bio-wrapper'}>
                <div className = {`bio-grid ${myStyle ? 'show' : ''}`}>
                    <div className = 'bio-div'>
                        <div className = 'bio-div-in'>
                            {/* <h1 className = 'bio-title animation line'><p>Marvin is a <span>{TypeEffect}</span><Cursor cursorColor='black' /></p></h1> */}
                            <h1 className = 'bio-title line'>Background</h1>
                        </div>
                        <p className = 'bio-desc'>Hi my name's Marvin, born in New Orleans, grew up in Thailand, and attending The University of Michigan.</p>
                        <p className = 'bio-desc'>I love to code, video edit, play basketball/volleyball and, sometimes, doodle.</p>
                        <p className = 'bio-desc line bottom-desc'>As of right now, I'm focused on developing side projects and myself professionally.</p>
                    </div>
                    <ImageSlider slides={slides}/>
                </div>
            </div>
        </>
    );
}

export default Bio