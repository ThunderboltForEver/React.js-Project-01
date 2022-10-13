import './Home.css';
import { SectionWrapper } from '../../components/index';
import { Hero, MostPopular ,YourGaming} from '../../sections/index';


const Home = () => {
    return (
        <>
            <Hero />
            <SectionWrapper title="Most Popular" nextTitle="Right Now" ButtonValue='Discover Popular'>
                <MostPopular />
            </SectionWrapper>
            <SectionWrapper title="Your Gaming" nextTitle="Library" ButtonValue='View Your Library'>
                <YourGaming />
            </SectionWrapper>

        </>

    );
}
export default Home;