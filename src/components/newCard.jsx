import './newCard.css'

function newCard(){
    return(
        <>
            <div className = 'card-container box'>
                <div className='card box'>
                    <div className = 'card-body box'>
                            <h1 className='card-title'>PROJECT</h1>
                            <p className='card-sub-title'>Project Subtitle</p>
                            <p className='card-info'>lblablbalablablabldlkadblkbdlkdalkabdlk</p>
                        </div>
                        <img className = 'card-img' src = 'http://localhost:5173/mrover.jpg'></img>
                    {/* <a className = 'link-container' href = 'https://github.com/umrover/mrover-ros/wiki' target='_blank'>
                    </a> */}
                </div>
            </div>
        </>
    )
}

export default newCard