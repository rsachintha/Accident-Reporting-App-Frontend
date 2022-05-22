import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const CardWrapper = styled.div`
width:80% ;
text-align: center;
margin-left:10% ;
display:grid;
grid-template-columns:1fr 1fr 1fr ;
@media screen and (max-width: 961px) {
display:grid;
grid-template-columns:1fr 1fr ;
width:80% ;
margin-left:5% ;
}
@media screen and (max-width: 599px) {
display:grid;
grid-template-columns:1fr ;
width:80% ;
margin-left:100px ;
}
`
export const Card = styled.div`
border:1px solid  rgb(39, 118, 255);
box-shadow:0 0 5px rgb(39, 118, 255) ;
width:250px ;
margin:20px ;
`
export const CardImgWrapper = styled.div`
width:249px ;
`
export const CardImg = styled.img`
width:245px ;
height:240px ;
object-fit:cover ;
`
export const CardTitle = styled.p`
text-align:center ;
margin:0 ;
padding:10px ;
font-weight:bold ;
font-size:15px ;
`
export const CardDescription = styled.div`

`
export const P = styled.p`
text-align:center ;
margin:0 ;
padding:10px ;
font-size:13px ;
`
export const BtnWrapper = styled.div`
margin:50px ;
padding:5px ;
width:120px ;
margin-right:240px ;
border-radius: 4px;
background:rgb(39, 118, 255);
padding: 7px 22px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(39, 176, 255);
  }
`
export const NavLink = styled(Link)`
color: #fff;
text-decoration: none;
cursor: pointer;
`