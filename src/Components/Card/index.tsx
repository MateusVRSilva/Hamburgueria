import Burger1 from '../../assets/Hamburguer1.png'
import { NavLink } from 'react-router-dom'
import {
    ImgBurger,
    ContainerBurger,
    Title,
    ContainerCardapio,
    Content,
} from './style'

export const Cards = () =>{

    return(

        <>
        <Title> 
            <h2>Cardapio</h2>

    </Title>

    <ContainerCardapio>
    <ContainerBurger>
            <NavLink to="/sanduiche" title="sanduiche">
               <ImgBurger>
                <img src={Burger1} alt=""  />
               </ImgBurger>

               <Content>
                <h5> Hamburger</h5>
               </Content>
            </NavLink>
        </ContainerBurger>            
    
      

    </ContainerCardapio>
        </>
    )
}