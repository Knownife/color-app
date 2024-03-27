
import {useState} from "react";

import './index.css'
function ColorPicker(){
    let [color,setColor] = useState('#FFFFFF')

    let handleClickColor = (event)=>{
        setColor(event.target.value)
    }

    return <div className={'color-picker-container'}>
        <h1>Color picker</h1>
        <div className={'color-display'} style={{backgroundColor:color}} >
            <p>selected color: {color}</p>
        </div>
        <label>select color</label>
        <input type={"color"} value={color} onChange={handleClickColor}/>
    </div>
}

export default ColorPicker;