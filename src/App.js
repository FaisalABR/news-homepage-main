import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Aside from "./components/Aside/Aside";
import Achieve from "./components/Achieve/Achieve";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Hero />
        <Aside />
        <Achieve />
      </div>
    </div>
  );
}

export default App;
