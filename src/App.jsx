import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  const dishes = [
    {
      id:1,
      name:'Paella Valenciana',
      description:'Auténtica paella valenciana',
      price:20,
      image:'https://entrenosotros.consum.es/public/Image/2019/3/paella1_Mediano.jpg'
    },
    {
      id:2,
      name:'TomaHawk Vaca Rubia Gallega',
      description:'Este es el plato 2',
      price:50,
      image:'https://unacarneasada.com/wp-content/uploads/tomahawk-steak.jpg'
    },
    {
      id:3,
      name:'Hamburguesa carne madurada',
      description:'La mejor burger de la ciudad',
      price:10,
      image:'https://www.hundredburgers.com/img/burger-hero.b2b9d524.jpg'
    },
  ]
  return (
    <div className="App">
      <Header />
      <Home platos={dishes}/>
    </div>
  );
}

export default App;
