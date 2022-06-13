import './Home.css'
import paella from '../../assets/paella.jpg'

const Home = (props) => {
    const dish = props.platos.map((dish) => {
        // console.log(dish)
        return (
            <div key={dish.id} className="card">
               <p>Nombre: {dish.name}</p>
               <p>Descripción: {dish.description}</p>
               <p>Precio: {dish.price} €</p>
               <img src={paella} alt="paella" className='image'/>

            </div>       
        )
    })
    return (
        <div className="cards-container">   
                <div className="container">   
                {dish}                 
                </div>    
        </div>
      );    
}

{/* // <div className='body'>
        //     <h4><b>Nuestros platos</b></h4>
            //  <div className="card">             
            //     <img src={paella} alt="paella" className='image'/>
            //     <div className="container">                    
                    
            //     </div>
        //     </div>    
          
        // </div> */}
export default Home