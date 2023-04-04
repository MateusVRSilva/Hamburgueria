import Burger1 from '../../../assets/Coca-cola.png'
import { NavLink } from 'react-router-dom'
import {
    ImgBurger,
    ContainerBurger,
    ContainerCardapio,
    Content,
    Title,
} from './style'

export const CardsBebida = () =>{

    return(

        <>
<Title>
    <h2>Bebidas</h2>
</Title>
    <ContainerCardapio>
    <ContainerBurger>
            <NavLink to="/bebidas" title="bebidas">
               <ImgBurger>
                <img src={Burger1} alt=""  />
               </ImgBurger>

               <Content>
                <h5> Refrigerante</h5>
               </Content>
            </NavLink>
        </ContainerBurger>            
    
      

    </ContainerCardapio>
        </>
    )
}