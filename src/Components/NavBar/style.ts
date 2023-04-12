import styled from 'styled-components'



export const HeaderNav = styled.header`
      display: flex;
      align-items: center;
      box-shadow: 0px 4px 3px -3px black;
      justify-content: space-between;



    background-color: var(--vermelho);



  
`


export const ContentLinks = styled.div`

    display: flex;
    align-items: center;
    gap: 3.5rem;
    padding-left:80px;

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

       span{

margin-left:20px;
}
   
}

`


