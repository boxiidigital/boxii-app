import { useEffect } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";
import { BoxForm } from "../components/BoxForm";
import { useBoxes } from "../context/BoxContext";

export function Home() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!supabase.auth.getUser()) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  const obj = useBoxes()
  console.log(obj)

  return (
    <div>
      Home
      <button onClick={() => supabase.auth.signOut()}>Logout</button>
      <BoxForm></BoxForm>
    </div>
  );
}
