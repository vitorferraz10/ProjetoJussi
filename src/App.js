import { Container } from "./globalStyled";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import { SearchContextProvider } from "./components/context/useFetch";

function App() {
  return (
    <div className="App">
      <Container>
        <SearchContextProvider>
          <Header />
          <Home />
          <Footer />
        </SearchContextProvider>
      </Container>
    </div>
  );
}

export default App;
