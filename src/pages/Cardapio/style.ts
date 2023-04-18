import styled from 'styled-components'

export const Title = styled.div`

font-size:30px;
padding:30px 0px 30px 160px;
display:flex;
justify-content:center;

@media  (max-width: 768px) {
    

padding:0px;

}


`
export const SubTitle = styled.div`

font-size:20px;
padding:30px 0px 30px 160px;


@media  (max-width: 768px) {
    

    padding:10px 0px 10px 20px;
    
    }


`

export const BurgerContainer = styled.div`

display:flex;
flex-wrap:wrap;
gap:1px;
align-items:center;

@media (min-width: 1440px) {
margin: 0px 0px 50px 140px;

}
`
