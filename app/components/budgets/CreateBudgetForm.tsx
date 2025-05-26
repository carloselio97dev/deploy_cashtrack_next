"use client"

import { useActionState, useEffect } from "react"
import { createBudget } from "@/actions/create-budget-actions"
import { ErrrorMessage } from "../ui/ErrrorMessage"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";
import { BudgetForm } from "./BudgetForm"
export default function CreateBudgetForm() {

      const router = useRouter();
       const [state, dispatch]=useActionState(createBudget, {
          errors:[],
          success:''
       })

       useEffect(()=>{
        if(state.success){
            toast.success(state.success)
               router.push('/admin')
        }
       },[state.success, router])


  return (
    <form
      className="mt-10 space-y-3"
      noValidate
      action={dispatch}
    >
      {state.errors.map(error =><ErrrorMessage key={error}>{error}</ErrrorMessage>)}
      <BudgetForm/>
      <input
        type="submit"
        className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
        value='Crear Presupuesto'
      />
    </form>
  )
}