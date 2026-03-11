'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export interface EcosystemFilters {
    search: string;
    type: string | null;
    category: string | null;
}

export interface EcosystemContextValue {
    filters: EcosystemFilters;
    setFilter: <T extends keyof EcosystemFilters>(key: T, value: EcosystemFilters[T]) => void;
}

const EcosystemContext = createContext<EcosystemContextValue>({
    filters: {
        search: '',
        type: null,
        category: null,
    },
    setFilter: () => null,
});

export const useEcosystemFilters = () => useContext(EcosystemContext);

interface Props {
    children: React.ReactNode;
}

export const EcosystemProvider: React.FC<Props> = ({ children }) => {
    const [state, setState] = useState<EcosystemFilters>({
        search: '',
        type: null,
        category: null,
    });

    const setFilter = useCallback(<T extends keyof EcosystemFilters>(
        key: T,
        value: EcosystemFilters[T],
    ) => {
        setState((prev) => ({ ...prev, [key]: value }));
    }, []);

    return (
        <EcosystemContext.Provider value={{ filters: state, setFilter }}>
            {children}
        </EcosystemContext.Provider>
    );
};
