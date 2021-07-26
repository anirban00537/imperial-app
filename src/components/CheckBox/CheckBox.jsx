import React from 'react'
import {useState} from "react";

import Option from "../Option/Option";
const some=[
1,2,
3,
4
]
function CheckBox({options=some,onChange,value=""}) {
    const [selected,setSelected]=useState(value);
    function _onChange(label){
        setSelected(label);
        onChange && onChange(label);
    }
    return (
        <div className="checkbox-wrapper">
           {
               options.map((option,i)=>(
                 <Option key_label={i+1} key={i} label={option} onSelect={_onChange} checked={selected===option}/>
               ))
           }
        </div>
    )
}

export default CheckBox;
