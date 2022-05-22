import styled from "styled-components";

export const Container = styled.div`
margin:30px ;
`
export const Title = styled.h1`
padding-bottom:20px ;
color:rgb(39, 118, 255);
`
export const ImgWrapper = styled.div`
`
export const Img = styled.img`
width:100%;
height:100%;
object-fit:cover ;
`
export const P = styled.p`
padding-top:20px ;
padding-bottom:20px ;
`
export const DetailWrapper = styled.div`
display: flex;
flex-direction:row ;
padding-top:20px ;
padding-bottom:20px ;
`
export const H3 = styled.h3`
color:rgb(39, 118, 255);
`
export const Detail = styled.p`
padding-top: 2px;
padding-left:5px;
`
export const BtnWrapper = styled.div`

`
export const Btn = styled.button`
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
@media screen and (max-width: 793px) {
margin-top:20px ;
}
`