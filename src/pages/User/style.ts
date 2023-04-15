import styled from "styled-components";



export const ContainerGeral = styled.div`
display:flex;
justify-content:space-between;
width:80%;



@media (max-width:768px){

  width:100%;
}
  



`



export const ContainerProfile = styled.div`
width:100%;
padding:40px;

@media (max-width:768px){

padding:15px;

}


`

export const ArticleUser = styled.div`

border-radius:30px;
border: 3px solid #a6ada7;
display:flex;
margin-bottom:40px;



img{
padding:20px;

}


`

export const UserName = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding-left:20px;
  

  h2{

    font-size:20px;
 
  }

  span{

font-size:20px;
  }
`



export const ArticleHistorico = styled.div`

border-radius:30px;
border: 3px solid #a6ada7;
margin-bottom:40px;
width:100%;
padding:20px;

h2{


    font-size:20px;
    padding-bottom:20px;
}


span{

 display:flex;
}
`

export const ArticleDados = styled.div`

padding:20px;
border-radius:30px;
border: 3px solid #a6ada7;
margin-bottom:40px;


div{


    display:flex;
    justify-content:space-between;

}
`

export const ContainerDados = styled.div`
display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    font-size:20px;

    div{

        margin:20px;
        display:flex;
        flex-direction:column;
        

    }




`

export const NavUser = styled.div`
background-color: var(--vermelho);
width:20%;
height:100vh;
font-size:20px;


@media (max-width: 768px) {


display:none;



}

nav{

display:flex;
flex-direction:column;





a{

    padding:20px;
    text-decoration:none;
    color:#fff;
    span{

    margin-left:20px;
    display:inline-flex;
   
    }
}



}

` 
