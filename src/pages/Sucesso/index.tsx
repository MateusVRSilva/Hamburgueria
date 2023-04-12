
import LogoPng from '../../assets/delivery-motoboy-1.png';
import { CheckFat } from '@phosphor-icons/react';

import{
    ArticleFinish,
    SuccessDiv,
    SuccessImg
} from './style'
import { NavLink } from 'react-router-dom';

export const Success = () => {


    return(
<>

<ArticleFinish>
    
   <SuccessImg>

      <img src={LogoPng} alt="" />
   </SuccessImg>

  

 <SuccessDiv>
    <CheckFat size={300} color="#fff0f0" />

    <span>Pedido Realizado com Sucesso!!</span>

<NavLink to="/" title='Voltar a Home'>
      <button>Retorne a Pagina Inicial</button>
</NavLink>
  
    </SuccessDiv>



</ArticleFinish>


</>

    )
}