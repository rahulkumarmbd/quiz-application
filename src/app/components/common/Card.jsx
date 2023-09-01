import './card.css';

const Card = ({children}) => {
    
    if(!children) return null;

    return <div className='cardContainer'>{children}</div>
}

export default Card;