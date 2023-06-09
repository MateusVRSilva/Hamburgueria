import styled from 'styled-components'


export const BodyCarrinho = styled.div`

display:flex;
padding-bottom:50px;

@media (max-width: 768px){
    flex-direction:column;
}

`

export const BodyPedido = styled.div`
 
 margin:50px 0px 0px 150px;

 @media  (max-width: 768px) {
    
    margin:30px 0px 0px 20px;
        
        }



`

export const TituloPedido = styled.div`

padding-bottom:50px;



@media  (max-width: 768px) {
    
    padding-bottom:20px;
        
        }

 h2{
    font-size:60px;

    
@media  (max-width: 768px) {
    
  font-size:40px;
        
        }
 }
 span{
    font-size:20px;


    @media  (max-width: 768px) {
    
    font-size:20px;
          
          }
  

    a{
          text-decoration:none;
    }
 }
`



export const BodyBurger = styled.div`

background-color:#ececec;
width:700px;
padding-bottom:20px;
border-radius:10px;


transition: box-shadow 0.3s;

@media  (max-width: 768px){


width:350px;

    }

    
&:hover {
    box-shadow: 1px 5px 29px -13px rgba(0, 0, 0, 0.25);


}

`

export const ResumoPedido = styled.div`
 


`




export const TituloResumo = styled.div`

margin:50px 0px 0px 150px;

 h2{
    font-size:60px;

    @media  (max-width: 768px) {
    
    font-size:40px;
          
          }
 }



 @media  (max-width: 768px) {
    
    margin-left:25px;
        
        }
`

export const ArticleValor = styled.div`

background-color:#ececec;
width:600px;
margin:110px 0px 0px 140px;
padding:50px;
border-radius:10px;

transition: box-shadow 0.3s;

    
&:hover {
    box-shadow: 1px 5px 29px -13px rgba(0, 0, 0, 0.25);
}




@media  (max-width: 768px) {
 padding:20px;
 margin:40px 0px 0px 20px;
   
    width:350px;
        
        }
`


export const ResumoValor = styled.div`

border-bottom:2px solid #000;
`

export const Titulos = styled.div`
display:flex;
justify-content: space-between;
margin:20px;
font-size:20px;



`

export const TotalValor = styled.div`
margin:20px;
 display:flex;
    justify-content: space-between;
    font-size:20px;


`
export const Buttom = styled.div`


button{
width:500px;
height:60px;
font-size:20px;
background-color:var(--vermelho);
border:none;
border-radius:10px;
color:#fff;

@media  (max-width: 768px){


    width:300px;

}
}

`


