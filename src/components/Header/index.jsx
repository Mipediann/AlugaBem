import React  from 'react';
import  Img from  '../../images/image7.png';
import LogoImg from '../../images/foto.png';
import { Container, Logo, Conteudo, Cabecalho, Menu, BtnS, Text, BtnOp, FaixaSP, Form, BtnI} from './styles';

const Header = () => {
    return ( 

            
            <Container>
            <Logo>
                <img src={LogoImg} alt="" />
            </Logo>
   
            <Conteudo>
              <Cabecalho>
              <Menu>   
                <ul>
                    <li><a href="[o-link-comprar]">Comprar</a></li>
                    <li><a href="[o-link-alugar]">Alugar</a></li>
                    <li><a href="[o-link-lançamentos]">Lançamentos</a></li>
                    <li><a href="[o-link-descobrir]">Descobrir</a></li>
                    <li><a href="[o-link-ajuda]">Ajuda</a></li>
                    <li><a href="[o-link-simulador]">Simulador</a></li>
                    <li><a href="[o-link-anúncios]">Anúncios</a></li>
                </ul>

            </Menu>

            <BtnS>
            <ul>
                    <li><span>Entrar</span></li>
                    <li><span>Criar Conta</span></li>
            </ul>

            </BtnS>

                </Cabecalho>

            <Text>
                O site certo para você encontrar sua nova casa.
            </Text>

            <BtnOp>
               
                <ul>
                    <li><span>Alugar</span></li>
                    <li><span>Comprar</span></li>
                </ul>
                
            </BtnOp>

            <FaixaSP>

             <fax1></fax1>
             <fax2></fax2>
       
            </FaixaSP>

            <Form>
           
                <grup1>
                
                    <label> Onde deseja morar? </label>
                    <input class= "text" type="text" placeholder="Digite nome da rua,bairro ou cidade"></input>
                    <img src={Img} alt="" ></img>
                </grup1>

                <grup2>
                    <label class="fname">Tipo de imóvel</label>
                    <select class="sl">
					   <option></option>
					   <option value="Casa">Casa</option>
					   <option value="Condominio"> Condominio</option>
					   <option value="Sitio">Sitio</option>
			   		</select>

                    
                </grup2>

            </Form>

            <BtnI>
                <ul>
                    <li><span>Buscar</span></li>
                </ul>
            </BtnI>

            </Conteudo>
           
            </Container>

    )
}

export default Header;