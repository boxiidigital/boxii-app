import { createContext, useContext } from "react";

export const BoxContext = createContext();

export const useBoxes = () => {
    const context = useContext(BoxContext)
    if(!context) throw new Error('useBoxes must be used eithin a BoxContextProvider')
    return context
}

export const BoxContextProvider = ({children}) => {
    return <BoxContext.Provider value={{name:"Hello world"}}>
        {children}
    </BoxContext.Provider>
}