import React from 'react'

const BoxInput = (props) => {
  return (
    <div className='d-flex flex-column align-items-start justify-content-start my-5' >
        <label className='text-start' for={props.inputObject.name}>{props.inputObject.question}</label>
        <br/>
        <input type={props.inputObject.type} name={props.inputObject.name} placeholder={props.inputObject.placeholder}/>
    </div>
  )
}

export default BoxInput