import styled from 'styled-components'

export const ContainerCardapio = styled.div`

display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
    margin:20px;


    @media  (max-width: 768px) {
    

    padding:0px;
    margin:30px 0px 30px 17px;
    
    }
    
`

export const ImgBurger = styled.div`

img{

background-color:var(--bege);
    width: 350px;
   
   
}
`

export const ContainerBurger = styled.div`

border-radius:10px;
border: 2px solid var(--bege);
background-color:#fff;
    align-items: flex-start;
    justify-content: space-between;

    transition: box-shadow 0.3s;

    
    &:hover {
        box-shadow: 1px 5px 29px -13px rgba(0, 0, 0, 0.25);
    }



   a{ text-decoration:none;}

`

export const Content = styled.div`

h5{  

    font-size:20px;
    padding:10px;
    display:flex;
    align-items:center;
justify-content:center;
text-decoration:none;
color:#000;

}
`