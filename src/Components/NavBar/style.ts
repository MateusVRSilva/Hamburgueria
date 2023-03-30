import styled from 'styled-components'



// export const Header = styled.div`

//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     color:#fff;
//     background-color: var(--vermelho);
//     padding:15px;

//     span{
//         padding:0px 80px;
//     }
 
// `

export const HeaderNav = styled.header`
      display: flex;
      align-items: center;
      box-shadow: 0px 4px 3px -3px black;


    background-color: var(--vermelho);


 img{
    padding-left: 145px ;
 }

  
`


export const ContentLinks = styled.div`

    display: flex;
    align-items: center;
    gap: 3.5rem;

nav{
     display: flex;   
    align-items: center;
    gap: 3.125rem;
    padding-left:80px;

    }


 a {
    display: flex;
     align-items: center;       
    font-size: 1.375rem;        
    line-height: 1.3125rem;        
    text-decoration: none;        
    color: #fff;        
           
 }

`

export const ContentLogin = styled.div`
a{
    display:flex;
    align-items:center;
    padding-left:56.25rem;
     font-size:1.375rem; 
     line-height: 1.3125rem;
     text-decoration: none;       
       color: #fff;                  
   
}

`


