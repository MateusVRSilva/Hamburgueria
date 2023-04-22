import Burger1 from '../../../assets/Coca-cola.png'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import {
    ImgBurger,
    ContainerBurger,
    ContainerCardapio,
    Content,
} from './style'

interface PropsSanduiche {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
}

export const CardsBebida = ({ id, nome, descricao, valor }: PropsSanduiche) =>{
    const navigation = useNavigate()
    function handleGoToProduct() {
        navigation('/sanduiche')
    }
    return(

        <>
    <ContainerCardapio>
    <ContainerBurger>
    <Link to={{ pathname: '/bebidas' }} state={{ produto: { id, nome, descricao, valor } }} title="sanduiche">
               <ImgBurger>
                <img src={Burger1} alt=""  />
               </ImgBurger>

               <Content>
                <h5> {nome}</h5>
               </Content>
            </Link>
        </ContainerBurger>          
      
        
          
    
      

    </ContainerCardapio>
        </>
    )
}