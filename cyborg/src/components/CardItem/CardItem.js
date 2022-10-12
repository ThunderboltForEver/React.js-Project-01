import './CardItem.css';
import { FaStar, FaDownload } from 'react-icons/fa';

const CardItem = (props) => {
    return (
        <>

            <div className='card-wrapper'>
                <img className='Most-Popular-item-image' src={props.image} alt='' />
                <div className='Most-Popular-item-content'>
                    <h4 className='Most-Popular-item-title'>
                        {props.title} <br />
                        <span>{props.subtitle}</span>
                    </h4>
                    <ul>
                        <li><span style={{ color: 'yellow', padding: '5px' }}><FaStar /></span><span>{props.rates}</span></li>
                        <li><span style={{ color: '#ec6090', padding: '2px' }}><FaDownload /></span><span>{props.downloads}</span></li>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default CardItem;