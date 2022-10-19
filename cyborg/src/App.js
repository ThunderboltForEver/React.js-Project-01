import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container/Container';
import { Header, Footer } from './sections/index';
import { Home, Browse, Streams } from './Pages/index';
import './App.css';

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Browse' element={<Browse />} />
                        <Route path='/Streams' element={<Streams />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}
export default App;