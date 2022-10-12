import './App.css';
import { Container, SectionWrapper } from './components/index';
import { Header, Hero, Footer, MostPopular } from './sections/index';
import YourGaming from './sections/YourGaming/YourGaming';

const App = () => {
    return (
        <>
            <Header />
            <Container>
                <Hero />
                <SectionWrapper title="Most Popular" nextTitle="Right Now">
                    <MostPopular />
                </SectionWrapper>
                <SectionWrapper title="Your Gaming" nextTitle="Library">
                    <YourGaming />
                </SectionWrapper>
            </Container>
            <Footer />
        </>
    )
}
export default App;