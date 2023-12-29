import styled from "styled-components";


export const Container = styled.div `

    display: flex;
    justify-content: center;
    background-color: #3A9CF7;
    border-radius: 10px;
`

export const Logo = styled.div `
    display: flex;
    justify-content: space-between;  
    img {
        width: 500px;
        height: 310px;
    }
`

 export const Menu = styled.div `
    ul {
        width: 680px; 
        height: 50px;
	    display:flex;
        justify-content: space-between; 
        padding: 15px ;

}

    a{
	    font-size: 18px;
        color: white;  
}
    span{
	    color: black;
	    text-decoration: none;
}
` 

export const BtnS = styled.div `
    ul{
        width: 200px;
        height: 50px;
        padding: 7px;
	    display: flex;
	    justify-content: end;
    li{
        border-radius: 15px;
        padding: 7px 7px;
        margin-right: 15px;
        background-color: #fff;
            
        span{
                font-size: 1.0rem;
        
        }
            &:hover{
                background: #FB7B04;
                color: white;
                box-shadow: 2px 2px 3px black;
                transition: ease-in-out 300ms;
                cursor: pointer;
        }
    }
} 
`

export const Conteudo = styled.div `
    border-radius: 23px;
    width: 75%;
    display: block;  
`

export const Cabecalho= styled.div `
    width: 880px;
    height: 50px;
    display: flex;
    justify-content: space-between;
`

export const Text= styled.div `
    width: 880px;
    height: 40px;
    color: #fff;
    font-size: 2.0rem;
    margin-top:30px;
    text-align:center
`

export const BtnOp= styled.div `
    ul{
        width: 880px;
        height: 35px;
        margin-top: 15px;
	    display: flex;
	    justify-content:center;
        
       
    li{
        width: 200px;
        padding: 7px 7px;
        text-align: center;
        color: #fff;
        margin-right: 10px;
        
            span{
                font-size: 1.5rem;
                font-weight:100;
        }
            &:hover{
                color: white;
                transition: ease-in-out 300ms;
                cursor: pointer;
        }
    }
} 
`

export const FaixaSP= styled.div `
    width: 880px;
    height: 10px;
    display: flex;
    margin-top: 10px;
    justify-content:center;


    fax1 {
        width: 250px;
        height: 10px;
        background-color: #fff;
    
    &:hover{
                background-color: orange;
                transition: ease-in-out 300ms;
                cursor: pointer;
        }
    }
    fax2 {
        width: 250px;
        height: 10px;
        background-color: #fff;
        
        &:hover{
                background-color: orange;
                transition: ease-in-out 300ms;
                cursor: pointer;
        }
    }
    
`

export const Form= styled.div `
	color: #fff;
	display: flex;
    margin-top:8px;
    font-size:0.5rem;
    justify-content:center;

        grup1{
            
            label{
                display: block;
                font-size: 1.0rem;
    
            }
            input{
                width: 280px;
	            height: 40px;
                border-radius: 10px;
                box-shadow: 2px 2px 3px black;
	            border: none;
	            text-align: center;
            }

            Img{
                height: 22px;
	            width: 22px;
                position: relative;
                left: -90%; 
                top: 30%;
                transform: translateY(-50%);
         }

        }

        grup2{
            label{
                font-size: 1.0rem;
                display: block;
                margin-left:10px;
            }
            select{
	            width: 210px;
	            height: 40px;
                font-size: 10px;
	            border-radius: 10px;
	            border: none;
	            box-shadow: 2px 2px 3px black;
	            left: 100px;
            }
        }
`

export const BtnI= styled.div `
    ul{
        width: 820px;
        height: 50px;
        padding: 5px;
	    display: flex;
	    justify-content: end;
    li{    
        border-radius: 15px;
        padding: 7px 7px;
        margin-right: 15px;
        background-color: white;         
        span{
                font-size: 1.0rem;
                font-weight:100;
        }
            &:hover{
                background: #FB7B04;
                color: white;
                box-shadow: 2px 2px 3px black;
                transition: ease-in-out 300ms;
                cursor: pointer;
        }
    }
} 
`