import React from 'react';
import { useState  , useRef} from 'react';



    


const Creditcard = ({length,creditcardhandler}) => {

    const inputRef = useRef([]);
    const [inputBoxLength] = useState(new Array(length).fill(1));
    const [inputboxvalue, setinputboxvalue] = useState(new Array(length).fill(""));

    const handlechange = (e,index) => {
        inputboxvalue[index] = e.target.value;
        setinputboxvalue(inputboxvalue);
        if(index<length-1)
        {
            inputRef.current[index+1].focus();
        }
        creditcardhandler(inputboxvalue.join(""));
        console.log(inputboxvalue); 
    }

  return (
    <div>
        {inputBoxLength.map((item,index)=>{
            return (
            <input 
            ref={(element)=>{
                console.log(element);
                inputRef.current[index] = element;
            }}
             key={index} maxLength={4}
             onChange={(e)=>handlechange(e,index)}
              />
            );
        })}
    </div>
  )
}

export default Creditcard;