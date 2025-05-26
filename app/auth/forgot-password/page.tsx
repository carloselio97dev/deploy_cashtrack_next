import ForgotPasswordForm from "@/app/components/auth/ForgotPasswordForm";
import { Metadata} from "next";
import Link from "next/link";

export const metadata:Metadata = {
      title:"CashTrackr - Olvide mi Password",
      description:"CrachTrackr -Olvide mi Password",
    
}

export  default function ForgotPasswordPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">¿Olvidastes tu contraseña?</h1>
      <p className="text-3xl font-bold">aqui puedes <span className="text-amber-500">reestablecerla</span></p>
      <ForgotPasswordForm/>

      <nav className="mt-10  flex flex-col space-y-4">
          <Link
                href='/auth/login'
                className="text-center text-gray-500"
          >
              ¿Ya tienes cuenta? Iniciar Sesion
          </Link>
          <Link
                href='/auth/forgot-password'
                className="text-center text-gray-500"
          >
              ¿Olvidates tu Contraseña? Reestablecer
          </Link>
       </nav>

    </>
  
  )
}

