import styled from 'styled-components'


export const ContainerGeral = styled.body`

overflow-y: hidden;`


export const ImgLogin = styled.article`
-webkit-box-shadow: 20px 4px 31px -12px rgba(0,0,0,0.52);
-moz-box-shadow: 20px 4px 31px -12px rgba(0,0,0,0.52);
box-shadow: 20px 4px 31px -12px rgba(0,0,0,0.52);
width:70%;
`

export const ContainerLogin = styled.div`
display:flex;
height:100vh;



`


export const ArticleLogin = styled.article`
display:flex;
align-items:center;
justify-content:center;
background-color:#502314;
width:35%;





`

export const COntinerLogin = styled.div`
margin-left:60px;
  width:500px;
  height:650px;
  border:2px solid #000;
  border-radius:12%;
  -webkit-box-shadow: -4px 4px 35px 6px rgba(0,0,0,0.52);
-moz-box-shadow: -4px 4px 35px 6px rgba(0,0,0,0.52);
box-shadow: -4px 4px 35px 6px rgba(0,0,0,0.52);
background-color:#4f2011;

  img{
    display:flex;
align-items:center;
justify-content:center;
padding:30px 0px 10px 200px;
width:300px;

  }

  
`


export const FormLogin = styled.form`

color:#fff;
    display:flex;
    padding-top:0px;
align-items:center;
justify-content:center;
flex-direction:column;


h2{
    padding-bottom:30px;
}


div{
    display:flex;
justify-content:center;
flex-direction:column;
padding-bottom:25px;
}

label{
    display:flex;
font-size:20px;
padding-bottom:15px;


}


input{
    width:40vh;
    padding:15px 15px;
    
}
`


export const ContainerButton = styled.div`

display:flex;
justify-content:flex-end;
padding-right:170px;

button{
    padding:15px 45px 15px 45px;
    font-size:20px;
    color:#fff;
  
    border:none;
    background-color:var(--amarelo);
}
`

