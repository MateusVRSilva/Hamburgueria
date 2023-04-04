import { CardsBurger } from "../../Components/Card/CardBurger";
import { CardsBebida } from "../../Components/Card/CardBebida";
import { NavBar } from "../../Components/NavBar"
import { Footer } from "../../Components/Footer"
import {
    Title,
} from './style'


export function Cardapio () {

    return (

     <>

     <NavBar/>

     <Title> 
            <h1>Cardapio</h1>

    </Title>
    
     <CardsBurger/>

    <CardsBebida/>


     <Footer/>
     </>
    
    )
}