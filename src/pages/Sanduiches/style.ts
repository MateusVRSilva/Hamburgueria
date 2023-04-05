import { Article } from "@phosphor-icons/react";
import styled from "styled-components";

export const ContainerBurger = styled.div`

display:flex;
background-color:var(--bege);


`

export const ArticleBurger = styled.div`
display:flex;
margin:130px;

@media (max-width: 768px){
    flex-direction:column;
 
}

`

export const Descricao = styled.div`
padding-left:250px;
padding-bottom:60px;

h2{
font-size:50px;
padding-bottom:40px;

}

span{

    font-size:20px;
}


`

export const BtnComprar = styled.div`
display:flex;
justify-content:center;
button{
width:450px;
height:60px;
font-size:20px;
background-color:var(--vermelho);
border:none;
border-radius:10px;
color:#fff;


}

`
