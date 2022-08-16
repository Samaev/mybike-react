import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
