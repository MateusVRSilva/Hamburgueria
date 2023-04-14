import styled from 'styled-components'



export const HeaderNav = styled.header`
      display: flex;
      align-items: center;
      box-shadow: 0px 4px 3px -3px black;
      justify-content: space-between;



    background-color: var(--vermelho);



    @media (max-width: 768px){

display:flex;
align-items: center;
justify-content:center;
      img{

        display:none;

        
      }
    }



  
`


export const ContentLinks = styled.div`

    display: flex;
    align-items: center;
    gap: 3.5rem;
    padding-left:80px;


@media (max-width:768px) {
padding-right:40px;
  padding-left:0px;
  
}



nav{
     display: flex;   
    align-items: center;
    gap: 3.125rem;
 

    }


 a {
    display: flex;
     align-items: center;       
    font-size: 1.375rem;        
    line-height: 1.3125rem;        
    text-decoration: none;        
    color: #fff;


    
    span{

      margin-left:20px;



      @media (max-width:768px) {
        gap:0px;
    padding-left:0px;
      display:none;
       opacity:0;


      
        
      }
    }
           
 }

`

export const ContentLogin = styled.div`
a{
    display: inline-flex;
    align-items:center;
    padding-right:80px;
     font-size:1.375rem; 
     line-height: 1.3125rem;
     text-decoration: none;
       color: #fff;




       @media (max-width:768px) {
margin:15px;
padding-right:0px;

}

       span{

margin-left:20px;

@media (max-width:768px) {

display:none;

}
}
   
}

`


