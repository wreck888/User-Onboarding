import logo from './logo.svg'; 
import './App.css'; 
import React, { useState, useEffect } from 'react'; 
import Form from './Form'; 
import axios from 'axios'; 
import formSchema from './validation/FormSchema'; 
import * as yup from 'yup'; 
import FormSetup from './FormSetup';
import styled from 'styled-components';

const StyledApp = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #2D82B7;
    
`
const StyledDiv = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #f3f3f3;
    color: red;
    
`

const StyledH1 = styled.h1`

margin: 16px;
padding: 16px 8px 12px 16px;
color: #2D82B7;
font-size: 4rem;
`
const StyledDiv2 = styled.div`
color: #2D82B7;
`


const initialFormValues = { 
  username: '', 
  userlast: '',
  email: '', 
  password: '', 
  position: '',
  terms: false,   
} 

 
 

const initialFormErrors = { 
  username: '', 
  userlast: '',
  email: '', 
  password: '', 
  position: '',
} 

const initialUsers = [] 
const initialDisabled = true 

 
function App() { 
  const [users, setUsers] = useState(initialUsers) 
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled) 

  const getUsers = () => { 
    axios.get('https://reqres.in/api/users') 
    .then(response =>{ 
      console.log(response.data.data) 
      setUsers(response.data.data) 

    }).catch(error => console.error(error)) 

  } 

   const postNewUser = newUser => { 
    axios.post('https://reqres.in/api/users', newUser) 
    .then (response =>{ 
      setUsers([response.data, ...users]); 
    }).catch(error => console.error(error)) 
    .finally(() => setFormValues(initialFormValues)) 

  } 

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name] : value})

  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.username.trim(),
      last_name: formValues.userlast.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      position: formValues.position,
      // terms: !!formValues
    }
    postNewUser(newUser)
    setFormValues(initialFormValues)
  }
  
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return ( 
    <div className="App"> 
      <header className="App-header"> 
       <div> 
         <StyledH1>Come Onboard!</StyledH1> 
       </div> 
       <StyledDiv>
        <Form 
          values = {formValues} 
          change = {inputChange} 
          submit = {formSubmit} 
          disabled = {disabled} 
          errors = {formErrors} 
        /> 
        </StyledDiv>
        <StyledDiv2>
        {
          users.map( (users, id) => {
            return (
              <FormSetup key = {id} details={users}/>
            )
          })
        }
        </StyledDiv2>
      </header> 
    </div> 

  ); 

} 

 
 

export default App; 