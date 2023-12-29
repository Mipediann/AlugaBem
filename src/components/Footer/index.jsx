import React, { Fragment } from 'react';
import {FaFacebook,FaInstagram,FaWhatsapp} from "react-icons/fa";
import LogoImg from '../../images/logo.png';
import { Container, Item, Copy } from './styles';

const Footer = () => {
  return (
    <Fragment>

    
    <Container>
        <Item>
            <img src={LogoImg} alt="" />
            <nav>
                <li><span><FaFacebook size={32}/></span></li>
                <li><span><FaInstagram size={32}/></span></li>
                <li><span><FaWhatsapp size={32}/></span></li>
            </nav>
        </Item>

        <Item>
            <h3>Nossos serviços</h3>
            <ul>
                <li><span>Comprar</span></li>
                <li><span>Alugar</span></li>
                <li><span>Vender</span></li>
            </ul>
        </Item>

        <Item>
        <h3>Links úteis</h3>
        <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
        </ul>
    </Item>

    <Item>
    <h3>Nossos contatos</h3>
    <ul>
        <li><span>Comprar</span></li>
        <li><span>Alugar</span></li>
        <li><span>Vender</span></li>
    </ul>
    </Item>


    </Container>

    <Copy>
        <ul>
            <li><span>Termo de Uso</span></li>
            <li><span>Política de privacidade</span></li>
            <li><span>Política de Cookies</span></li>
        </ul>
    </Copy>

    </Fragment>
  )
}

export default Footer;