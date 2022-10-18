import TopDownloadedImage1 from '../../assests/images/game-01.jpg';
import TopDownloadedImage2 from '../../assests/images/game-02.jpg';
import TopDownloadedImage3 from '../../assests/images/game-03.jpg';
import TopDownloadedItem  from '../../components/TopDownloadedItem/TopDownloadedItem';

const TopDownloadedData1 = [
    {id:'1',TopDownloadedImage: TopDownloadedImage1,title: 'Fortnite',subtitle: 'Sandbox',rates:'4.9',downloads:'2.2M'},
    {id:'2',TopDownloadedImage: TopDownloadedImage2,title: 'CS-GO',subtitle: 'Legendary',rates:'4.9',downloads:'2.2M'},
    {id:'3',TopDownloadedImage: TopDownloadedImage3,title: 'PubG',subtitle: 'Battle Royale',rates:'4.9',downloads:'2.2M'},
]
const TopDownloadedData = TopDownloadedData1.map((item) => {
    return (
      <TopDownloadedItem
        key={item.id}
        image={item.TopDownloadedImage}
        title={item.title}
        subtitle={item.subtitle}
        rates={item.rates}
        downloads={item.downloads}
      />
    );
  });
export default TopDownloadedData;