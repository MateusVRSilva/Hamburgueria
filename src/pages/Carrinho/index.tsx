import { NavLink } from 'react-router-dom'
import { NavBar } from "../../Components/NavBar"
import { Footer } from "../../Components/Footer"
import BurgerPng from "../../assets/hamburguer1.png"

import {
    BugerImg,
    BodyCarrinho,
    BodyPedido,
    TituloPedido,
    ArticlePedido,
    TextoPedido,
    BodyBurger,
    ResumoPedido,
    TituloResumo,
    ResumoValor,
    ArticleValor,
    Titulos,
    TotalValor,
    Buttom
} from "./style"


export const Carrinho = () => {
    return(

<>
<NavBar/>


<BodyCarrinho>
<BodyPedido>
    <TituloPedido>
    <h2>Seus Pedidos </h2>

    <span>Ainda não terminou seus pedidos?   <NavLink to="/cardapio" title='voltar ao cardapio'>Volte as Compras</NavLink> </span>
</TituloPedido>

<BodyBurger>
    

    <ArticlePedido>
         <BugerImg>
        <img src={BurgerPng} alt="" />

    </BugerImg>
<TextoPedido>
    <p>Hamburger</p>
    <p>R$:19,90</p>
</TextoPedido>


    </ArticlePedido>

    </BodyBurger>
</BodyPedido>

<ResumoPedido>

    <TituloResumo>
       <h2>ResumoPedido</h2>
    </TituloResumo>

<ArticleValor>
    <ResumoValor>
        <Titulos>
        <p>SubTotal </p>
          <p>R$:19,90</p>
</Titulos>
<Titulos>
        <p>Frete: </p>
        <p>R$ XXX</p> 
        </Titulos>
    </ResumoValor>

    <TotalValor> 
        <p>Total</p>
        <p> R$19,90</p>

       
    </TotalValor>
<Buttom>
    <NavLink to="/" title='Fazer Pedido'>  <button>Finalizar Pedido</button></NavLink>
</Buttom>
</ArticleValor>

</ResumoPedido>


</BodyCarrinho>
<Footer/>


</>

    )
}