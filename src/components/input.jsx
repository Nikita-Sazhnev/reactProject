import React, { useState } from 'react';

const Input = () =>{ 
    const [value, setValue] = useState("Введите текст");

    return (
        <div>
            <h2>{value}</h2>
            <input 
                type="text" 
                value={value}
                onChange={event => setValue(event.target.value)}  
            />
        </div>
    );
};

export default Input