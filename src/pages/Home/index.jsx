import React, { Fragment } from "react";
import ImgSD from "../../images/_ (1).png";
import sld1 from "../../images/sld1.png";
import sld2 from "../../images/sld2.png";
import sld3 from "../../images/sld3.png";
import sld4 from "../../images/sld4.png";
import imgf from "../../images/imgf.png";
import ImgSE from "../../images/_.png";
import {Header, SlideShow, Rodape, Body} from "./styles";

const Home = () => {
    return (
        <Fragment>

            <Body>

            <Header>
                <h2>
                    Encontre o tipo ideal para seu novo imóvel
                </h2>

            <setaE> 
                     <img src={ImgSE} alt="" />
            </setaE>

                <element></element>

                <element></element>

                <element></element>

                <element></element>

                <element></element>

            <setaD> 
                <img src={ImgSD} alt="" />
            </setaD>

            </Header>

            <SlideShow>

                <setaE> 
                    <img src={ImgSE} alt="" />
                </setaE>

                <sldA>
                    <hd2>Casa de Praia</hd2>
                    <sld1><img src= {sld1} alt="" /></sld1>
                </sldA>

                <sldB>
                    <hd2>Apartamento Urbano</hd2>
                    <sld2><img src= {sld2} alt="" /></sld2>
                </sldB>
                
                <sldC>
                    <hd2>Casa no Campo</hd2>
                    <sld3><img src= {sld3} alt="" /></sld3>
                </sldC>

                <sldD>
                    <hd2>Condominio Fechado</hd2>
                    <sld4><img src= {sld4} alt="" /></sld4>
                </sldD>

                
            <setaD> 
                <img src={ImgSD} alt="" />
            </setaD>

            </SlideShow>

            <Rodape> 
            <divimg>
                <img src= {imgf} alt="" />
            </divimg>
            
            </Rodape>

                </Body>
        
        </Fragment>
                    
    )
    
}
export default Home;