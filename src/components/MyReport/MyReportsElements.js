import styled from "styled-components";

export const Container = styled.div`
width:70% ;
margin:2rem auto ;
@media screen and (max-width: 577px) {
width:90% ;
}
`
export const Heading = styled.div`
width:100% ;
display:flex ;
justify-content:space-between ;
`
export const Title = styled.div`
flex-basis:50% ;
height:100% ;
padding:1rem 20px ;
`
export const H1 = styled.h1`
font-size:2.5rem ;
font-weight:900 ;
`
export const Table = styled.table`
width:100% ;
border-collapse: collapse;
overflow:hidden ;
`
export const Thead = styled.thead`
position:sticky ;
z-index:100 ;
/* width:100% ;
text-align:center ; */
`
export const Th = styled.th`
/* padding:1rem 20px ;
width:auto ;
border:1px solid #bbb ;
font-size:15px ;
font-weight:bold ; */
font-weight:normal ;
padding: 8px;
text-transform:capitalize ;
font-weight:600 ;
font-size:15px ;
color: #fff;
background-color:#000;
:not(:last-of-type){
    border-right:1px solid ;
}
:first-of-type{
    width:1% ;
    white-space:nowrap ;
}
`
export const Tbody = styled.tbody`
width:100% ;
text-align:center ;
`
export const Tr = styled.tr`

`
export const Td = styled.td`
padding:8px ;
border:1px solid #bbb ;
font-size:18px ;
font-weight:lighter ;
`
export const Button = styled.button`
padding: 10px 12px;
background-color:white;
margin:10px ;
color: rgb(39, 176, 255);
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
transition: all 0.2s ease-in-out;
color: #010606;
}
`
export const TdStatus = styled.td`
padding:1rem 20px ;
border:1px solid #bbb ;
font-size:18px ;
font-weight:lighter ;
color:#bbb ;
font-style:italic ;
`