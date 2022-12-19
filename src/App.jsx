import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <body>
        <Main />
      </body>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
