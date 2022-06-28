import { style } from "@mui/system";
import styled from "styled-components";


export const DivContainercart = styled.div`
width:100%;
display: flex;
flex-direction: column;
`;


export const DivHeadercart = styled.div`
display: flex;
justify-content:space-between;
height:40px;
margin:15px 15px;
padding:15px 0px;
font-size:15px;
font-weight:bold;
border-bottom: 1px solid lightgray;


&>:nth-child(2){
    font-size:20px;
    cursor: pointer;
}
&>:nth-child(2):hover{
   color:red;
}

`;

export const DivContainterProducts = styled.div`
width:100%;
display:flex;
flex-direction: column;
height: 350px;
overflow: auto;

//Incluir para poder mostrar los demas webkit/ controlamos el ancho de la barra para las barras verticales
// height para las horizontales
&::-webkit-scrollbar{
  width: 12px;
  border-radius:5px;
  background-color: #f5f5f5;

}

//barra que movemos 
&::-webkit-scrollbar-thumb{
  height:10px;
  border-radius:5px;
  background-color:gray;
  //background-color: #eb1738;
  //background-image: -webkit-linear-gradient(90deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent);

}

&::-webkit-scrollbar-thumb:hover{
  //background-color: #eb3000;
  background-color:lightcoral;
}

//lugar en que se mueve la barra
&::-webkit-scrollbar-track{
  border-radius:5px;
  box-shadow: inset 0 0 10px rgb(0, 0, 0, 0.4);
  background-color: #f5f5f5;

}


`;

export const DivProduct = styled.div`

height:80px;
display:grid;
grid-template-columns: 1fr auto auto;
margin: 10px 15px 10px 15px;
border-bottom: 1px solid lightgray;

`;

export const DivProductdetail = styled.div`
display:flex;
flex-direction:column;
`;
export const Productdetailname = styled.span`
width:140px;
margin:10px 0px 0px 0px;
font-weight:bold;
overflow:hidden;
word-wrap: break-word;
`;

export const DivProductimage = styled.div`
display: flex;
margin: 0px 10px 0px 0px;
width:90px;
height:70px;

`;

export const DivProductdelete = styled.div`
display: flex;
margin: 0px 10px 0px 10px;
justify-content:center;
align-items:center;
cursor: pointer;
&:hover{
    color: red;
}
`;

export const ContainerFooter = styled.div`

display:flex;
flex-direction:column;
`;

export const DivContainterSubtotal = styled.div`
display: flex;
justify-content:space-between;
height:40px;
margin:15px 15px;
padding:15px 0px;
font-size:15px;
font-weight:bold;
`;

export const PrimaryButton = styled.button`

  height: 40px;
  margin:5px 15px;
  background: #161b22;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;

&:hover{
    background-color:white;
    color: #161b22;
    border: 1px solid #161b22;
}

`;
 