import { NavLink, useLocation } from 'react-router-dom'
import { NavBar } from "../../Components/NavBar"
import { Footer } from "../../Components/Footer"
import { CardPedido } from '../../Components/Card/CardPedidos'

import {
    BodyCarrinho,
    BodyPedido,
    TituloPedido,
    BodyBurger,
    ResumoPedido,
    TituloResumo,
    ResumoValor,
    ArticleValor,
    Titulos,
    TotalValor,
    Buttom
} from "./style"
import { useEffect, useState } from 'react'

interface pedidosUser{
    id:number;
    nome:string;
    descricao:string;
    valor:number;
}
export const Carrinho = ( {nome, valor,}: pedidosUser) => {
      const [pedidoUsar, setPedido] = useState<pedidosUser [] | undefined>()
    useEffect(() => {
        const fazerPedido = localStorage.getItem('@pedidos')
          if( fazerPedido ){
            setPedido(JSON.parse(fazerPedido))
          }
        console.log(fazerPedido)

},[])


const finalizarPedido = () => {
    localStorage.clear()
}
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
    
<div>

{pedidoUsar && pedidoUsar.map((carrinho, index) => (<CardPedido key={index} nome={carrinho.nome} id={carrinho.id} descricao={carrinho.descricao} valor={carrinho.valor}/> ))}

</div>

    </BodyBurger>
</BodyPedido>

<ResumoPedido>

    <TituloResumo>
       <h2>Resumo Do Pedido</h2>
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
    <NavLink to="/success" title='Fazer Pedido' onClick={finalizarPedido} >  <button>Finalizar Pedido</button></NavLink>
</Buttom>
</ArticleValor>

</ResumoPedido>

</BodyCarrinho>
<Footer/>


</>

    )
}
