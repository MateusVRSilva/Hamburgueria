import { NavLink } from 'react-router-dom';
import LogoPng from '../../assets/LogoBurger.png';
import  {House, BookOpen, User , SignIn , ShoppingCart} from '@phosphor-icons/react';
import {
    HeaderNav,
    ContentLinks,
    ContentLogin,
} from './style';

export const NavBar = () => {
    return(
        <>
    <HeaderNav>
      
       
        <ContentLinks>
              <NavLink to="/" title="Home"><img src={LogoPng} sizes="10"/></NavLink>
       <nav>
        <NavLink to="/" title="home"> <House size={25} color="#fff0f0" /><span>Inicio</span></NavLink>
        <NavLink to="/cardapio" title="cardapio"> <BookOpen size={25} color="#fff0f0" /><span>Cardapio</span></NavLink>
        <NavLink to="/profile" title="combos"> <User  size={25} color="#fff0f0"  /><span>Perfil</span></NavLink>
       </nav>
       </ContentLinks>
       <ContentLogin> 
        <NavLink to="/carrinho" title="Shop"> <ShoppingCart size={25} color="#fff0f0" /><span>Carrinho</span></NavLink>
        <NavLink to="/register" title="Shop"> <SignIn  size={25} color="#fff0f0" /><span>registre-se</span></NavLink>
       
       </ContentLogin>
    </HeaderNav>
    </>
    )
}