import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

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
    <div className="container">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <img
            className="max-w-[28%] mb-8"
            src="https://raw.githubusercontent.com/boxiidigital/assets-boxii-app/main/logo.png"
            alt="Logo"
          />
          <h1 className="text-2xl text-blue-900 font-bold mb-6">
            Ingresa a tu aplicación
          </h1>
          <form className="contents" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="micorreo@ejemplo.com"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 rounded py-2 px-3 mb-4"
            />
            <button className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded mb-4">
              Acceder
            </button>
          </form>
            <button
              className="flex items-center justify-center bg-white text-gray-800 font-bold py-2 px-4 rounded border border-gray-400 shadow hover:bg-gray-100"
              onClick={signInWithGoogle}
            >
              <FaGoogle className="text-xl mr-2 p-1" />
              Iniciar con Google
            </button>
        </div>
      </div>
      {/* <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Inicio de sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="border border-gray-400 rounded py-2 px-3 mb-4"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
          Iniciar sesión
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Iniciar sesión con Google
        </button>
      </div>
    </div> */}
    </div>
  );
}
