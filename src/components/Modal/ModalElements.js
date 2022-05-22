import styled from 'styled-components';

export const Form = styled.form`
display:flex ;
flex-direction:column ;
justify-content:center ;
`
export const FormDiv = styled.div`
justify-content:space-between;
margin:20px ;
`
export const FormLabel = styled.label`
display: inline-block;
float: left;
clear: left;
font-size:20px ;
width: 60px;
text-align: right;
padding: 12px 12px 12px 0;
display: inline-block;
`
export const FormInput = styled.input`
display:inline-block ;
height:35px ;
width:200px ;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
resize: none;
`
export const FormTextarea = styled.textarea`
width: 200px;
height: 100px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
resize: none;
`
export const Container = styled.div`
z-index:1001 ;
margin-left:-182px ;
margin-top:-32px ;
width: 100%;
height: 100%;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`
export const Body = styled.div`
/* flex: 50%; */
display: flex;
justify-content: center;
align-items: center;
font-size: 1.7rem;
text-align: center;
`
export const Wrapper = styled.div`
width: 500px;
height: 380px;
border-radius: 12px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
padding: 25px;
`
export const Footer = styled.div`
flex: 20%;
display: flex;
justify-content: center;
align-items: center;
`
export const CloseButton = styled.button`
display: flex;
justify-content: flex-end;
background-color:white ;
cursor: pointer;
border: none;
`
export const Button = styled.button`
width: 150px;
height: 45px;
margin: 10px;
border: none;
background-color: cornflowerblue;
color: white;
border-radius: 8px;
font-size: 20px;
cursor: pointer;
`