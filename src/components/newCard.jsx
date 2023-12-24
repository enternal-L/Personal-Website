import './newCard.css'

function newCard(){
    return(
        <>
            <div className = 'card-container'>
                <div className='card'>
                    <img className = 'card-img' src = 'http://localhost:5173/mrover.jpg'></img>
                    <div className = 'card-body'></div>
                </div>
            </div>
        </>
    )
}

export default newCard