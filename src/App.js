import logo from './logo.svg'; 
import './App.css'; 
import React, { useState, useEffect } from 'react'; 
import Form from './Form'; 
import axios from 'axios'; 
import formSchema from './validation/FormSchema'; 
import * as yup from 'yup'; 
import FormSetup from './FormSetup';
 
 

const initialFormValues = { 
  username: '', 
  userlast: '',
  email: '', 
  password: '', 
  terms: false,   
} 

 
 

const initialFormErrors = { 
  username: '', 
  userlast: '',
  email: '', 
  password: '', 
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
      username: formValues.first_name,
      userlast: formValues.last_name,
      email: formValues.email,
      password: formValues.password,
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
         <h1>Come Onboard!</h1> 
       </div> 
        <Form 
          values = {formValues} 
          change = {inputChange} 
          submit = {formSubmit} 
          disabled = {disabled} 
          errors = {formErrors} 
        /> 
        {
          users.map( (users, id) => {
            return (
              <FormSetup key = {id} details={users}/>
            )
          })
        }
      </header> 
    </div> 

  ); 

} 

 
 

export default App; 