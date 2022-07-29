import React from 'react'

const SelectInput = ({inputObject}) => {
  return (
    <div className='d-flex flex-column  align-items-start justify-content-start my-5' >
        <label className='text-start' for={inputObject.name}>{inputObject.question}</label>
        {
           inputObject.options.map((SingleOption)=>{
                return (
                    <div>
                    <input type={inputObject.type} name={inputObject.name} placeholder={inputObject.placeholder} value={SingleOption}/>
                    <label>{SingleOption}</label>
                    </div>
                    )

           })
        }
    </div>
  )
}

export default SelectInput