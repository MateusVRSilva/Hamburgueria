import Burger1 from '../../../assets/hamburguer1.png'
import { NavLink } from 'react-router-dom'
import {
    ImgBurger,
    ContainerBurger,
    ContainerCardapio,
    Content,
    Title
} from './style'

export const CardsBurger = () =>{

    return(

        <>
<Title>
    <h2>Hamburguers</h2>
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