import styled from 'styled-components'

export const Tiltle = styled.div`

padding-top:6.25rem;

h1{
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:1.875rem;
    font-size:4.0625rem;



    @media  (max-width: 768px)  {
      
       font-size:37px;
       text-align:center;
    }

}

span{
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5625rem;


    @media  (max-width: 768px)  {
  
       font-size:20px;
       text-align:center;
    }
}

`

export const BtnMore = styled.div`
 display:flex;
    align-items:center;
    justify-content:center;
    padding-top:1.875rem;




    @media  (max-width: 768px)  {
       padding-bottom:70px;
    }

    button{
        padding:20px 30px 20px 30px;
        background-color:var(--vermelho);
        color:#fff;
        border-radius:.625rem;
        border:none;
        font-size:1.25rem; 


    }
         
`

export const ArticleFood = styled.div`

    display: flex;
    justify-content:center;
    flex-wrap: wrap;

`
export const FoodImg = styled.article`

padding:1.875rem;

img{
    width:31.25rem;
}

`

export const FoodImgMin = styled.article`

padding-top:200px;


@media  (max-width: 768px)  {
       padding-top:0px;
    }

img{
    width:31.25rem;
}

`

