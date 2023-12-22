import CardItem from "./CardItem"
import MRover from '../images/mrover.jpg'
import Placeholder from '../images/Placeholder.png'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects I worked on</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src=  {MRover}
              text='Experimented with different lenses + parameters to improve long range cam detection performance'
              label='MRover'
              path='https://github.com/umrover/mrover-ros/wiki'
            />
            <CardItem
              src=  {Placeholder}
              text='Placeholder'
              label='PlaceHolder'
              path='/'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
                src=  {Placeholder}
                text='Placeholder'
                label='PlaceHolder'
                path='/'
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