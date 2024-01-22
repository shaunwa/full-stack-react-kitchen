import { useState, useEffect } from 'react';

const usePersistentState = (localStorageKey, defaultValue) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(localStorageKey) || JSON.stringify(defaultValue))
    );
    
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value]);

    const clearValue = () => {
        localStorage.removeItem(localStorageKey);
    }

    return [value, setValue, clearValue];
}

export default usePersistentState;