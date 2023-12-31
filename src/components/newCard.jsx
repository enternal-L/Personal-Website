import { Link } from 'react-router-dom'

function newCard(props){
    return(
        <>
            <div className='card box'>
                    <Link className = 'card-wrapper' to = {props.path} target='_blank'>
                        <div className = 'card-body box'>
                                <h1 className='card-title'>{props.title}</h1>
                                <p className='card-sub-title'>{props.subtitle}</p>
                                <p className='card-info margin-ing1'>{props.desc1}</p>
                                <p className='card-info margin-ing2'>{props.desc2}</p>
                        </div>
                        <img className = 'card-img' src = {props.src}></img>
                    </Link>
            </div>
        </>
    )
}

export default newCard