import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";

import { supabase } from "./supabase/supabase.config";
import { AuthContextProvider } from "./context/AuthContext";
import { BoxContextProvider } from "./context/BoxContext";

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     if (!session) {
  //       navigate("/login");
  //     } else {
  //       navigate("/");
  //     }
  //   });
  // }, []);

  return (
    <>
      <AuthContextProvider>
        <BoxContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BoxContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
