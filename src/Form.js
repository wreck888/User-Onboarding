import React from 'react'; 
import styled from 'styled-components';


const StyledH2 = styled.h2`
color: #2D82B7;
`
const StyledLabel = styled.div`
color: #2D82B7;
`

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
            <StyledH2>New User Information Form</StyledH2> 
            <StyledLabel> 
                <label> 
                   First Name:&nbsp;  
                    <input 
                        value = {values.first_name} 
                        onChange = {onChange} 
                        name = 'username' 
                        type = 'text' 
                    />                                    
                </label><br/> 
                <label> 
                   Last Name:&nbsp;  
                    <input 
                        value = {values.last_name} 
                        onChange = {onChange} 
                        name = 'userlast' 
                        type = 'text' 
                    />                                    
                </label> <br/> 
                <label> 
                    Email:&nbsp; 
                    <input 
                        value = {values.email} 
                        onChange = {onChange} 
                        name = 'email' 
                        type = 'email' 
                    />&nbsp; 
                </label>
                <label> 
                    Password:&nbsp;  
                    <input 
                        value = {values.password} 
                        onChange = {onChange} 
                        name = 'password' 
                        type = 'text' 
                    /> 
                </label> <br/>
                <label>Position:&nbsp;
                    <select value = {values.position}
                    name = "position" onChange={onChange}>
                         <option value="">-- Select a Position --</option>
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Alumni">Alumni</option>
                        <option value="Guardian">Guardian</option>
                    </select>
                </label> <br/>
                <label> 
                    Terms of Service 
                    <input 
                        checked = {values.terms} 
                        onChange = {onChange} 
                        name = 'terms' 
                        type = 'checkbox' 
                    />
                </label>                
            </StyledLabel> 
            <div> 
                <button id = 'submitB' disabled={disabled}>Submit</button> 
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

 