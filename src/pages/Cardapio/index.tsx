import { CardsBurger } from "../../Components/Card/CardBurger";
import { CardsBebida } from "../../Components/Card/CardBebida";
import { NavBar } from "../../Components/NavBar"
import { Footer } from "../../Components/Footer"
import {
    Title,
    SubTitle,
    BurgerContainer
} from './style'


const  mckPedidos = [
    {
    id: 0,
    nome: 'hamburger',
    descricao: 'Pão com gergelim, dois suculentos hambúrgueres de pura carne bovina, duas fatias de queijo derretido, duas fatias de picles, ketchup e mostarda. Todos esses ingredientes são cuidadosamente armazenados e preparados para você se deliciar com um sanduíche fresquinho e de alta qualidade.',
    valor: 19.90,
    },
    {
        id: 1,
        nome: 'hamburger bovino',
        descricao: 'Pão com gergelim, dois suculentos hambúrgueres de pura carne bovina, duas fatias de queijo derretido, duas fatias de picles, ketchup e mostarda. Todos esses ingredientes são cuidadosamente armazenados e preparados para você se deliciar com um sanduíche fresquinho e de alta qualidade.',
        valor: 19.90,
        },
        {
            id: 2,
            nome: 'hamburger de Frango',
            descricao: 'Pão com gergelim, dois suculentos hambúrgueres de pura carne bovina, duas fatias de queijo derretido, duas fatias de picles, ketchup e mostarda. Todos esses ingredientes são cuidadosamente armazenados e preparados para você se deliciar com um sanduíche fresquinho e de alta qualidade.',
            valor: 19.90,
            },
            
    
    ]

export function Cardapio () {

    return (

     <>

     <NavBar/>

     <Title> 
            <h1>Cardapio</h1>

    </Title>
    <div>
    <SubTitle>
    <h2>Hamburguers</h2>
</SubTitle>
<BurgerContainer>
           {mckPedidos.map(pedido => (<CardsBurger nome={pedido.nome} id={pedido.id} descricao={pedido.descricao} valor={pedido.valor}/>))}

</BurgerContainer>
    </div>
 

    <CardsBebida/>


     <Footer/>
     </>
    
    )
}