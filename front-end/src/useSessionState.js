import { useState, useEffect } from 'react';

const useSessionState = (sessionStorageKey, defaultValue) => {
    const [value, setValue] = useState(
        JSON.parse(sessionStorage.getItem(sessionStorageKey) || JSON.stringify(defaultValue))
    );
    
    useEffect(() => {
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(value));
    }, [value]);

    const clearValue = () => {
        sessionStorage.removeItem(sessionStorageKey);
    }

    return [value, setValue, clearValue];
}

export default useSessionState;