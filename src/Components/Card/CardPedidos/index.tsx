import BurgerPng from "../../../assets/hamburguer1.png"

import {
    BugerImg,
    ArticlePedido,
    TextoPedido,
} from "./style"




export const CardPedido = () => {
    return(

        <>
          <ArticlePedido>
         <BugerImg>
        <img src={BurgerPng} alt="" />

    </BugerImg>
<TextoPedido>
    <p>Hamburger</p>
    <p>R$:19,90</p>
</TextoPedido>


    </ArticlePedido>
    
        
        </>
    )
}