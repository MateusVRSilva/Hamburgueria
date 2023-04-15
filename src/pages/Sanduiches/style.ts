import { Article } from "@phosphor-icons/react";
import styled from "styled-components";

export const ContainerBurger = styled.div`

display:flex;

background-color:var(--bege);

@media  (max-width: 768px) {
    flex-direction:column;
}

a{
height:30px;
    display:flex;
    margin:20px;
    text-decoration:none;
    color:#000;

    @media  (max-width: 768px) {
   
    padding-bottom:80px;
}

 
 &:hover{

    color:var(--vermelho);
 }
    span{

        font-size:25px;
        margin-left:15px;
    }
}


`

export const ArticleBurger = styled.div`
display:flex;
margin:130px;

@media (max-width: 768px){
    flex-direction:column;
    margin:0px;
div{


    img{

@media  (max-width: 768px) {
    width:400px;
}
        
    }
}
 
}

`

export const Descricao = styled.div`
padding-left:250px;
padding-bottom:60px;

@media  (max-width: 768px) {
   padding:10px 20px 30px 20px;
}



h2{
font-size:50px;
padding-bottom:40px;


@media  (max-width: 768px) {
    width:100%;
   padding:0px 0px 40px 0px;
   text-align:center;
   font-size:40px;
}

}

span{

    font-size:20px;

}


`

export const BtnComprar = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-left:150px;


@media  (max-width: 768px) {
    width:100%;
   padding:0px 0px 30px 0px ;
}
button{
width:450px;
height:60px;
font-size:20px;
background-color:var(--vermelho);
border:none;
border-radius:10px;
color:#fff;

@media  (max-width: 768px) {
    width:80%;
  
}




}

`
