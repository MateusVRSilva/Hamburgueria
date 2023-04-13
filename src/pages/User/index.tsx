import ImgUser from "../../assets/UserImg.png"
import { NavLink } from 'react-router-dom';
import  {House, BookOpen, User , SignIn , ShoppingCart, PencilSimpleLine} from '@phosphor-icons/react';

import {
    ArticleUser,
    ContainerProfile,
    UserName,
    ArticleHistorico,
    ArticleDados,
    ContainerDados,
    NavUser,
    ContainerGeral,
} from './style'

export const UserProfile = () => {

return(



    <>
<ContainerGeral>




    <NavUser>

<nav>

<NavLink to="/" title="#">  <House size={25} color="#fff0f0" /> <span>inicio</span></NavLink>
<NavLink to="/cardapio" title="cardapio"> <BookOpen size={25} color="#fff0f0" /><span>Cardapio</span></NavLink>
<NavLink to="/carrinho" title="#"> <ShoppingCart size={25} color="#fff0f0" /><span>carrinho</span> </NavLink>


</nav>


    </NavUser>

<ContainerProfile>


 <ArticleUser>
<img src={ImgUser} alt="" />

<UserName>

    <h2>Nome do Usuario</h2>
    <span>Cliente</span>
</UserName>

 
    </ArticleUser>




   <ArticleDados>
    <div>

<h2>Dados Pessoais</h2>

<button><PencilSimpleLine size={32} color="#000" /></button>

    </div>



<ContainerDados>


<div>

    <h5>  Nome</h5>
     <p>  Mateus</p> 
</div>

<div>

    <h5>  Email</h5>
     <p>  mateus.@gmail.com</p> 
</div>

<div>

    <h5>  Senha</h5>
     <p>  ***************</p> 
</div>

<div>

    <h5>  Endereço</h5>
     <p> Rua Mateus tiradentes 345</p> 
</div>

<div>

    <h5>  Telefone</h5>
     <p>  (43) 99-12345678</p> 
</div>

</ContainerDados>



    </ArticleDados>


    <ArticleHistorico>

<h2> Historico de pedidos </h2>

<span>pedido 1</span>
<span>pedido 2</span>
<span>pedido 3</span>

    </ArticleHistorico>


</ContainerProfile>
   


 


    </ContainerGeral>
    
    </>
)


}