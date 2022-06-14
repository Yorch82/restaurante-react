import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ContactForm from "./components/ContactForm/ContactForm"
import AboutUs from "./components/AboutUs/AboutUs"
import { BrowserRouter, Route, Routes } from "react-router-dom"

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
    {
      id:4,
      name:'Sushi',
      description:'Comida japonesa estilo Japeruvian',
      price:50,
      image:'https://7televalencia.com/wp-content/uploads/2019/04/sushi-e1556275361391.jpg'
    },
  ]
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>     
        <Route path="/" element={<Home platos={dishes} />} />
        <Route path="/about" element={<AboutUs />} />             
        <Route path="/contact" element={<ContactForm />} />
      </Routes>      
      </BrowserRouter>     
    </div>
  );
}

export default App;
