import MainButton from '../MainButton/MainButton';
import './YourGamingItem.css';

const YourGamingItem = (props) => {

    return (
        <>
            <div className='your-gaming-item'>
                <div className='game-name'>
                    <img src={props.image} alt='' />
                    <ul>
                        <li><h4>{props.title}</h4><span>{props.subtitle}</span></li>
                    </ul>
                </div>
                <ul className='your-gaming-ul'>
                    <li><h4>{props.DateTitle}</h4><span>{props.DateNumber}</span></li>
                    <li><h4>{props.HoursTitle}</h4><span>{props.HoursNumber}</span></li>
                    <li><h4>{props.statusTitle}</h4><span>{props.statusValue}</span></li>
                </ul>
                <div className='your-gaming-button'>
                    <MainButton LinkTo = '/#'>Download</MainButton>
                </div>
            </div>
            <hr />
        </>
    )
}
export default YourGamingItem;