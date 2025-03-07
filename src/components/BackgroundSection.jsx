import React from 'react';
import interest from '../assets/images/misc.jpg';

const BackgroundSection = () => {
  return (
    <div className="p-8 flex flex-row">
        <div className='w-full'>
          <h2 className="text-2xl font-semibold mb-4">I try to tell my story </h2>
          <div className = "flex flex-row justify-between">
            <div className="prose w-full h-full">
              <p className="text-[#6B6B6B]">
                I'm passionate about low-level software, taking operating systems (482) and web systems (485).
                I'm currently writing C++ code at the <a className = "underline font-bold" target = "_blank" href = "https://sites.google.com/umich.edu/umdbi/home">UMDBI Lab</a>.
                <br></br>
                <br></br>
                I occasionally post content on my <a className='underline font-bold' target = "_blank" href = "https://www.youtube.com/@enternal0070/">youtube</a>.
                I enjoy volleyball & basketball and <a  className = 'underline font-bold' target = "_blank" href = "https://www.overbuff.com/players/ZiangZ-1630">game</a>.
                <br></br>
                <br></br>
                For now, I am <a className = 'underline font-bold' target = "_blank" href = "https://i.redd.it/zd9vbm8jk4ad1.jpeg">unemployed</a> this summer.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img className = "object-cover absolute top-0 right-0 w-96 h-72" alt = "me" src = {interest}></img>
        </div>
    </div>
  );
};

export default BackgroundSection; 