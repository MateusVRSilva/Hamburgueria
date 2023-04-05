
import BurgerImg from "../../assets/hamburguer1.png"
import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavBar"
import {
    ContainerBurger,
    ArticleBurger,
    Descricao,
    BtnComprar,

} from './style'

export const Sanduiches = () => {
    return(


        <>

        <NavBar/>
       

             <ContainerBurger>

                 <ArticleBurger>

                   <div>
                             <img src={BurgerImg} alt="" />
                   </div>
                            <div>
                   <Descricao>
                  
                    <h2>Hamburger de Frango</h2>
                    <span>Pão com gergelim, dois suculentos hambúrgueres de pura carne bovina, duas fatias de queijo derretido, duas fatias de picles, ketchup e mostarda. 
                        Todos esses ingredientes são cuidadosamente armazenados e preparados para você se deliciar com um sanduíche fresquinho e de alta qualidade.</span>
                   </Descricao>

                  <BtnComprar>
                    <button>Adicionar ao Carrinho</button>
                   </BtnComprar>

                              </div>
                           </ArticleBurger>
             </ContainerBurger>


        

        <Footer/>
        
        </>
    )
}