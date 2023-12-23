import { useState } from "react";

function ImageSlider({ slides }){
    const [Index, setIndex] = useState(0);
    const [Anim, setAnim] = useState(true);

    return (
        <>
            <div className = 'carousel-div'>
                <div className='carousel-div-wrapper'>
                    <img className = {`marvin-img ${Anim ? "animation1" : "animation2"}`} src = {`${slides[Index][0]}`} onClick={() =>{
                        
                        setAnim(!Anim)

                        if (Index == (slides.length) - 1){
                            setIndex(0);
                        }
                        else{
                            setIndex(Index + 1);
                        }
                    }} style={{objectPosition: `0 ${slides[Index][1]}`}}></img>
                </div>
            </div>
        </>
    );
}

export default ImageSlider