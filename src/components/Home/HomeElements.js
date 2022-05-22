import styled from 'styled-components';

export const FormWrapper = styled.div`
margin:100px ;
margin-bottom:100px ;
@media screen and (max-width: 500px) {
margin:40px ;
}
`
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
width: 250px;
text-align: right;
padding: 12px 12px 12px 0;
display: inline-block;
`
export const FormInput = styled.input`
display:inline-block ;
height:35px ;
width:350px ;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
resize: none;
`
export const FormBtn = styled.button`
padding:5px ;
width:100px ;
margin-right:240px ;
border-radius: 4px;
background:rgb(39, 118, 255);
padding: 10px 22px;
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
export const FormH1 = styled.h1`
text-align:center ;
padding-top:20px ;
font-size:40px ;
`
export const FormBtnWrapper = styled.div`
display:flex ;
padding-bottom:20px ;
padding-left:20px ;
`
export const FormTextarea = styled.textarea`
width: 350px;
height: 150px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
resize: none;
`
export const FormFileInput = styled.input`
border:none ;
cursor: pointer;
`

export const FormDateInput = styled.input`
display:inline-block ;
height:35px ;
width:350px ;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
resize: none;
`