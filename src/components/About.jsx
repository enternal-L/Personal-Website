import { useEffect, useRef } from "react"

const About = ({animationFired, setAnimationFired}) => {

    const elementRef = useRef(null);

    useEffect(() => {

        const element = elementRef.current;

        const handleAnimationEnd = () => {
            setAnimationFired(prev => prev.map((val, index) => index === 0 ? true : val))
        };

        element.addEventListener('animationend', handleAnimationEnd);
        
          return () => {
            element.removeEventListener('animationend', handleAnimationEnd);
        };
    }, [setAnimationFired]);

    return (
        <div ref = {elementRef} className={`w-full h-full ${!animationFired[0] ? 'content-fade-in opacity-0' : 'opacity-1'}`}>
            <p className="text-[#6B6B6B]">
                I'm passionate about low-level software & systems.
                <br />
                <br />
                I will be interning at{' '}
                <a className="underline font-bold" target="_blank" href="https://www.viam.com/">
                Viam
                </a>{' '}
                this upcoming summer.
                <br />
                <br />
                Currently working with{' '}
                <a className="underline font-bold" target="_blank" href="https://ners.engin.umich.edu">
                NERS
                </a>{' '}
                to build their radiation data pipeline.
                <br />
                Interned at{' '}
                <a className="underline font-bold" target="_blank" href="https://www.nutanix.com/">
                Nutanix
                </a>
                . Wrote C++ at the{' '}
                <a className="underline font-bold" target="_blank" href="https://sites.google.com/umich.edu/umdbi/home">
                UMDBI Lab
                </a>
                . Taught at{' '}
                <a className="underline font-bold" target="_blank" href="https://joyofcoding.eecs.umich.edu/">
                Joy of Coding
                </a>
                .
                <br />
                <br />
                I occasionally post content on my{' '}
                <a className="underline font-bold" target="_blank" href="https://www.youtube.com/@enternal0070/">
                youtube
                </a>
                . I enjoy volleyball & basketball and games.
                <br />
                <br />
            </p>
        </div>
    )
}

export default About