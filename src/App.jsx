import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
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
