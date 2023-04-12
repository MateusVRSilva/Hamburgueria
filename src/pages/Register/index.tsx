import { NavLink } from 'react-router-dom'
import LoginImg from '../../assets/LoginImg.png'
import  {EnvelopeSimple, Key} from '@phosphor-icons/react';
import LogoPng from '../../assets/LogoBurger.png';
import {
    ImgLogin,
    ContainerLogin,
    ArticleLogin,
    ContinerLogin,
    FormLogin,
    ContainerButton,
    ContainerGeral,
    BtnLogin
    
} from './style'

export function Register () {
    return(
        <>

        <ContainerGeral>

            <ContainerLogin>



                <ImgLogin> <img src={LoginImg} alt="" /></ImgLogin>

                

            
                <ArticleLogin>

                    

                 
    

                 <ContinerLogin>
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
                    <NavLink to="/" title='home'> <button>Cadastrar-se</button></NavLink>
                    
                    </ContainerButton>
                        
                </ContinerLogin>

                <BtnLogin>
                        <span>Ja tem uma conta? entre aqui</span>
 <NavLink to="/login" title='Login'>  <button>Entrar</button></NavLink>

                    </BtnLogin>

                </ArticleLogin>
            </ContainerLogin>
        </ContainerGeral>
        </>
    )
}