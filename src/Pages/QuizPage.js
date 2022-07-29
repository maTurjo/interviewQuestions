import React, { useEffect, useState } from 'react'
import BoxInput from '../Components/BoxInput';
import SelectInput from '../Components/SelectInput';
import data from "../Utils/data.json"


const QuizPage = () => {

    // const [data, setdata] = useState(sampleData);
    const [arrayOfElements, setarrayOfElements] = useState([]);

    useEffect(() => {
        data.forEach((data,index)=>{
            console.log(data.tagName);
            if(data.tagName==="input"&& (data.type==="text"||data.type==="textarea"||data.type==="date"||data.type==="email"||data.type==="number"||data.type==="file"||data.type==="password"||data.type==="tel"||data.type==="time"||data.type==="url")){
                setarrayOfElements((prevState)=>{
                    let newArray=[].concat(...prevState).concat(<BoxInput inputObject={data}/>);
                    return newArray;
                })
            }
            else if(data.tagName==="input"&& (data.type==="checkbox"||data.type==="radio")){
                setarrayOfElements((prevState)=>{
                    let newArray=[].concat(...prevState).concat(<SelectInput inputObject={data}/>);
                    return newArray;
                })
            }
            
        })

    }, [])
    
    
    
    return (
        <div>
        <form>

      {/* <ul> */}
        {
            arrayOfElements.map((item)=>{return item})
        }
      {/* </ul> */}
        </form>
    </div>
  )
}

export default QuizPage