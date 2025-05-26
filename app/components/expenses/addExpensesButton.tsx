"use client"

import { useRouter } from "next/navigation";

export default function AddExpensesButton() {

    const router = useRouter();

    return (
        <>
        <button type="button" 
        className="bg-amber-500 px-10 py-2 rounded-lg text-white font-bold cursor-pointer"
        onClick={()=>router.push('?addExpense=true&showModal=true')}
        
        > Agrega Gastos</button>
        </>
    )
}