import { NavLink } from 'react-router-dom'
import { NavBar } from "../../Components/NavBar"
import { Footer } from "../../Components/Footer"
import Foto from '../../assets/article.png'
import BannerPrincipal from '../../assets/Hamburguer.jpg'
import {Tiltle,
    BtnMore,
    ArticleFood,
    FoodImg,
    FoodImgMin,
  
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
                <span>Afinal, Felicidade e Haburguer terem 10 letra não pode ser conhecidencia!</span>
                       
            </Tiltle>
          <BtnMore>
       
        <NavLink to="/cardapio" title="cardapio"> <button ><span> Conhecer</span></button> </NavLink>

          </BtnMore>

<ArticleFood>
    <FoodImgMin><img src={Foto} alt="" /></FoodImgMin>
    <FoodImg><img src={BannerPrincipal} alt="" /></FoodImg>
    <FoodImgMin><img src={Foto} alt="" /></FoodImgMin>
</ArticleFood>
          
        </div>
        <Footer/>
        </>
    )
}

