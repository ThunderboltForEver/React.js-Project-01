import './YourGaming.css';
import YourGamingItemData from '../../components/YourGamingItemData/YourGamingItemData';
import YourGamingItem from '../../components/YourGamingItem/YourGamingItem';

const YourGaming = () => {

    const YourGamingData = YourGamingItemData.map((data) =>{
        return (
            <YourGamingItem image = {data.image} title = {data.title} subtitle = {data.statusTitle} DateTitle = {data.DateTitle} DateNumber = {data.DateNumber} HoursTitle = {data.HoursTitle} HoursNumber = {data.HoursNumber} statusTitle = {data.statusTitle} statusValue = {data.statusValue}/>
        );
    })
    return (
        <>
            <div className='your-gaming-items'>
                {YourGamingData}
            </div>
        </>
    );
}
export default YourGaming;