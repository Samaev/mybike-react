import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import "./styles/main.scss";
import "floc-off";

function App() {
  return (
    <div className="App body">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
