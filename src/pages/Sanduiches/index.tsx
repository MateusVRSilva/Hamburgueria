
import BurgerImg from "../../assets/hamburguer1.png"
import { NavLink, useLocation } from 'react-router-dom'
import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavBar"
import { ArrowUUpLeft,} from "@phosphor-icons/react"
import toast, { Toaster } from 'react-hot-toast';
import {
    ContainerBurger,
    ArticleBurger,
    Descricao,
    BtnComprar,

} from './style'
import { useEffect, useState } from "react"


interface PropsSanduiche {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
}

export const Sanduiches = () => {
    let { state } = useLocation()
    const [loading, setLoading] = useState(false)
    const [carrinhopedido, setCarrinhopedido] = useState<PropsSanduiche[] | []>([])

    const fazerPedido = () => {
        console.log('Chamou a função')
        setLoading(true)
        setCarrinhopedido([...carrinhopedido, state.produto])
        toast.success('Seu pedido foi adicionado ao carrinho ;)')
    }
    useEffect(() => {
        localStorage.setItem('@pedidos', JSON.stringify(carrinhopedido));
        setLoading(false)
    }, [carrinhopedido])

    useEffect(() => {
        setLoading(true)
        const fazerPedido = localStorage.getItem('@pedidos')
        if (fazerPedido) {
            const fazerpedidoJson = JSON.parse(fazerPedido)
            if (!!fazerpedidoJson.length) {
                setCarrinhopedido(fazerpedidoJson)
            }

        }
    }, [])

    return (

        <>

            <NavBar />

            <ContainerBurger>

                <NavLink to="/cardapio" title="voltar"> <ArrowUUpLeft size={32} color="#000" /><span>Voltar</span></NavLink>

                <ArticleBurger>

                    <div>
                        <img src={BurgerImg} alt="" />
                    </div>
                    <div>
                        <Descricao>

                            <h2>{state.produto.nome}</h2>
                            <span>{state.produto.descricao}</span>

                        </Descricao>

                        <BtnComprar>
                            <button disabled={false} onClick={fazerPedido} >Adicionar ao Carrinho</button>
                        </BtnComprar>

                    </div>
                </ArticleBurger>
            </ContainerBurger>

            <Toaster
                position="top-right"
                reverseOrder={false}
            />


            <Footer />

        </>
    )
}