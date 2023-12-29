import styled from "styled-components";

export const Body = styled.div`
    color:#fff;
    border-radius: 10px;
    border: 5px solid #C4EEF2;
`
export const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    padding: 20px;

    h2{
        width: 680px;
        height: 50px;
        display: flex;
        border-radius: 19px;
        background-color: #C4EEF2;
        justify-content: center;
        text-align: center;
        align-items: center;
        font-size: 1.6rem;
        color: black;
    }

    setaD{
        color: black;
        position: relative;
        top: 1%;
        left: 15%;
        margin: 10px 10px 10px 10px;
        cursor: pointer;
    }

    setaE{
        color: black;
        position: relative;
        top: 1%;
        left: 15%;
        margin: 10px 10px 10px 10px;
        cursor: pointer;
    }

    element{
        width: 20px;
        height: 20px;
        background-color: gray;
        border-radius: 100%;
        position: relative;
        top: 1%;
        left: 15%;
        margin: 10px 10px 10px 10px;
    
            &:hover{
                background: #3A9CF7;
                color: white;
                box-shadow: 2px 2px 3px black;
                transition: ease-in-out 300ms;
                cursor: pointer;
        }
}
`
export const SlideShow = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    margin-top: 50px;
    margin-left: 10%;
    justify-content: space-evenly;

    setaE{
        color: black;
        position: relative;
        left: 1%;
        margin: 10px 10px 10px 10px;
        margin-top: 80px;
        cursor: pointer;
    }

    DivBanner{
        width: 100%;
        border:  1px solid red;
    }
    sldA{
        width: 200px;
        text-align: center;
        
        sld1{
        border-radius: 10%;
        }
    }          
    sldA{
        width: 200px;
        text-align: center;
        color: black;
        
        sld1{
        border-radius: 10%;

        }
    }     
    sldB{
        width: 200px;
        text-align: center;
        color: black;
        
        sld1{
        border-radius: 10%;
 
        }
    }     
    sldC{
        width: 200px;
        text-align: center;
        color: black;
        
        sld1{
        border-radius: 10%;

        }
    }   
    sldD{
        width: 200px;
        text-align: center;
        color: black;
        
        sld1{
        border-radius: 10%;

        }
    }
    
    setaD{
        color: black;
        position: relative;
        left: 1%;
        margin: 10px 10px 10px 10px;
        margin-top: 80px;
        cursor: pointer;
    }

    
    `
    export const Rodape = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;

       divimg{
        padding: 25px;
        display: flex;
        justify-content: center, center;
        height: 150px;
      
       }
        
    `



