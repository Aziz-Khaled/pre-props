import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/navBar'
import {Coffee} from './Component/data'
import CardsList from'./Component/cardsList'
import {useState} from 'react'
function App() {
 // console.log (Coffee)
 const [cardsList , setCardsList] = useState (Coffee)
 console.log (cardsList)
  return (
    <div className="App">
     <NavBar/>
{/* cardsList = {cardsList} ==  variable = {getter of the useState}*/}
     <CardsList cardsList = {cardsList}  />
  

    </div>
  );
}

export default App;
