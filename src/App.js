import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Coffee from "./components/Coffee/coffee";
import Dessert from "./components/Dessert/dessert";
import About from "./components/About/about";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Coffee/>
      <Dessert/>
    </div>
  );
}

export default App;
