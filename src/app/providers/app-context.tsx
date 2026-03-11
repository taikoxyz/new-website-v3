'use client';

import React, { createContext, useContext } from 'react';
import { useObjectState } from '@/lib/hooks/use-object-state';
import type { ObjectStateOutput } from '@/lib/hooks/use-object-state/types';

export interface AppContextValues {
    menuActive: boolean;
}

export type AppContextType = ObjectStateOutput<AppContextValues>;

const createAppState = (): AppContextValues => ({
    menuActive: false,
});

const AppContext = createContext<AppContextType>([
    createAppState(),
    () => null,
    {
        resetState: () => null,
        setStateValue: () => null,
    },
]);

export const useApp = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const context = useObjectState(createAppState());

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
};
