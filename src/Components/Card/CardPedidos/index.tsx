import BurgerPng from "../../../assets/hamburguer1.png"
import {
    BugerImg,
    ArticlePedido,
    TextoPedido,
} from "./style"


interface PropsSanduiche{
    id: number;
    nome: string;
    descricao: string;
    valor: number;
}

export const CardPedido = ({id, nome, descricao, valor}:PropsSanduiche) => {

    return(

        <>
          <ArticlePedido>
         <BugerImg>
        <img src={BurgerPng} alt="" />

    </BugerImg>
<TextoPedido>
    <p>{nome}</p>
    <p>R$ {valor}</p>
</TextoPedido>

    </ArticlePedido>
    
        </>
    )
}