import { NavLink } from 'react-router-dom'
import { NavBar } from "../../Components/NavBar"
import { Footer } from "../../Components/Footer"
import Foto from '../../assets/article.png'
import {Tiltle,
    BtnMore,
    ArticleFood,
  
} from './style'

export function Home  () {
    return(
        <>
        <NavBar/>
        <div> 
            <Tiltle> 
                <h1>
                    O Melhor Hamburguer Da Sua Vida
                </h1>
                <span>
                   
                   Melhor que Hamburguer,é o Combo de Hamburguer com Batata Frita
                </span>
                <span>Afinal Felicidade e Haburguer terem 10 letra não pode ser conhecidencia!</span>
                       
            </Tiltle>
          <BtnMore>
       
        <NavLink to="/cardapio" title="cardapio"> <button ><span> Conhecer</span></button> </NavLink>

          </BtnMore>

<ArticleFood>
    <article><img src={Foto} alt="" /></article>
    <article><img src={Foto} alt="" /></article>
    <article><img src={Foto} alt="" /></article>
</ArticleFood>
          
        </div>
        <Footer/>
        </>
    )
}

