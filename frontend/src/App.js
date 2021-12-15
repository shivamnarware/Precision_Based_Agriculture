import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './App.css';
import MainCard from './Components/MainCard/MainCard';
import Fertilizers from './Components/Forms/Fertilizers';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <h1>lorem ipsum</h1>
      <MainCard />
      <Fertilizers />
      <Footer />
    </div>
  );
}

export default App;
