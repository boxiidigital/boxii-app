import { useEffect } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";
import { BoxForm } from "../components/BoxForm";
import { useBoxes } from "../context/BoxContext";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BoxList } from "../components/BoxList";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export function Home() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!supabase.auth.getUser()) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className="container">
      <div className="bannermain bg-blue-900 text-center p-8 flex flex-col justify-center items-center">
        <img
          className="max-w-[16%] m-4 mb-12"
          src="https://raw.githubusercontent.com/boxiidigital/assets-boxii-app/main/logoblanco.png"
          alt="Logo"
        />
        <h3 className="text-4xl text-white font-semibold mb-4">Hola Sofía</h3>
        <hr className="h-px w-full max-w-sm mx-auto my-4 bg-gray-100 border-0 dark:bg-gray-700" />
        <span className="text-3xl text-pink-600 m-2">Tu ahorro</span>
        <h1 className="text-7xl text-white font-bold m-2">$125.500</h1>
        <p className="text-xl text-white m-4">
          Ahorrar te ayuda a alcanzar tus metas financieras
        </p>
      </div>
      <div className="metas">
        <span>prueba</span>
        <BoxForm />
        <BoxList />
      </div>
    </div>
  );
}
