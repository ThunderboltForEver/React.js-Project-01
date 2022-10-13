import './MostPopular.css';
import CardItem from '../../components/CardItem/CardItem';
import MostPopularData from '../../Data/MostPopularData/MostPopularData';

const MostPopular = () => {

    const cards = MostPopularData.map((card) => {
        return (
                <CardItem key={card.id} image={card.image} title={card.title} subtitle={card.subtitle} rates={card.rates} downloads={card.downloads} />
            
        );
    })
    return (
        <>
            <div className='cards-holder'>
                {cards}
            </div>
        </>
    )
}
export default MostPopular;