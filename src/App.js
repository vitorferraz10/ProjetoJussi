import { Container } from "./globalStyled";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Home />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
