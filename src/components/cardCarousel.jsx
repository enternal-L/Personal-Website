import './cardCarousel.css'
import './newCard.css'
import Cards from './newCard'

function cardCarousel(){
    return (
        <>
            <div className = 'card-container'>
                <div className='slide-anim'>
                    <Cards 
                        title = 'MRover' 
                        subtitle = 'Member' 
                        desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsam nobis, delectus adipisci dignissimos, ab obcaecati laborum non tenetur eveniet voluptatem laudantium itaque a error doloremque eum reiciendis minus temporibus.' 
                        path = 'https://github.com/umrover/mrover-ros/wiki'
                        src = 'http://localhost:5173/mrover.jpg'
                    />
                    <Cards 
                        title = 'MRover' 
                        subtitle = 'Member' 
                        desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsam nobis, delectus adipisci dignissimos, ab obcaecati laborum non tenetur eveniet voluptatem laudantium itaque a error doloremque eum reiciendis minus temporibus.' 
                        path = 'https://github.com/umrover/mrover-ros/wiki'
                        src = 'http://localhost:5173/mrover.jpg'
                    />
                    <Cards 
                        title = 'MRover' 
                        subtitle = 'Member' 
                        desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsam nobis, delectus adipisci dignissimos, ab obcaecati laborum non tenetur eveniet voluptatem laudantium itaque a error doloremque eum reiciendis minus temporibus.' 
                        path = 'https://github.com/umrover/mrover-ros/wiki'
                        src = 'http://localhost:5173/mrover.jpg'
                    />
                    <Cards 
                        title = 'MRover' 
                        subtitle = 'Member' 
                        desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsam nobis, delectus adipisci dignissimos, ab obcaecati laborum non tenetur eveniet voluptatem laudantium itaque a error doloremque eum reiciendis minus temporibus.' 
                        path = 'https://github.com/umrover/mrover-ros/wiki'
                        src = 'http://localhost:5173/mrover.jpg'
                    />
                    <Cards 
                        title = 'MRover' 
                        subtitle = 'Member' 
                        desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsam nobis, delectus adipisci dignissimos, ab obcaecati laborum non tenetur eveniet voluptatem laudantium itaque a error doloremque eum reiciendis minus temporibus.' 
                        path = 'https://github.com/umrover/mrover-ros/wiki'
                        src = 'http://localhost:5173/mrover.jpg'
                    />
                </div>
            </div>
        </>
    );
}

export default cardCarousel