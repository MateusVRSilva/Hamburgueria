import { NavLink } from 'react-router-dom'
import LogoPng from '../../assets/LogoBurger.png'
import {
    ImgFooter,
    NavFooter,
    ArticleFooter,
    ArticleFooterLink,
    ArticleFooterImport
} from './style'

export const Footer = () => {
    return(
        <>
        <NavFooter>
        <ImgFooter>
<img src={LogoPng} alt="" />
        </ImgFooter>
         <ArticleFooter>
 <ArticleFooterLink>
    <NavLink to="/" title="">Sobre Nós</NavLink>
    <NavLink to="/" title="">Trabalhe conosco</NavLink>
    <NavLink to="/" title="">Fale conosco</NavLink>
    <NavLink to="/" title="">Seja um Franqueado</NavLink>
    <NavLink to="/" title="">FAQ</NavLink>
    
 </ArticleFooterLink>

 <ArticleFooterImport>
    <NavLink to= "/" title="">Diretrizes de Privacidade de Dados</NavLink>
    <NavLink to="/" title="">Regulamento do Clube </NavLink>
    <NavLink to="/" title="">Política de Publicidade Infantil</NavLink>
    <NavLink to="/" title="">Informações Legais</NavLink>
    <NavLink to="/" title="">Opções de Privacidade</NavLink>
 </ArticleFooterImport>

 </ArticleFooter>
 </NavFooter>
        
        </>
    )
}