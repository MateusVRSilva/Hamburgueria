import { NavLink } from 'react-router-dom'
import { NavBar } from "../../Components/NavBar"
import { Footer } from "../../Components/Footer"
import Foto from '../../assets/Hamburguer2.jpg'
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
                    O Melhor Hambúrguer Da Sua Vida
                </h1>
                <span>
                   
                   Melhor que Hambúrguer,é o Combo de Hambúrguer com Batata Frita
                </span>
                <span>Afinal, Felicidade e Hambúrguer terem 10 letras não pode ser coincidência!</span>
                       
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

