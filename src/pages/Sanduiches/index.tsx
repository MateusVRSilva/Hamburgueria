
import BurgerImg from "../../assets/hamburguer1.png"
import { NavLink, useLocation } from 'react-router-dom'
import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavBar"
import { ArrowUUpLeft } from "@phosphor-icons/react"
import {
    ContainerBurger,
    ArticleBurger,
    Descricao,
    BtnComprar,

} from './style'
import { useEffect, useState } from "react"


interface PropsSanduiche{
    id: number;
    nome: string;
    descricao: string;
    valor: number;
}




export const Sanduiches = ({id, nome, descricao, valor}:PropsSanduiche) => {
    let {state} = useLocation()
    console.log(state)
const fazerPedido = () =>{
        localStorage.setItem('nome', JSON.stringify(state.produto));
    }

   

    return(


        <>

        <NavBar/>
       

             <ContainerBurger>

                <NavLink to="/cardapio" title="voltar"> <ArrowUUpLeft size={32} color="#000" /><span>Voltar</span></NavLink>

                 <ArticleBurger>

                   <div>
                             <img src={BurgerImg} alt="" />
                   </div>
                            <div>
                   <Descricao>

                    
                       <h2>{state.produto.nome}</h2> 
                      <span>{state.produto.descricao}</span> 
                  
             
                  



                        
                   </Descricao>

                  <BtnComprar>
                    <button onClick={fazerPedido} >Adicionar ao Carrinho</button>
                   </BtnComprar>

                              </div>
                           </ArticleBurger>
             </ContainerBurger>


        

        <Footer/>
        
        </>
    )
}