import React from 'react'

function FormSetup({ details }) {
  
  return (
    <div className='user container'>
      <h2>{details.first_name}</h2>
      <h2>{details.last_name}</h2>
      <p>Email: {details.email}</p>
      <p>password: {details.password}</p>
      </div>
  )
}

export default FormSetup
