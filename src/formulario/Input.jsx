import React, { useState } from 'react'

export default props =>{
    const [value, setValue] = useState('Inicial')

    function mudarValue (e) {
        setValue(e.target.value)
    }

    return(
        <div>
            <input value = {value} onChange = {mudarValue}/>
            <div>{value}</div>
        </div>
    )
}