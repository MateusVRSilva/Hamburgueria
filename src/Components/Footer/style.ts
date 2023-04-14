import styled from 'styled-components'


export const NavFooter = styled.footer`
background-color:#502314;


`


export const ImgFooter = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 padding-top:3.125rem;
`

export const ArticleFooter = styled.div`

 align-items:center;
 justify-content:center;
`

export const ArticleFooterLink = styled.article`

display:flex;
 align-items:center;
 justify-content:center;
 padding-bottom:1.25rem;
 padding-top:1.25rem;

 @media  (max-width: 768px){
padding:0px;
flex-direction:column;

}

 
 
 a{
    color:#fff;
    padding:.625rem;
    font-size:1.25rem;
    text-decoration:none;
    font-weight:bold;

 }
`
export const ArticleFooterImport = styled.article`
 
 display:flex;
 align-items:center;
 justify-content:center;
 padding-bottom:1.875rem;


 @media  (max-width: 768px){

flex-direction:column;

}
 a{
    color:#fff;
    font-size:15px;
    text-decoration:none;
    padding:.625rem;
 }
 

`

