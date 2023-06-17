import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await supabase.auth.signInWithOtp({
        email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (supabase.auth.getUser()) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="micorreo@ejemplo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
      <div className="card">
        <button onClick={signInWithGoogle}>Iniciar con Google</button>
      </div>
    </div>
  );
}
