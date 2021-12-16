import React from 'react'; 

 
 

export default function userForm (props) { 
    const { 
        values, submit, change, disabled, errors, 
    } = props 

 
 

    const onSubmit = event => { 
        event.preventDefault() 
        submit() 

    } 

 
 

    const onChange = event => { 
        const { name, value, checked, type } = event.target 
        const valueCheck = type === 'checkbox' ? checked : value;  
        change(name, valueCheck) 

    } 

 
 

    return ( 
        <form onSubmit={onSubmit}> 
         <div> 
            <h2>New User Information Form</h2> 
            <div> 
                <label> 
                   First Name: 
                    <input 
                        value = {values.first_name} 
                        onChange = {onChange} 
                        name = 'username' 
                        type = 'text' 
                    />                                    
                </label> 
                <label> 
                   Last Name: 
                    <input 
                        value = {values.last_name} 
                        onChange = {onChange} 
                        name = 'userlast' 
                        type = 'text' 
                    />                                    
                </label> 
                <label> 
                    Email: 
                    <input 
                        value = {values.email} 
                        onChange = {onChange} 
                        name = 'email' 
                        type = 'email' 
                    /> 
                </label> 
                <label> 
                    Password: 
                    <input 
                        value = {values.password} 
                        onChange = {onChange} 
                        name = 'password' 
                        type = 'text' 
                    /> 
                </label> 
                <label> 
                    Terms of Service 
                    <input 
                        checked = {values.terms} 
                        onChange = {onChange} 
                        name = 'terms' 
                        type = 'checkbox' 
                    /> 
                </label>                
            </div> 
            <div> 
                <button disabled={disabled}>Submit</button> 
                <p>{errors.username}</p> 
                <p>{errors.userlast}</p>
                <p>{errors.email}</p> 
                <p>{errors.password}</p> 
                <p>{errors.terms}</p> 
            </div> 
         </div> 
        </form> 

 
 

    ) 

 
 
 
 

} 

 