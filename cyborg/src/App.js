import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import { Header, Footer } from "./sections/index";
import { Home, Browse, Streams, Details , Profile} from "./Pages/index";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Browse" element={<Browse />} />
            <Route path="/Streams" element={<Streams />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};
export default App;
