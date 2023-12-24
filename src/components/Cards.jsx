import CardItem from "./CardItem"
import MRover from '../images/mrover.jpg'
import Placeholder from '../images/Placeholder.png'
import Card from './newCard'
import './Cards.css';
import './newCard.css'

function Cards() {
  return (
    <div className='cards' id='projects'>
      <h1 className = 'cards__title'>Projects I worked on</h1>
      <div className='cards__container'>
          <ul className='cards__items'>
            <Card 
              title = 'MRover' 
              subtitle = 'Member' 
              desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsam nobis, delectus adipisci dignissimos, ab obcaecati laborum non tenetur eveniet voluptatem laudantium itaque a error doloremque eum reiciendis minus temporibus.' 
              path = 'https://github.com/umrover/mrover-ros/wiki'
              src = 'http://localhost:5173/mrover.jpg'
            />
            <Card 
              title = 'MRover' 
              subtitle = 'Member' 
              desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsam nobis, delectus adipisci dignissimos, ab obcaecati laborum non tenetur eveniet voluptatem laudantium itaque a error doloremque eum reiciendis minus temporibus.' 
              path = 'https://github.com/umrover/mrover-ros/wiki'
              src = 'http://localhost:5173/mrover.jpg'
            />
            <Card 
              title = 'MRover' 
              subtitle = 'Member' 
              desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsam nobis, delectus adipisci dignissimos, ab obcaecati laborum non tenetur eveniet voluptatem laudantium itaque a error doloremque eum reiciendis minus temporibus.' 
              path = 'https://github.com/umrover/mrover-ros/wiki'
              src = 'http://localhost:5173/mrover.jpg'
            />
            {/* <CardItem
              src=  {MRover}
              text='MRover'
              label='Robotics'
              path='https://github.com/umrover/mrover-ros/wiki'
            /> */}
          </ul>
      </div>
    </div>
  );
}

export default Cards