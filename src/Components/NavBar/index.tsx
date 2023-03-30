import { NavLink } from 'react-router-dom';
import LogoPng from '../../assets/LogoBurger.png';
import  {House, BookOpen, Hamburger, UserSquare} from '@phosphor-icons/react';
import {
    HeaderNav,
    ContentLinks,
    ContentLogin,
} from './style';

export const NavBar = () => {
    return(
        <>
        {/* <Header>
            <span>USD</span>
            <span>FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28. </span>
            <span>Support</span>
        </Header> */}
    <HeaderNav>
        <NavLink to="/" title="Home"><img src={LogoPng} sizes="10"/></NavLink>
       
        <ContentLinks>
       <nav>
        <NavLink to="/" title="home"> <House size={25} color="#fff0f0" /><span>Inicio</span></NavLink>
        <NavLink to="/cardapio" title="cardapio"> <BookOpen size={25} color="#fff0f0" /><span>Cardapio</span></NavLink>
        <NavLink to="/combos" title="combos"> <Hamburger size={25} color="#fff0f0" /><span>Combos</span></NavLink>
       </nav>
       </ContentLinks>
       <ContentLogin>
        <NavLink to="/login" title="Shop"> <UserSquare size={25} color="#fff0f0" /><span>Login</span></NavLink>
       </ContentLogin>
    </HeaderNav>
    </>
    )
}