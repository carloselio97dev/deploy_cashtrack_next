import { RegisterForm } from "@/app/components/auth/RegisterForm";
import { Metadata} from "next";
import Link from "next/link";

export const metadata:Metadata = {
      title:"CashTrackr - Crear Cuenta",
      description:"CrachTrackr - Crear Cuenta",
      keywords:'Nextjs, Tailwindcss'
}

export default function RegisterPage() {

  console.log("Register Page");


  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Crear una Cuenta</h1>
      <p className="text-3xl font-bold">y controla tu <span className="text-amber-500">finanzas</span></p>
       <RegisterForm/>

       <nav className="mt-10  flex flex-col space-y-4">
          <Link
                href='/auth/login'
                className="text-center text-gray-500"
          >
              ¿Ya tienes cuenta? Iniciar Sesion
          </Link>
          <Link
                href='/auth/register'
                className="text-center text-gray-500"
          >
              ¿No tienes cuenta? Crea una
          </Link>
       </nav>
       
    </>
  )
}
