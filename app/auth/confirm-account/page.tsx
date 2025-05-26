import { ConfirmAccount } from "@/app/components/auth/ConfirmAccount";

export default function ConfirmAccountPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Cofirma tu cuentra</h1>
      <p className="text-3xl font-bold">Ingresa el Còdigo que Recibiste<span className="text-amber-500">por Email</span></p>
      <ConfirmAccount/>
    </>
  )
}
