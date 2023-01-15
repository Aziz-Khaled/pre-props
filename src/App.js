import './App.css';

/* lien css pour react-boostrap*/
import 'bootstrap/dist/css/bootstrap.min.css';

/* importation de fichier navbar.js*/
import NavBar from './Component/navBar'

/* importation de data (la constante dans ce fichier) en fichier data.js*/
import {Coffee} from './Component/data'

/* importation de fichier cardList.js*/
import CardsList from'./Component/cardsList'

/* importation de useState de react*/
import {useState} from 'react'

import {Routes , Route} from 'react-router-dom'

/* */
import Detail from './Component/detail'



function App() {
/* constante de useState : */
const [cardsList , setCardsList] = useState (Coffee)



  return (
    <div className="App">

      <NavBar/>
            {/*cardsList = {cardsList} ==  variable = {getter of the useState}*/}
<Routes>

<Route   path ="/"    element = {<CardsList cardsList={cardsList}/> } />


<Route   path ="/Details/:id"    element = {<Detail cardsList={cardsList} /> } />

</Routes>


    </div>
  );
}

export default App;
