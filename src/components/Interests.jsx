import { useRef, useEffect } from 'react'
import img_temp from '../assets/images/um_logo.png'
import pbb_img from '../assets/images/pbb.jpg'
import letterboxd_img from '../assets/images/letterboxd.png'
import jjk_img from '../assets/images/jjk.png'
import pixelgun_img from '../assets/images/pixelgun.jpg'
import bangkok_img from '../assets/images/bangkok.png'
import graveso_img from '../assets/images/graveso.png'
import hamster_img from '../assets/images/hamster.png'
import cheatsheet_img from '../assets/images/cheatsheet.png'

const Interests = ({ scrollPosition = 0, animationFired, setAnimationFired }) => {

    const elementRef = useRef(null);

    useEffect(() => {

        const element = elementRef.current;

        const handleAnimationEnd = () => {
            setAnimationFired(prev => prev.map((val, index) => index === 2 ? true : val))
        };

        element.addEventListener('animationend', handleAnimationEnd);
        
          return () => {
            element.removeEventListener('animationend', handleAnimationEnd);
        };
    }, [setAnimationFired]);

    const items = [
        {src: img_temp, desc: "tryna get the mg barbatos lupus for my next build"},
        {src: pbb_img, desc: "I didn't grow up with a nintendo, so I just played brick bronze"},
        {src: jjk_img, desc: "I was there at its peak", link: "https://www.reddit.com/r/Jujutsufolk/"},
        {src: pixelgun_img, desc: "I started off making pixel gun videos, trapper was my favourite"},
        {src: cheatsheet_img, desc: "Images I've put on my cheatsheets for Michigan's EECS exams", link: "https://docs.google.com/presentation/d/1qL5riamRLdyUBAC_bqIHFRc5PHM6U1diIw89L9VeWgU/edit?usp=sharing"},
        {src: bangkok_img, desc: "I can recite bangkok's 168-letter fullname", link: "https://en.wikipedia.org/wiki/Bangkok"},
        {src: img_temp, desc: "I used to be masters: genji, ana, rein, ball"},
        {src: letterboxd_img, desc: "I try to rate movies here", link: "https://letterboxd.com/marvinJir/"},
        {src: hamster_img, desc: "I like this account", link: "https://www.instagram.com/almarts27/"},
        {src: graveso_img, desc: "I also like this account", link: "https://www.instagram.com/graveso_/"},
    ]
    
    const scrollContainerRef = useRef(null)
    
    const itemWidth = 232; // change based on if more items are added
    const totalWidth = items.length * itemWidth
    
    useEffect(() => {
        if (scrollContainerRef.current) {
            const maxScroll = totalWidth - (288 * 1) // Allow scrolling until last item is visible
            const pixelOffset = scrollPosition * maxScroll
            scrollContainerRef.current.style.transform = `translateX(-${pixelOffset}px)`
        }
    }, [scrollPosition, totalWidth])

    return (
        <div ref = {elementRef} className={`w-full h-full overflow-hidden relative ${!animationFired[2] ? 'animate-fade-in-left opacity-0' : 'opacity-1'}`}>
            <div 
                ref={scrollContainerRef}
                className='flex flex-row gap-4 w-max will-change-transform'
            >
                {items.map((item, index) => {
                    return (
                        <div 
                            key={index}
                            className='flex flex-col items-center bg-white rounded-lg shadow-md p-4 size-72 flex-shrink-0 hover:shadow-lg transition-shadow duration-200 justify-evenly'
                        >
                            <a className='w-full h-44' href={item.link} target="_blank">
                                <img 
                                    className="w-full h-full" 
                                    src={item.src} 
                                    alt={item.desc}
                                />
                            </a>
                            <span className="text-xs text-gray-600 text-center px-2 line-clamp-2">
                                {item.desc}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Interests

// make it more photocard-like, have them overlap translate them randomly. etc.
// come back to design them