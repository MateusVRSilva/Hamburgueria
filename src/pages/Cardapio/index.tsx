import { CardsBurger } from "../../Components/Card/CardBurger";
import { CardsBebida } from "../../Components/Card/CardBebida";
import { NavBar } from "../../Components/NavBar"
import { Footer } from "../../Components/Footer"
import {
    Title,
    SubTitle,
    BurgerContainer
} from './style'


const mckHamburger = [
    {
        id: 0,
        nome: 'hamburger',
        descricao: 'Pão com gergelim, dois suculentos hambúrgueres de pura carne bovina, duas fatias de queijo derretido, duas fatias de picles, ketchup e mostarda. Todos esses ingredientes são cuidadosamente armazenados e preparados para você se deliciar com um sanduíche fresquinho e de alta qualidade.',
        valor: 29.90,
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
    

    const mckBebidas = [
        {
            id: 0,
            nome: 'Coca-Cola',
            descricao: 'Refrigerante com sabor único e refrescante, vendido em mais de 200 países e considerado uma das maiores marcas do mundo.            ',
            valor: 7.90,
        },
        {
            id: 1,
            nome: ' Pepsi',
            descricao: 'Pepsi é um refrigerante sabor Cola com aroma natural à base de concentrado, água e gás carbônico. É um refrigerante muito apreciado pelo sabor suave e pela refrescância.',
            valor: 7.90,
        },
        {
            id: 2,
            nome: 'Fanta Laranja',
            descricao: 'Com sabor irresistível e único, o Refrigerante FANTA Laranja faz muito sucesso no mercado entre os refrigerantes nacionais e internacionais. Produzido com água gaseificada, açúcar e suco de laranja é uma excelente opção para matar a sede! Compre Refrigerante FANTA Laranja e experimente esse sabor inconfundível! Compartilhe com amigos e familiares!',
            valor: 7.90,
        },



]

export function Cardapio() {

    return (

        <>

            <NavBar />

            <Title>
                <h1>Cardapio</h1>

            </Title>
            <div>
                <SubTitle>
                    <h2>Hamburguers</h2>
                </SubTitle>
                <BurgerContainer>
                    {mckHamburger.map((pedido, index) => (<CardsBurger key={pedido.id} nome={pedido.nome} id={pedido.id} descricao={pedido.descricao} valor={pedido.valor} />))}

                </BurgerContainer>
            </div>
<div>

  <SubTitle>
                    <h2>refrigetante</h2>
                </SubTitle>

                <BurgerContainer>
                     {mckBebidas.map((pedido,) => (<CardsBebida key={pedido.id} nome={pedido.nome} id={pedido.id} descricao={pedido.descricao} valor={pedido.valor} />))}

                </BurgerContainer>

</div>
          


            <Footer />
        </>

    )
}