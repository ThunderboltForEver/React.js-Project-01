import './Browse.css';
import { SectionWrapper } from '../../components/index';
import { MostPopular } from '../../sections/index';


const Home = () => {
    return (
        <>
            <SectionWrapper title="Most Popular" nextTitle="Right Now" ButtonValue='Discover Popular'>
                <MostPopular />
            </SectionWrapper>

        </>

    );
}
export default Home;