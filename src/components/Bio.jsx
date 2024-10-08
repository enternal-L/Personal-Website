import './Bio.css'
import './ImageSlider.css'
import './ImageSlider'
import ImageSlider from './ImageSlider';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { useState, useEffect } from 'react';

// Images
import Marvin1 from '../images/marvin1.jpg'
import Marvin2 from '../images/marvin5.jpg'
import Marvin3 from '../images/marvin2.jpg'
import Marvin4 from '../images/marvin4.jpg'

function Bio(){

    const [myStyle, addStyle] = useState(false);

    useEffect(() => {
        
        const myDiv = document.querySelector(".bio-desc");

        const observer = new IntersectionObserver(
            entries => {
            entries.forEach((entry) => {
              if (entry.isIntersecting){
                    addStyle(true);
                }
                
                // if ever want for bio section to appear-reappear
                //
                // else{
                //     addStyle(false);
                // }
            }
            );
        })

        observer.observe(myDiv);

      }, []);
    
    
    const slides = [
        [Marvin1, '80%'],
        [Marvin2, '20%'],
        [Marvin3, '0'],
        [Marvin4, '15%'],
    ]

    // [link, object-pos]

    // const mousePosition = useMousePosition();
    
    return(
        <>
            <div className = {'bio-wrapper'}>
                <MouseParallaxContainer globalFactorX={0.015} globalFactorY={0.015}>
                    <div className = {`bio-grid ${myStyle ? 'show' : ''}`}>
                        <MouseParallaxChild>
                            <div className = 'bio-div'>
                                <div className = 'bio-div-in'>
                                    {/* <h1 className = 'bio-title animation line'><p>Marvin is a <span>{TypeEffect}</span><Cursor cursorColor='black' /></p></h1> */}
                                    <h1 className = 'bio-title line'>Background</h1>
                                </div>
                                <p className = 'bio-desc'>Hi my name's Marvin, born in New Orleans, grew up in Thailand, and attending The University of Michigan.</p>
                                <p className = 'bio-desc'>I love to code, video edit, play basketball/volleyball and yap.</p>
                                <p className = 'bio-desc line bottom-desc'>As of right now, I'm doing research on brain interface hardware at UMDBI, focusing on improving and creating source modules.</p>
                            </div>
                        </MouseParallaxChild>
                        <ImageSlider slides={slides}/>
                    </div>
                </MouseParallaxContainer>
            </div>
        </>
    );
}

// const myDiv2 = document.querySelector('.bio-grid')

// myDiv2.style.transform = `translate(${mousePosition.x}, ${mousePosition})`;

// const useMousePosition = () =>{
    
//     const [mousePosition,setMousePosition] = useState({ x: null, y: null});

//     useEffect(() => {
        
//         const updateMousePosition = ev => {
//             setMousePosition({ x: ev.clientX, y: ev.clientY });
//         };
        
//         window.addEventListener('mousemove', updateMousePosition);
        
//         return () => {
//             window.removeEventListener('mousemove', updateMousePosition);
//         };


//     }, []);

//     return mousePosition

//     // 362, 633 center of text
// }


export default Bio