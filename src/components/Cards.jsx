import CardItem from "./CardItem"
import MRover from '../images/mrover.jpg'
import Placeholder from '../images/Placeholder.png'
import './Cards.css';

function Cards() {
  return (
    <div className='cards' id='projects'>
      <h1>Projects I worked on</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src=  {MRover}
              text='MRover'
              label='Robotics'
              path='https://github.com/umrover/mrover-ros/wiki'
            />
            <CardItem
              src=  {Placeholder}
              text='Pill Packer'
              label='Robotics'
              path='https://youtu.be/3o2vF-bXeKU'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
                src=  {Placeholder}
                text="Stopwatch-in-JS"
                label='Software'
                path='https://enternal-l.github.io/Stopwatch-in-JS/'
              />
            <CardItem
              src=  {Placeholder}
              text='Placeholder'
              label='PlaceHolder'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards