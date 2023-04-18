import Burger1 from '../../../assets/hamburguer1.png'
import { NavLink, useNavigate, useNavigation, Link } from 'react-router-dom'
import {
    ImgBurger,
    ContainerBurger,
    ContainerCardapio,
    Content,
} from './style'

interface PropsSanduiche{
    id: number;
    nome: string;
    descricao: string;
    valor: number;
}

export const CardsBurger = ({id, nome, descricao, valor}:PropsSanduiche) =>{ console.log(nome)
    const navigation = useNavigate()
function handleGoToProduct () {
navigation('/sanduiche')
}
    return(

        <>


    <ContainerCardapio>
    <ContainerBurger>
            <Link to={{pathname:'/sanduiche' }} state={{produto:{id, nome, descricao, valor}}} title="sanduiche">
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