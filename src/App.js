import "./App.scss";
import Header from "./components/header/Header";
import Adresse from "./components/adresse/Adresse";
import Footer from "./components/footer/Footer";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <Adresse />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
