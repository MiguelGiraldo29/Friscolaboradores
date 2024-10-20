import React, { createContext, useState, useContext, useEffect } from 'react';


const OrderContext = createContext();


export const OrderProvider = ({ children }) => {
    const getInitialTotal = () => {
        const savedTotal = localStorage.getItem('total');
        const lastUpdate = localStorage.getItem('lastUpdate');

        if (savedTotal === null) return 0;

        const now = new Date();
        const lastUpdateDate = new Date(lastUpdate);
        const diffTime = now - lastUpdateDate;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        if (diffDays >= 15) {
            localStorage.removeItem('total');
            localStorage.removeItem('lastUpdate');
            return 0;
        }
        return parseFloat(savedTotal)
    };

    const [total, setTotal] = useState(getInitialTotal);

    useEffect(() => {
        localStorage.setItem('lastUpdate', new Date().toISOString());
    }, [total]);

    const addTotal = (amount) => {
        setTotal(prevTotal => {
            const newTotal = prevTotal + amount;
            localStorage.setItem('total', newTotal);
            return newTotal;
        });
    };
    
    return(
        <OrderContext.Provider value={{ total, addTotal}}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => useContext(OrderContext);