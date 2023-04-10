import { NavLink } from 'react-router-dom'
import LoginImg from '../../assets/LoginImg.png'
import  {EnvelopeSimple, Key} from '@phosphor-icons/react';
import LogoPng from '../../assets/LogoBurger.png';
import {
    ImgLogin,
    ContainerLogin,
    ArticleLogin,
    COntinerLogin,
    FormLogin,
    ContainerButton,
    ContainerGeral
    
} from './style'

export function Register () {
    return(
        <>

        <ContainerGeral>

            <ContainerLogin>
                <ImgLogin> <img src={LoginImg} alt="" /></ImgLogin>
                <ArticleLogin>
                 <COntinerLogin>
                    <img src={LogoPng} alt="" />
                    <FormLogin action="">
                        <h2>Seja Bem-Vindo a <br /> Hamburgueria :)</h2>
                        <div>
                      
                        <label htmlFor="">  <EnvelopeSimple size={30} color="#fff0f0" /> <span>E-mail</span></label>
                        <input type="email"  placeholder='Insira seu e-mail' />
                         </div>
                         <div>
                        <label htmlFor=""><Key size={32} color="#fff0f0" /><span>Senha</span></label>
                        <input type="password" placeholder='Insira sua senha' />
                        </div>
                    </FormLogin>



                    <ContainerButton>
                    <NavLink to="/" title='home'> <button>Entrar</button></NavLink>
                    
                    </ContainerButton>
                        
                </COntinerLogin>

                </ArticleLogin>
            </ContainerLogin>
        </ContainerGeral>
        </>
    )
}