import { Link } from 'react-router-dom'

function newCard(props){
    return(
        <>
            <li className='card box'>
                <Link to = {props.path} target='_blank'>
                    <div className = 'card-body box'>
                            <h1 className='card-title'>{props.title}</h1>
                            <p className='card-sub-title'>{props.subtitle}</p>
                            <p className='card-info'>{props.desc}</p>
                        </div>
                    <img className = 'card-img' src = {props.src}></img>
                </Link>
            </li>
        </>
    )
}

export default newCard