import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/supabase.config";

export const BoxContext = createContext();

export const useBoxes = () => {
  const context = useContext(BoxContext);
  if (!context)
    throw new Error("useBoxes must be used eithin a BoxContextProvider");
  return context;
};

export const BoxContextProvider = ({ children }) => {
  const [boxes, setBoxes] = useState([]);

  const getBoxes = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const {error, data} = await supabase
    .from("boxes")
    .select()
    .eq("userId", user.id);
    
    if (error) throw error;

    setBoxes(data)
  };

  return (
    <BoxContext.Provider value={{ boxes, getBoxes }}>
      {children}
    </BoxContext.Provider>
  );
};
