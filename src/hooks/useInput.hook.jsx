import React, { useState } from 'react';

export default function useInput(defaultState) {
    const [inputValue, setInputValue] = useState(defaultState);
    const handleChangeInputValue = data => {
        setInputValue(data);
    };
    return [inputValue, handleChangeInputValue];
}
